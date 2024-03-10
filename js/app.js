console.log("funziona");

// LEGGERE I DATI DI UN "FORM" AL CLICK
const inputKmElement = document.getElementById('kmDaPercorrere');
const inputEtaElement = document.getElementById('etaPasseggero');
console.log(inputKmElement, inputEtaElement);

const prezzoFinaleElement = document.getElementById('prezzoFinale');

const buttonElement = document.getElementById('submit');
buttonElement.addEventListener('click', function () {
    const chilometri = parseInt(inputKmElement.value); // number
    // const eta = parseInt(inputEtaElement.value); // number
    const eta = inputEtaElement.value;
    console.log(chilometri, eta);

    const prezzoAlChilometro = 0.21;
    const prezzoBigliettoIntero = chilometri * prezzoAlChilometro;
    let prezzoBiglietto = chilometri * prezzoAlChilometro;
    let sconto = 0;

    /* // Se l'età è inferiore a 18 anni applica uno sconto del 20%
    if (eta < 18) {
        sconto = prezzoBiglietto * 20 / 100;
    }
    // ALTRIMENTI SE l'età è maggiore a 65 anni applica uno sconto del 40%
    else if (eta > 65) {
        sconto = prezzoBiglietto * 40 / 100;
    }
    // ALTRIMENTI biglietto intero */

    // SE eta è uguale a minorenne applica uno sconto del 20%
    if (eta === "minorenne") {
        sconto = prezzoBiglietto * 20 / 100;
    }
    //ALTRIMENTI SE eta è uguale a overSessantacinque applica uno sconto del 20%
    else if (eta === "overSessantacinque") {
        sconto = prezzoBiglietto * 40 / 100;
    }

    prezzoBiglietto = prezzoBiglietto - sconto;
    console.log("Il prezzo del biglietto è:", prezzoBiglietto.toFixed(2), "€");

    prezzoFinaleElement.innerHTML = `
    <table class="table caption-top">
        <caption class="text-center">RIEPILOGO ORDINE</caption>
        <thead>
            <tr>
                <th>KM del viaggio</th>
                <th>Prezzo base</th>
                <th>Sconto applicato</th>
                <th>Prezzo finale</th> 
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>${chilometri} </td>
                <td>${prezzoBigliettoIntero.toFixed(2)}€ </td>
                <td>${sconto.toFixed(2)}€ </td>
                <td>${prezzoBiglietto.toFixed(2)}€</td>
            </tr>
        </tbody>
    </table>
    `
})
