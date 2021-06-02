const calcular = document.getElementById('calcular');

function appcostura () {
    const diametro = document.getElementById('diametro').value;
    const resultado = document.getElementById('resultado');

    if (diametro !== '') {

        const tamanhodavolta = (diametro * 3.14)).toFixed(1);

        let classificacao = '';

        resultado.textContent = `${nome} corte ${tamanhodavolta}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', appcostura);
