const divResultat = document.querySelector('#resultat')

var tabJeu = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];


var tabResultat = genereTableauAleatoire()

let oldselection = [];
let nbAffiche = 0;
var ready = true;

afficherTableau();

function afficherTableau() {
    let txt = ""

    for (let i = 0; i < tabJeu.length; i++) {

        txt += "<div>";

        for (let j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {

                txt += "<button class ='btn btn-dark m-2' style='width: 130px; height: 130px' onClick='verif(\"" + i + "-" + j + "\")'></button> ";

            } else {
                txt += `<img src=  '${getImage(tabJeu[i][j])}' style='width: 130px; height: 130px' class='m-2'>`;
            }
        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;

}

function getImage(valeur) {
    let imgTxt = "";
    switch (valeur) {
        case 1:
            imgTxt += "../../public/image/un.png";

            break;
        case 2:
            imgTxt += "../../public/image/deux.png";
            break;
        case 3:
            imgTxt += "../../public/image/trois.png";
            break;
        case 4:
            imgTxt += "../../public/image/quatre.png";
            break;
        case 5:
            imgTxt += "../../public/image/cinq.png";
            break;
        case 6:
            imgTxt += "../../public/image/six.png";
            break;
        case 7:
            imgTxt += "../../public/image/sept.png";
            break;
        case 8:
            imgTxt += "../../public/image/huit.png";
            break;

        default:
            console.log("cas non pris en compte");
            break;
    }
    return imgTxt;

}


function verif(bouton) {
    if (ready) {

        nbAffiche++;

        var ligne = bouton.substr(0, 1);
        var colonne = bouton.substr(2, 1);
        console.log(ligne);
        console.log(colonne);
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();

        if (nbAffiche > 1) {
            ready = false;
            setTimeout(() => {
                if (tabJeu[ligne][colonne] !== tabResultat[oldselection[0]][oldselection[1]]) {
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldselection[0]][oldselection[1]] = 0;
                }
                afficherTableau()
                ready = true

                nbAffiche = 0;
            }, 1000);
        } else {
            oldselection = [ligne, colonne];
        }
    }
}

function genereTableauAleatoire() {
    var tab = [];
    var nbImagePosition = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 4; i++) {
        let ligne = [];
        for (let j = 0; j < 4; j++) {
            var fin = false;
            while (!fin) {
                var randomImage = Math.floor(Math.random() * 8);
                if (nbImagePosition[randomImage] < 2) {
                    ligne.push(randomImage + 1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }

        }

        tab.push(ligne);
    }
    return tab;
}