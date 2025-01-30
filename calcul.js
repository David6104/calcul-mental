let nbreBonneReponse = 0;
let nbreCoupJoue = 0;

function init() {
    ecrireNombre("#nombreA", tirageNombre(1, 50));
    ecrireNombre("#nombreB", tirageNombre(1, 50));
    document.querySelector("#reponse").value = "";
    document.querySelector("#reponse").style.backgroundColor = "white";
    document.querySelector("#repondre").disabled = false;
}
init();

function tirageNombre(min, max) {
    let nombre = Math.floor(Math.random() * (max - min + 1)) + min;
    return nombre;
}

function ecrireNombre(ID, valeur) {
    document.querySelector(ID).value = valeur;
}

function lireNombre(ID) {
    return Number(document.querySelector(ID).value);
}

function repondre() {
    nbreCoupJoue++;
    let resultatJuste = lireNombre("#nombreA") + lireNombre("#nombreB");
    let resultatUser = lireNombre("#reponse");
    if (resultatUser === resultatJuste) {
        document.querySelector("#reponse").style.backgroundColor = "#77FF00";
        nbreBonneReponse++;
        document.querySelector("#repondre").disabled = true; 
    } else {
        document.querySelector("#reponse").style.backgroundColor = "#FFAA00";
    }
    reussite(nbreBonneReponse, nbreCoupJoue);
}

function reussite(bonne, coup) {
    let progression = Metro.getPlugin("#progression", "progress");
    progression.buff(100);
    progression.val((bonne / coup) * 100);
    document.querySelector("#reussite").innerHTML = "Réussite : " + bonne + " bonne(s) réponse(s) sur " + coup;
}


init();
