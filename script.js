function atualizarRelogio() {
  const agora = new Date();

  const h = agora.getHours();
  const m = agora.getMinutes();
  const s = agora.getSeconds();

  // Ângulos
  const anguloHora   = (h % 12) * 30 + m * 0.5;
  const anguloMinuto = m * 6;
  const anguloSegundo = s * 6;

  // Aplicar rotação
  document.getElementById("hour").style.transform =
      `translateX(-50%) rotate(${anguloHora}deg)`;

  document.getElementById("minute").style.transform =
      `translateX(-50%) rotate(${anguloMinuto}deg)`;

  document.getElementById("second").style.transform =
      `translateX(-50%) rotate(${anguloSegundo}deg)`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
