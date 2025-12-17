const receitas = [
  // === CAFÉ DA MANHÃ (ids 0 a 6) ===
  { id: 0, titulo: "Omelete de Espinafre", categoria: "Café da Manhã", dificuldade: "facil", tempo: "10 min", calorias: "180 kcal", desc: "Rico em ferro e proteínas!", img: "img/omelete_espinafre.jpg", ingredientes: ["2 ovos", "1 xícara de espinafre", "1/2 tomate", "Sal e pimenta"], preparo: ["Bata os ovos.", "Refogue o espinafre e tomate.", "Despeje os ovos e cozinhe até firmar."], dica: "Adicione queijo branco light!" },
  { id: 1, titulo: "Panqueca de Aveia Fit", categoria: "Café da Manhã", dificuldade: "facil", tempo: "15 min", calorias: "210 kcal", desc: "Sem farinha, com banana e aveia!", img: "img/panqueca_aveia.jpg", ingredientes: ["1 banana", "1/2 xícara de aveia", "1 ovo", "Canela a gosto"], preparo: ["Amasse a banana.", "Misture com aveia, ovo e canela.", "Frite em frigideira antiaderente."], dica: "Sirva com frutas ou melado." },
  { id: 2, titulo: "Tapioca de Frango Desfiado", categoria: "Café da Manhã", dificuldade: "facil", tempo: "10 min", calorias: "220 kcal", desc: "Opção prática e proteica!", img: "img/tapioca_frango.jpg", ingredientes: ["2 col sopa goma de tapioca", "50g frango desfiado", "1 fatia queijo branco", "Cebolinha"], preparo: ["Espalhe a goma na frigideira.", "Aqueça até formar massa.", "Adicione recheio e dobre."], dica: "Adicione tomate para frescor!" },
  { id: 3, titulo: "Iogurte com Granola e Frutas", categoria: "Café da Manhã", dificuldade: "facil", tempo: "5 min", calorias: "250 kcal", desc: "Crocante e nutritivo!", img: "img/iogurte_granola.jpg", ingredientes: ["1 pote iogurte natural", "1/2 xíc granola", "Frutas frescas", "Mel"], preparo: ["Monte camadas.", "Regue com mel."], dica: "Use granola caseira sem açúcar." },
  { id: 4, titulo: "Torrada de Abacate", categoria: "Café da Manhã", dificuldade: "facil", tempo: "10 min", calorias: "200 kcal", desc: "Clássico saudável!", img: "img/torrada_abacate.jpg", ingredientes: ["2 fatias pão integral", "1 abacate", "Limão", "Sal"], preparo: ["Toste o pão.", "Amasse abacate com limão.", "Espalhe."], dica: "Coloque ovo pochê por cima!" },
  { id: 5, titulo: "Smoothie Bowl Tropical", categoria: "Café da Manhã", dificuldade: "facil", tempo: "10 min", calorias: "280 kcal", desc: "Cremoso e colorido!", img: "img/smoothie_bowl.avif", ingredientes: ["1 banana congelada", "1/2 manga", "1/2 xíc iogurte", "Toppings"], preparo: ["Bata tudo.", "Coloque em bowl.", "Adicione toppings."], dica: "Use frutas congeladas para textura." },
  { id: 6, titulo: "Ovos Mexidos com Vegetais", categoria: "Café da Manhã", dificuldade: "facil", tempo: "15 min", calorias: "220 kcal", desc: "Energia para o dia!", img: "img/ovos_mexidos.jpg", ingredientes: ["2 ovos", "Vegetais variados", "Sal"], preparo: ["Refogue vegetais.", "Adicione ovos batidos.", "Mexa até cozinhar."], dica: "Use ervas frescas!" },

  // === ALMOÇO (ids 7 a 13) ===
  { id: 7, titulo: "Hambúrguer de Grão de Bico", categoria: "Almoço", dificuldade: "media", tempo: "35 min", calorias: "160 kcal", desc: "Vegetariano rico em proteínas!", img: "img/hamburguer_grao_bico.jpeg", ingredientes: ["1 lata grão de bico", "1/2 xíc aveia", "Alho", "Cebola", "Temperos"], preparo: ["Amasse o grão.", "Misture tudo.", "Modele e grelhe."], dica: "Sirva com salada." },
  { id: 8, titulo: "Salada de Quinoa com Frango", categoria: "Almoço", dificuldade: "media", tempo: "25 min", calorias: "320 kcal", desc: "Prato completo!", img: "img/salada_quinoa.jpeg", ingredientes: ["1/2 xíc quinoa", "100g frango", "Pepino", "Tomate", "Azeite"], preparo: ["Cozinhe quinoa.", "Grelhe frango.", "Misture."], dica: "Ótima para marmita!" },
  { id: 9, titulo: "Sopa de Abóbora Cremosa", categoria: "Almoço", dificuldade: "facil", tempo: "30 min", calorias: "150 kcal", desc: "Reconfortante e leve!", img: "img/sopa_abobora.jpg", ingredientes: ["500g abóbora", "Cebola", "Alho", "Caldo legumes"], preparo: ["Refogue.", "Cozinhe.", "Bata."], dica: "Sirva com salsinha." },
  { id: 10, titulo: "Frango Grelhado com Legumes", categoria: "Almoço", dificuldade: "facil", tempo: "25 min", calorias: "280 kcal", desc: "Refeição balanceada!", img: "img/frango_legumes.jpg", ingredientes: ["1 peito frango", "Legumes variados", "Azeite"], preparo: ["Tempere e grelhe.", "Asse legumes."], dica: "Use ervas frescas." },
  { id: 11, titulo: "Salada de Grão de Bico", categoria: "Almoço", dificuldade: "facil", tempo: "15 min", calorias: "190 kcal", desc: "Proteica e refrescante!", img: "img/salada_grao_bico.jpg", ingredientes: ["1 lata grão", "Tomate", "Cebola roxa", "Limão"], preparo: ["Misture tudo.", "Tempere."], dica: "Adicione abacate." },
  { id: 12, titulo: "Cuscuz Marroquino com Legumes", categoria: "Almoço", dificuldade: "media", tempo: "20 min", calorias: "210 kcal", desc: "Leve e nutritivo!", img: "img/cuscuz_legumes.jpg", ingredientes: ["1 xíc cuscuz", "Legumes", "Ervas"], preparo: ["Hidrate cuscuz.", "Misture com legumes."], dica: "Adicione passas para doçura." },
  { id: 13, titulo: "Peixe Assado com Ervas", categoria: "Almoço", dificuldade: "media", tempo: "30 min", calorias: "260 kcal", desc: "Ômega-3 e sabor!", img: "img/peixe_assado.jpg", ingredientes: ["1 filé peixe", "Limão", "Ervas", "Azeite"], preparo: ["Tempere.", "Asse 20 min."], dica: "Sirva com arroz integral." },

  // === SOBREMESA (ids 14 a 20) ===
  { id: 14, titulo: "Cookies de Banana e Aveia", categoria: "Sobremesa", dificuldade: "facil", tempo: "20 min", calorias: "75 kcal", desc: "Apenas 3 ingredientes!", img: "img/cookies_banana.jpeg", ingredientes: ["2 bananas", "1 xíc aveia", "Gotas chocolate 70%"], preparo: ["Amasse bananas.", "Misture.", "Asse."], dica: "Sem açúcar!" },
  { id: 15, titulo: "Bolo de Caneca Fit", categoria: "Sobremesa", dificuldade: "facil", tempo: "3 min", calorias: "180 kcal", desc: "Rápido e individual!", img: "img/bolo_caneca.jpg", ingredientes: ["Farinha aveia", "Cacau", "Mel", "Ovo"], preparo: ["Misture na caneca.", "Micro-ondas 1:30."], dica: "Adicione frutas vermelhas." },
  { id: 16, titulo: "Creme de Abacate", categoria: "Sobremesa", dificuldade: "facil", tempo: "5 min", calorias: "200 kcal", desc: "Cremoso e saudável!", img: "img/creme_abacate.jpg", ingredientes: ["1 abacate", "Mel", "Limão", "Canela"], preparo: ["Amasse tudo."], dica: "Sirva gelado." },
  { id: 17, titulo: "Picolé de Coco e Morango", categoria: "Sobremesa", dificuldade: "facil", tempo: "240 min", calorias: "90 kcal", desc: "Natural e refrescante!", img: "img/picole_coco.jpg", ingredientes: ["Leite coco", "Morangos", "Mel"], preparo: ["Bata.", "Coloque em forminhas.", "Congele."], dica: "Mergulhe forminhas em água quente para desenformar." },
  { id: 18, titulo: "Mousse de Chocolate Fit", categoria: "Sobremesa", dificuldade: "facil", tempo: "15 min", calorias: "150 kcal", desc: "Sem culpa!", img: "img/mousse_chocolate.webp", ingredientes: ["Abacate", "Cacau", "Mel"], preparo: ["Bata tudo.", "Refrigere."], dica: "Decore com raspas." },
  { id: 19, titulo: "Pudim de Chia", categoria: "Sobremesa", dificuldade: "facil", tempo: "180 min", calorias: "180 kcal", desc: "Vegano e rico em ômega-3!", img: "img/pudim_chia.jpg", ingredientes: ["Chia", "Leite vegetal", "Mel"], preparo: ["Misture e refrigere."], dica: "Prepare na noite anterior." },
  { id: 20, titulo: "Gelatina Natural com Frutas", categoria: "Sobremesa", dificuldade: "facil", tempo: "120 min", calorias: "100 kcal", desc: "Leve e colorida!", img: "img/gelatina_frutas.jpg", ingredientes: ["Gelatina sem sabor", "Suco natural", "Frutas"], preparo: ["Prepare gelatina.", "Adicione frutas.", "Refrigere."], dica: "Use suco sem açúcar." },

  // === BEBIDAS (ids 21 a 27) ===
  { id: 21, titulo: "Smoothie Verde Energizante", categoria: "Bebidas", dificuldade: "facil", tempo: "5 min", calorias: "220 kcal", desc: "Nutritivo para começar o dia!", img: "img/bebida_verde.jpeg", ingredientes: ["Espinafre", "Banana", "Maçã", "Leite amêndoas", "Chia"], preparo: ["Bata tudo."], dica: "Adicione gelo." },
  { id: 22, titulo: "Vitamina de Morango", categoria: "Bebidas", dificuldade: "facil", tempo: "3 min", calorias: "160 kcal", desc: "Proteica e refrescante!", img: "img/vitamina_morango.jpg", ingredientes: ["Morangos", "Iogurte", "Leite", "Mel"], preparo: ["Bata tudo."], dica: "Adicione whey se quiser." },
  { id: 23, titulo: "Chá de Gengibre e Limão", categoria: "Bebidas", dificuldade: "facil", tempo: "10 min", calorias: "15 kcal", desc: "Termogênico!", img: "img/cha_gengibre.jpg", ingredientes: ["Gengibre", "Limão", "Água"], preparo: ["Ferva.", "Coe.", "Adicione limão."], dica: "Tome em jejum." },
  { id: 24, titulo: "Água Saborizada Detox", categoria: "Bebidas", dificuldade: "facil", tempo: "5 min", calorias: "10 kcal", desc: "Hidratação com sabor!", img: "img/agua_infusionada.webp", ingredientes: ["Água", "Limão", "Pepino", "Hortelã"], preparo: ["Fatie e infunda."], dica: "Beba ao longo do dia." },
  { id: 25, titulo: "Suco Verde", categoria: "Bebidas", dificuldade: "facil", tempo: "5 min", calorias: "120 kcal", desc: "Detox completo!", img: "img/suco_verde.jpg", ingredientes: ["Folhas verdes", "Maçã", "Gengibre", "Limão"], preparo: ["Bata ou centrifuge."], dica: "Tome fresco." },
  { id: 26, titulo: "Leite de Aveia Caseiro", categoria: "Bebidas", dificuldade: "facil", tempo: "10 min", calorias: "120 kcal", desc: "Vegetal e econômico!", img: "img/leite_aveia.jpg", ingredientes: ["Aveia", "Água"], preparo: ["Bata e coe."], dica: "Guarde na geladeira até 4 dias." },
  { id: 27, titulo: "Chá Mate Gelado com Limão", categoria: "Bebidas", dificuldade: "facil", tempo: "10 min", calorias: "30 kcal", desc: "Refrescante e energizante!", img: "img/cha_mate.webp", ingredientes: ["Chá mate", "Limão", "Gelo"], preparo: ["Prepare chá.", "Gelar e adicionar limão."], dica: "Adicione hortelã!" }
];

