// prendere il valore dato dall utente negli input
const userName = document.querySelector("[name='user-name']");

const kmDaPercorrere = document.querySelector("[name='km-percorrere']");

const fasciaEta = document.querySelector("[name='fascia-eta']");

// bottone invia
const buttonInvia = document.getElementById("btn-invia");

// console.log("ciao", kmDaPercorrere, fasciaEta.value)

// calcoli per il prezzo del  biglietto
const  buttonCancel = document.getElementById("btn-cancel")







buttonInvia.addEventListener("click", function () {
    
    const userNameValue = userName.value;
    const kmDaPercorrereN = parseInt(kmDaPercorrere.value);
    const fasciaEtaVal = fasciaEta.value;
    const prezzoAlKm = (0.21);
    const prezzoStandardCalc = (prezzoAlKm * kmDaPercorrereN);
    const prezzoStandard = (prezzoAlKm * kmDaPercorrereN).toFixed(2);
    const prezzoMinoriCalc = (prezzoStandardCalc / 100 * 20);
    const prezzoOver65Calc = (prezzoStandardCalc / 100 * 40);
    const prezzoMinori =(prezzoStandardCalc - prezzoMinoriCalc).toFixed(2);
    const prezzoOver65 = (prezzoStandardCalc - prezzoOver65Calc).toFixed(2);
    const randomCarrozza = Math.floor(Math.random() *100);
    const randomCodCp = Math.floor(Math.random() *9999) + 10000;

    const ilTuoBiglietto = document.querySelector(".your-tiket")
    const error = document.querySelector(".errore")



    // richiesta alla console  di scrivere i dati inseriti dall utente
    console.log(userNameValue.lenght);

    
    // console.log(userName.value, kmDaPercorrere.value, fasciaEta.value)
    // console.log(prezzoStandard, prezzoMinori, prezzoOver65,)
    // reset degli inputValue dopo l invio dei dati

    if(isNaN(kmDaPercorrereN)){
        error.classList.add("try-my-show")
        ilTuoBiglietto.classList.remove("try-my-show")


    }else if (fasciaEtaVal == "minorenne"){
        ilTuoBiglietto.classList.add("try-my-show")
        error.classList.remove("try-my-show")
        document.getElementById("nome-passeggero").innerHTML = ("" + userNameValue);
        document.getElementById("offerta").innerHTML = ("Junior");
        document.getElementById("carrozza").innerHTML = (""+ randomCarrozza);
        document.getElementById("cod-cp").innerHTML = (""+ randomCodCp);
        document.getElementById("costo-finale").innerHTML = ("€ " + prezzoMinori);

        
        
    }else if (fasciaEtaVal == "maggiorenne"){
        ilTuoBiglietto.classList.add("try-my-show")
        error.classList.remove("try-my-show")
        document.getElementById("nome-passeggero").innerHTML = ("" + userNameValue);
        document.getElementById("offerta").innerHTML = ("Standard");
        document.getElementById("carrozza").innerHTML = (""+ randomCarrozza);
        document.getElementById("cod-cp").innerHTML = (""+ randomCodCp);
        document.getElementById("costo-finale").innerHTML = ("€ " + prezzoStandard);
        
    }else if (fasciaEtaVal == "over65"){
        ilTuoBiglietto.classList.add("try-my-show")
        error.classList.remove("try-my-show")
        document.getElementById("nome-passeggero").innerHTML = ("" + userNameValue);
        document.getElementById("offerta").innerHTML = ("Senior");
        document.getElementById("carrozza").innerHTML = (""+ randomCarrozza);
        document.getElementById("cod-cp").innerHTML = (""+ randomCodCp);
        document.getElementById("costo-finale").innerHTML = ("€ " + prezzoOver65); 
        
    }
})



buttonCancel.addEventListener("click", function (){
        // reset degli inputValue dopo l invio dei dati
    userName.value = ""
    kmDaPercorrere.value = ""
    fasciaEta.value = ""
})


