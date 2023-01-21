//VARIABLE
let btn1 = document.querySelectorAll('.btn.btn-secondary')[0]
let btn2 = document.querySelectorAll('.btn.btn-secondary')[1]
let madiv = document.getElementById('mode')

let timer = 0;
let interval;
let started = false;
let startStopButton = document.getElementById("startStop");
let timeDisplay = document.getElementById("time");
let nameInput = document.getElementById("name");


// VARIABLE FACILE
const divResultat = document.querySelector('#resultat')



var tabJeu = [
    [0, 0],
    [0, 0],
    [0, 0],


];


var tabResultat = genereTableauAleatoire()

let oldselection = [];
let nbAffiche = 0;
var ready = true;

//VARIABLE DIFFICILE
var tabJeu1 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];


var tabResultat1 = genereTableauAleatoire1()



//TIMER

let scores = [];

function displayScores() {
    let scoreRows = document.getElementById("score-rows");
    scoreRows.innerHTML = "";
    for (let i = 0; i < scores.length; i++) {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.innerHTML = scores[i].name;
        row.appendChild(nameCell);
        let timeCell = document.createElement("td");
        timeCell.innerHTML = scores[i].time;
        row.appendChild(timeCell);
        scoreRows.appendChild(row);
    }
}
let fin = false;

function updateTime() {
    if (fin) {
        clearInterval(interval);
        return;
    }
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;

    timeDisplay.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


startStopButton.addEventListener("click", () => {
    if (!started) {
        timer = 0;
        interval = setInterval(() => {
            timer++;
            updateTime();
        }, 1000);
        started = true;
        startStopButton.innerHTML = "Stop";
    } else {
        clearInterval(interval);
        started = false;
        startStopButton.innerHTML = "Start";
        let score = {
            name: nameInput.value,
            time: timer
        };
        scores.push(score);
        displayScores();
    }
});




//FACILE MODE 

btn1.addEventListener("click", afficherTableau)

function afficherTableau() {
    let txt = ""

    for (let i = 0; i < tabJeu.length; i++) {

        txt += "<div>";

        for (let j = 0; j < tabJeu[i].length; j++) {
            if (tabJeu[i][j] === 0) {

                txt += "<button class ='btn btn-dark m-2' style='width: 80px; height: 100px' onClick='verif(\"" + i + "-" + j + "\")'></button> ";

            } else {
                txt += `<img src=  '${getImage(tabJeu[i][j])}' style='width: 80px; height: 100px' class='m-2'>`;
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
    var nbImagePosition = [0, 0, 0]

    for (let i = 0; i < 3; i++) {
        let ligne = [];
        for (let j = 0; j < 2; j++) {
            let fin = false;
            while (!fin) {
                var randomImage = Math.floor(Math.random() * 3);
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

//DIFFICILE MODE

btn2.addEventListener("click", afficherTableau1)



function afficherTableau1() {
    let txt = ""

    for (let i = 0; i < tabJeu1.length; i++) {

        txt += "<div>";

        for (let j = 0; j < tabJeu1[i].length; j++) {
            if (tabJeu1[i][j] === 0) {

                txt += "<button class ='btn btn-dark m-2' style='width: 80px; height: 100px' onClick='verif1(\"" + i + "-" + j + "\")'></button> ";

            } else {
                txt += `<img src=  '${getImage1(tabJeu1[i][j])}' style='width: 80px; height: 100px' class='m-2'>`;
            }
        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;

}

function getImage1(valeur) {
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


function verif1(bouton) {
    if (ready) {

        nbAffiche++;

        var ligne = bouton.substr(0, 1);
        var colonne = bouton.substr(2, 1);
        console.log(ligne);
        console.log(colonne);
        tabJeu1[ligne][colonne] = tabResultat1[ligne][colonne];
        afficherTableau1();

        if (nbAffiche > 1) {
            ready = false;
            setTimeout(() => {
                if (tabJeu1[ligne][colonne] !== tabResultat1[oldselection[0]][oldselection[1]]) {
                    tabJeu1[ligne][colonne] = 0;
                    tabJeu1[oldselection[0]][oldselection[1]] = 0;
                }
                afficherTableau1()
                ready = true

                nbAffiche = 0;
            }, 1000);
        } else {
            oldselection = [ligne, colonne];
        }
    }
}

function genereTableauAleatoire1() {
    var tab = [];
    var nbImagePosition = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 4; i++) {
        let ligne = [];
        for (let j = 0; j < 4; j++) {
        let fin = false;
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