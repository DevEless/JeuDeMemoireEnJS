
const divResultat = document.querySelector('#resultat')

var tabJeu = [
[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]
];

afficherTableau();

function afficherTableau() {
    let txt = ""

    for(let i=0; i < tabJeu.length; i++){
        
        txt += "<div>";
        
        for(let j=0; j < tabJeu[i].length ; j++){
        txt += "<button class ='btn btn-primary'>Afficher</button>"
        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;

}