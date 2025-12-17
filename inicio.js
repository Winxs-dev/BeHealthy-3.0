// Newsletter - Página Início (inicio.html)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletterForm');
  const messageEl = document.getElementById('newsletterMessage');

  if (!form) return; // Segurança caso não encontre o formulário

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // ← Isso impede o recarregamento da página!

    const userEmail = document.getElementById('userEmail').value.trim();

    if (!userEmail || !userEmail.includes('@')) {
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
      .then(function () {
        messageEl.textContent = 'Obrigado! Você foi inscrito com sucesso 🎉';
        messageEl.style.color = '#a8e6cf';
        document.getElementById('userEmail').value = '';
      }, function (error) {
        messageEl.textContent = 'Erro ao enviar. Tente novamente mais tarde.';
        messageEl.style.color = '#ff6b6b';
        console.error('Erro EmailJS:', error);
      });
  });
});