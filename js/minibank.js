const checkSaldo = () => {
    let beløp = document.getElementById("beløp").value;
    let pinkode = document.getElementById("pinkode").value;
    let text = document.getElementById("text");
    text.innerText = "";

    if (pinkode == 1234 && beløp <= 2000) {
        text.innerText = "Transaksjonen er vellykka! Din nye saldo er: " + beløp + " kr. Takk for besøket Lars Olai";
    } else if (pinkode == 1234 && beløp > 2000) {
        text.innerText = "Du har ikkje nok pengar på kontoen! Prøv et mindre beløp!";
    } else {
        text.innerText = "Feil pinkode! Prøv igjen!";
    }
}