const calcular = document.getElementById('calcular');

function appcalculadoracostura {
  const diametro = document.getElementById('diametro').value;  
  return Math.PI * diametro;
}

calcular.addEventListener('onclick', appcalculadoracostura);