// Renderiza as receitas no grid
function renderizarReceitas(lista) {
  const grid = document.getElementById("receitasGrid");
  grid.innerHTML = lista.map((receita) => {
    const difTexto = receita.dificuldade === "facil" ? "Fácil" : receita.dificuldade === "media" ? "Média" : "Difícil";
    return `
      <div class="receita-card" data-categoria="${receita.categoria}">
        <img src="${receita.img}" alt="${receita.titulo}" class="receita-img" onerror="this.src='img/placeholder.jpg'">
        <div class="receita-content">
          <h3 class="receita-titulo">${receita.titulo}</h3>
          <p class="receita-desc">${receita.desc}</p>
          <div class="receita-info">
            <span><i class="far fa-clock"></i> ${receita.tempo}</span>
            <span><i class="fas fa-fire"></i> ${receita.calorias}</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <span class="dificuldade ${receita.dificuldade}">${difTexto}</span>
            <span style="color: #23786f; font-weight: 500;">${receita.categoria}</span>
          </div>
          <button class="btn-receita" onclick="abrirReceita(${receita.id})">Ver receita completa</button>
        </div>
      </div>`;
  }).join("");
}

// Abre o modal com detalhes da receita
function abrirReceita(id) {
  const r = receitas[id];
  document.getElementById("modalTitulo").textContent = r.titulo;
  document.getElementById("modalImg").src = r.img;
  document.getElementById("modalTempo").textContent = r.tempo;
  document.getElementById("modalCalorias").textContent = r.calorias;
  document.getElementById("modalIngredientes").innerHTML = r.ingredientes.map(i => `<li>${i}</li>`).join("");
  document.getElementById("modalPreparo").innerHTML = r.preparo.map(p => `<li>${p}</li>`).join("");
  document.getElementById("modalDica").textContent = r.dica;
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Filtra ao digitar (respeita categoria ativa)
function filtrarReceitas() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const activeBtn = document.querySelector(".filter-btn.active");
  const categoriaAtiva = activeBtn ? activeBtn.dataset.categoria : "Todas";

  let filtradas = receitas;
  if (categoriaAtiva !== "Todas") {
    filtradas = filtradas.filter(r => r.categoria === categoriaAtiva);
  }
  if (termo) {
    filtradas = filtradas.filter(r =>
      r.titulo.toLowerCase().includes(termo) ||
      r.desc.toLowerCase().includes(termo) ||
      r.ingredientes.some(i => i.toLowerCase().includes(termo))
    );
  }
  renderizarReceitas(filtradas);
}

