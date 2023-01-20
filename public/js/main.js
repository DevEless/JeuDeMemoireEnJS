
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
            if(tabJeu[i][j] === 0){

                txt += "<button class ='btn btn-primary m-2' style='width: 200px; height: 250px'>Afficher</button>"
            }else{
                txt += `<img src=  '${getImage(tabJeu[i][j])}' style='width: 200px; height: 250px' class='m-2'>`;
            }
        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;

}

function getImage(valeur) {
    let imgTxt = "";
    switch (valeur) {
        case 1: imgTxt += "../../public/image/pig.png";
            
            break;
            case 2:
                imgTxt += "../../public/image/elephant.png";
            break;
            case 3:
                imgTxt += "../../public/image/giraffe.png";
            break;
            case 4:
                imgTxt += "../../public/image/hippo.png";
            break;
            case 5:
                imgTxt += "../../public/image/monkey.png";
            break;
            case 6:
                imgTxt += "../../public/image/panda.png";
            break;
            case 7:
                imgTxt += "../../public/image/parrot.png";
            break;
            case 8:
                imgTxt += "../../public/image/penguin.png";
            break;
    
        default: console.log("cas non pris en compte");
            break;
    }
    return imgTxt;
    
}
