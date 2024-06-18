function contarEVoltarVogais() {
    const frase = document.getElementById('fraseInput').value;
    const numeroDeVogais = contarVogais(frase);
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Número de vogais na frase: ${numeroDeVogais}`;
}

function contarVogais(frase) {
    frase = frase.toLowerCase();

    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === 'a' || frase[i] === 'e' || frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u') {
            contador++;
        }
    }

    return contador;
}