function filtrarCategoria(cat) {
  // Remove active de todos os botões
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  
  // Adiciona active no botão correto
  const btnClicado = document.querySelector(`.filter-btn[data-categoria="${cat}"]`);
  if (btnClicado) btnClicado.classList.add("active");
  
  // Filtra e renderiza
  const filtradas = cat === "Todas" ? receitas : receitas.filter(r => r.categoria === cat);
  renderizarReceitas(filtradas);
  
  // Limpa a busca ao trocar de categoria
  document.getElementById("busca").value = "";
}

// Newsletter
document.getElementById("newsletterForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("userEmail").value.trim();
  const msg = document.getElementById("newsletterMessage");
  if (!email) return msg.textContent = "Digite um e-mail válido.", msg.style.color = "#ff6b6b";

  msg.textContent = "Enviando...";
  emailjs.send("service_i8u2sh8", "template_0nj6n03", { email: email, date: new Date().toLocaleString("pt-BR") })
    .then(() => { msg.textContent = "Inscrito com sucesso! 🎉"; msg.style.color = "#a8e6cf"; document.getElementById("userEmail").value = ""; })
    .catch(() => { msg.textContent = "Erro. Tente novamente."; msg.style.color = "#ff6b6b"; });
});

// Fecha modal clicando fora
window.onclick = e => { if (e.target === document.getElementById("modal")) fecharModal(); };

// Inicializa
document.addEventListener("DOMContentLoaded", () => renderizarReceitas(receitas));

// Funções globais
window.abrirReceita = abrirReceita;
window.fecharModal = fecharModal;
window.filtrarReceitas = filtrarReceitas;
window.filtrarCategoria = filtrarCategoria;