// prendere il valore dato dall utente negli input
const userName = document.querySelector("[name='user-name']");
const kmDaPercorrere = document.querySelector("[name='km-percorrere']");
const fasciaEta = document.querySelector("[name='fascia-eta']");
// bottone invia
const buttonInvia = document.getElementById("btn-invia");


// calcoli per il prezzo del  biglietto
const prezzoAlKm = (0.21)
const prezzoStandard = (prezzoAlKm * kmDaPercorrere)
const prezzoMinori = (prezzoStandard / 100 * 20)
const prezzoOver65 = (prezzoStandard / 100  * 40)




buttonInvia.addEventListener("click", function(){
    // richiesta alla console  di scrivere i dati inseriti dall utente
    // @ts-ignore
    console.log(userName.value,  kmDaPercorrere.value, fasciaEta.value)
    console.log(prezzoStandard, prezzoMinori, prezzoOver65,)

    // reset degli inputValue dopo l invio dei dati
    // @ts-ignore
    userName.value = ""
    // @ts-ignore
    kmDaPercorrere.value = ""
    // @ts-ignore
    fasciaEta.value = ""


})


