import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2bJ0MgVU1asObq2tNpEyLVLByLxdaWXA",
  authDomain: "behealthy-oficial.firebaseapp.com",
  projectId: "behealthy-oficial",
  storageBucket: "behealthy-oficial.firebasestorage.app",
  messagingSenderId: "440799283236",
  appId: "1:440799283236:web:84d2d71295e43e509f70b1",
  measurementId: "G-DGSKZZTQPL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let peso = 0, altura = 0, imc = 0, metaDiaria = 0;
let consumidoHoje = 0;
let historico = [];
let currentUser = null;
const hoje = new Date().toISOString().split('T')[0];

onAuthStateChanged(auth, (user) => {
  currentUser = user;
  if (user) {
    document.getElementById("authSection").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    carregarDadosUsuario(user.uid);
  } else {
    document.getElementById("authSection").style.display = "block";
    document.getElementById("mainApp").style.display = "none";
  }
});
// Funções para alternar entre login e cadastro
window.mostrarCadastro = () => {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("cadastroForm").style.display = "block";
  
  // Limpa campos do login
  document.getElementById("emailLogin").value = "";
  document.getElementById("senhaLogin").value = "";
};

window.mostrarLogin = () => {
  document.getElementById("cadastroForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  
  // Limpa campos do cadastro
  document.getElementById("emailCadastro").value = "";
  document.getElementById("senhaCadastro").value = "";
};

window.registrar = async () => {
  const email = document.getElementById("emailCadastro").value.trim();
  const senha = document.getElementById("senhaCadastro").value;
  if (!email || !senha) return alert("Preencha email e senha!");
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Conta criada com sucesso! Você já está logado(a).");
    // O onAuthStateChanged vai cuidar do resto
  } catch (e) {
    let msg = "Erro desconhecido.";
    if (e.code === "auth/email-already-in-use") msg = "Este email já está cadastrado.";
    else if (e.code === "auth/weak-password") msg = "Senha muito fraca (mín. 6 caracteres).";
    else if (e.code === "auth/invalid-email") msg = "Email inválido.";
    alert("Erro: " + msg);
  }
};

window.login = async () => {
  const email = document.getElementById("emailLogin").value.trim();
  const senha = document.getElementById("senhaLogin").value;
  if (!email || !senha) return alert("Preencha email e senha!");
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    // Sucesso: onAuthStateChanged esconde o authSection
  } catch (e) {
    let msg = "Erro desconhecido.";
    if (e.code === "auth/wrong-password" || e.code === "auth/user-not-found" || e.code === "auth/invalid-credential") {
      msg = "Email ou senha incorretos.";
    } else if (e.code === "auth/invalid-email") {
      msg = "Email inválido.";
    }
    alert("Erro: " + msg);
  }
};

window.logout = async () => {
  await signOut(auth);
};

async function carregarDadosUsuario(uid) {
  const userRef = doc(db, "usuarios", uid);
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    const d = snap.data();
    peso = d.peso; altura = d.altura; imc = d.imc; metaDiaria = d.metaDiaria;

    document.getElementById("infoUsuario").innerHTML = `
      <div style="margin-bottom: 20px; line-height: 1.8;">
        Peso: <strong>${peso} kg</strong> | 
        Altura: <strong>${(altura*100).toFixed(0)} cm</strong> | 
        IMC: <strong>${imc.toFixed(1)}</strong><br>
        Meta diária de água: <strong>${metaDiaria.toFixed(2)} L</strong>
      </div>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button onclick="mostrarEditarDados()" class="btn-editar">Editar</button>
        <button onclick="logout()" class="btn-sair">Sair da conta</button>
      </div>
    `;
    document.getElementById("dadosForm").style.display = "none";
  } else {
    document.getElementById("infoUsuario").innerHTML = "Bem-vindo! Preencha seus dados abaixo";
    document.getElementById("dadosForm").style.display = "block";
  }
  await carregarConsumoHoje(uid);
  atualizarUI();
}

window.mostrarEditarDados = () => {
  document.getElementById("peso").value = peso;
  document.getElementById("altura").value = (altura * 100).toFixed(0);
  document.getElementById("dadosForm").style.display = "block";
  document.getElementById("dadosForm").scrollIntoView({behavior: "smooth"});
};

window.salvarDadosECalcular = async () => {
  if (!currentUser) return;
  const novoPeso = parseFloat(document.getElementById("peso").value);
  const novaAlturaCm = parseFloat(document.getElementById("altura").value);
  if (!novoPeso || !novaAlturaCm) return alert("Preencha peso e altura!");

  peso = novoPeso;
  altura = novaAlturaCm / 100;
  imc = peso / (altura * altura);
  metaDiaria = (peso * 35) / 1000;

  await setDoc(doc(db, "usuarios", currentUser.uid), { peso, altura, imc, metaDiaria }, { merge: true });
  document.getElementById("dadosForm").style.display = "none";

  document.getElementById("infoUsuario").innerHTML = `
    <div style="margin-bottom: 20px; line-height: 1.8;">
      Dados atualizados com sucesso!<br>
      Peso: <strong>${peso} kg</strong> | 
      Altura: <strong>${novaAlturaCm} cm</strong> | 
      IMC: <strong>${imc.toFixed(1)}</strong><br>
      Meta diária: <strong>${metaDiaria.toFixed(2)} L</strong>
    </div>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <button onclick="mostrarEditarDados()" class="btn-editar">Editar</button>
      <button onclick="logout()" class="btn-sair">Sair da conta</button>
    </div>
  `;
  atualizarUI();
};

