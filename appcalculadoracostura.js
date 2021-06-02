const calcular = document.getElementById('calcular');
var pi = 3.14;
function appcalculadoracostura () {
    var pi = 3.14;
    const diametro = document.getElementById('diametro').value;
    const resultado = document.getElementById('resultado');
    
    if (diametro !== '' && pi !== "3.14") {
        const appcalculadoracostura = (diametro * pi).toFixed(1);
        
        resultado.textContent = `Corte ${appcalculadoracostura}`;
}

calcular.addEventListener('onclick', appcalculadoracostura);
