const calcular = document.getElementById('calcular');

function appcalculadoracostura () {
    const diametro = document.getElementById('diametro').value;
    const resultado = document.getElementById('resultado')
    const appcalculadoracostura = (diametro * 3.14).toFixed(1);
}

calcular.addEventListener('onclick', appcalculadoracostura);
