function atualizarRelogio() {
  const agora = new Date();
  
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  const dia = String(agora.getDate()).padStart(2, '0');
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const ano = agora.getFullYear();

  document.getElementById('horas').textContent = `${horas}:${minutos}:${segundos}`;
  document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;
}

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('toggle-theme');

  // Verifica se o modo escuro está ativado
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    button.textContent = '💡';  // Emoji da lâmpada apagada
  } else {
    body.classList.add('dark');
    button.textContent = '🌙';  // Emoji da lua (representando o modo escuro)
  }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Adiciona o evento de clique ao botão
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
