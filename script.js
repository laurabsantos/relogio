function atualizarRelogio() {
  const agora = new Date();

  let h = agora.getHours().toString().padStart(2, '0');
  let m = agora.getMinutes().toString().padStart(2, '0');
  let s = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById("horas").textContent = h;
  document.getElementById("minutos").textContent = m;
  document.getElementById("segundos").textContent = s;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