async function carregarConsumoHoje(uid) {
  const ref = doc(db, "usuarios", uid, "consumo", hoje);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    consumidoHoje = snap.data().total || 0;
    historico = snap.data().registros || [];
  } else {
    consumidoHoje = 0;
    historico = [];
  }
}

window.adicionarAgua = async (qtd) => {
  if (!currentUser) return;
  consumidoHoje += qtd;
  const hora = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  historico.push({ quantidade: qtd, hora, id: Date.now() + Math.random() });

  await setDoc(doc(db, "usuarios", currentUser.uid, "consumo", hoje),
    { total: consumidoHoje, registros: historico }, { merge: true });
  atualizarUI();
};

window.removerRegistro = async (id) => {
  const idx = historico.findIndex(h => h.id === id);
  if (idx === -1) return;

  consumidoHoje -= historico[idx].quantidade;
  historico.splice(idx, 1);

  const ref = doc(db, "usuarios", currentUser.uid, "consumo", hoje);
  if (historico.length === 0) {
    await setDoc(ref, { total: 0, registros: [] }, { merge: true });
  } else {
    await setDoc(ref, { total: consumidoHoje, registros: historico }, { merge: true });
  }
  atualizarUI();
};

function atualizarUI() {
  document.getElementById("consumido").textContent = consumidoHoje.toFixed(2) + "L";
  document.getElementById("meta").textContent = metaDiaria.toFixed(1);

  const percentual = metaDiaria > 0 ? Math.min((consumidoHoje / metaDiaria) * 100, 100) : 0;
  document.getElementById("progressRing").style.strokeDashoffset = 628 - (percentual / 100) * 628;

  const faltam = (metaDiaria - consumidoHoje).toFixed(2);
  document.getElementById("metaInfo").textContent = faltam > 0 ? `Faltam ${faltam}L` : "Meta atingida hoje!";

  document.getElementById("historicoList").innerHTML = historico.length === 0
    ? `<li style="text-align:center;color:#888;padding:20px;">Nenhum consumo hoje ainda</li>`
    : historico.map(h => `
      <li class="historico-item">
        <div><span>+${h.quantidade}L</span> <span>${h.hora}</span></div>
        <button onclick="removerRegistro(${h.id})" class="btn-delete" title="Remover">
          <i class="fas fa-trash"></i>
        </button>
      </li>`).join("");
}

// Confetes quando bater a meta
function dispararConfetes() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#23786f', '#009ea3', '#ffffff', '#a8e6cf', '#d0f4e6']
  });
}

// Flag para controlar confetes no dia atual
let metaJaComemoradaHoje = false;
const hojeParaConfetti = new Date().toISOString().split('T')[0];

function verificarEMarcarMeta() {
  const metaInfo = document.getElementById("metaInfo");
  if (!metaInfo) return;

  const texto = metaInfo.textContent || "";
  const metaAtingida = texto.includes("Meta atingida hoje");

  if (metaAtingida && !metaJaComemoradaHoje) {
    dispararConfetes();
    metaJaComemoradaHoje = true;
  } else if (!metaAtingida) {
    // Se o usuário removeu registros e saiu da meta, libera para comemorar novamente
    metaJaComemoradaHoje = false;
  }
}

// Observer para detectar mudança no texto da meta
const observer = new MutationObserver(verificarEMarcarMeta);
observer.observe(document.body, { childList: true, subtree: true, characterData: true });

// Também verifica imediatamente após cada atualização da UI
const atualizarUIOriginal = atualizarUI;
window.atualizarUI = function() {
  atualizarUIOriginal();
  verificarEMarcarMeta();
};

// Newsletter no footer
document.getElementById('newsletterForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const userEmail = document.getElementById('userEmail').value.trim();
  const messageEl = document.getElementById('newsletterMessage');

  if (!userEmail) {
    messageEl.textContent = 'Por favor, digite um e-mail válido.';
    messageEl.style.color = '#ff6b6b';
    return;
  }

  messageEl.textContent = 'Enviando...';
  messageEl.style.color = '#a8e6cf';

  const templateParams = {
    email: userEmail,
    date: new Date().toLocaleString('pt-BR'),
  };

  emailjs.send('service_i8u2sh8', 'template_0nj6n03', templateParams)
    .then(function() {
      messageEl.textContent = 'Obrigado! Você foi inscrito com sucesso 🎉';
      messageEl.style.color = '#a8e6cf';
      document.getElementById('userEmail').value = '';
    }, function(error) {
      messageEl.textContent = 'Erro ao inscrever. Tente novamente mais tarde.';
      messageEl.style.color = '#ff6b6b';
      console.error('EmailJS error:', error);
    });
});