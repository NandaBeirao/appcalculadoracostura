const calcular = document.getElementById('calcular');

function appcalculadoracostura () {
    var pi = 3.14;
    const diametro = document.getElementById('diametro').value;
    const resultado = document.getElementById('resultado');
    const appcalculadoracostura = (diametro * pi).toFixed(1);
}

calcular.addEventListener('onclick', appcalculadoracostura);
