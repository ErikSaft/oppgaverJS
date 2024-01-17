let heightMax = 3
let personHeight = prompt("Kor høg er du?");

if(personHeight >= heightMax) {
    alert("NB! Du kan ikkje skrive inn ei høgde over 3 meter. Kontakt Guiness rekordbok dersom du treng å skrive eit høgare tal.");
} else {
    alert("Du er " + personHeight + " meter høg.");
}