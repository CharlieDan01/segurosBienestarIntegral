// public/js/whatsapp.js

function enviarFormularioWa(numeroDestino) {
  const nombre = document.getElementById('nombreCliente').value.trim();
  const telefono = document.getElementById('telefonoCliente').value.trim();
  const plan = document.getElementById('selectPlan').value;
  const checkNSS = document.getElementById('checkNSS').checked;
  const checkCURP = document.getElementById('checkCURP').checked;
  
  if(!nombre || !telefono || !plan) {
    alert('Por favor, llena tu nombre, teléfono y selecciona un plan antes de continuar.');
    return;
  }

  if(!checkNSS || !checkCURP) {
    alert('Debes confirmar que tienes tu NSS y tu CURP descargados marcando las casillas. Si no los tienes, usa los enlaces de ayuda para obtenerlos.');
    return;
  }

  let mensaje = ` Hola, quiero comenzar mi trámite de alta en el IMSS.%0A%0A`;
  mensaje += `*Mis datos:*%0A`;
  mensaje += `- Nombre: ${nombre}%0A`;
  mensaje += `- Teléfono: ${telefono}%0A`;
  mensaje += `- Plan elegido: ${plan}%0A%0A`;
  mensaje += ` Te confirmo que ya tengo descargados mis archivos de NSS y CURP. En un momento te los adjunto.`;

  const urlWa = `https://wa.me/${numeroDestino}?text=${mensaje}`;
  window.open(urlWa, '_blank');

  document.getElementById('formTramite').reset();
}