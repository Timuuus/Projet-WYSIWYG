let editeur = document.querySelector(".editeur");
let result = document.querySelector(".result");
let myProgressBar = document.querySelector(".myProgressBar");

editeur.style.resize = 'none'; // empeche de resize le text-area

//--- Affiche en HTML le texte que j'ecris (effet mirroir) ---//
editeur.addEventListener("input", function endResult(event){
    result.innerHTML = event.target.value; 

let numberOfCaracter = result.innerText.length; //Le innerText ne concidere pas les balises HTML comme des caractères
let barWidth = numberOfCaracter/2 + "%";

console.log(numberOfCaracter);

if (numberOfCaracter > 199){
    editeur.maxLength = 0;
} 
else if (numberOfCaracter < 200){
    editeur.maxLength = 10000;
}

myProgressBar.style.width = barWidth; //--.style.width sert a injecter le css--//

if (numberOfCaracter < 100){
        myProgressBar.style.background = "#00FF00";
    }
    else if (numberOfCaracter < 170){
        myProgressBar.style.background = "#ff8000";
    }
    else if (numberOfCaracter < 200){
        myProgressBar.style.background = "#FF0000";
    }

//--- Pop-up Max Caractère ---//
let maxCaracter =document.querySelector("#max-caracter");


if (numberOfCaracter > 199){
    maxCaracter.style.visibility = "visible";
} 
else if (numberOfCaracter < 200){
    maxCaracter.style.visibility = "hidden";
    }
});

//--- Animation dans l'éditeur ---//
document.querySelector(".editeur").style.cursor = "wait" //Le curseur change dans l'éditeur


//--- Les boutons cliquables ---//
let btnStrong = document.querySelector(".btnStrong");
let btnItalic = document.querySelector(".btnItalic");
let btnUnderline = document.querySelector(".btnUnderline");

btnStrong.addEventListener("click", ()=> {
    editeur.value += "<strong></strong>"; //Le += permet de ne pas ecraser le texte précédent mais de le rajouter
});

btnItalic.addEventListener("click", ()=> {
    editeur.value += "<em></em>";
});

btnUnderline.addEventListener("click", ()=> {
    editeur.value += "<u></u>";
});


//--- DarkMode ---//
let darkbody = document.body;
let darkModeBtn = document.querySelector(".darkMode");
let maxCaracter = document.querySelector("#max-caracter")

darkModeBtn.addEventListener("click", ()=> {
    darkbody.classList.toggle("dark-mode");
    result.classList.toggle("dark-mode2");
    editeur.classList.toggle("dark-mode2");
    darkModeBtn.classList.toggle("dark-mode2");
    maxCaracter.classList.toggle("dark-mode3");
});

darkModeBtn.addEventListener("click", ()=> {
    if (darkModeBtn.innerText === "Dark Mode") {
        darkModeBtn.innerText = "Light Mode";
    }
    else {
        darkModeBtn.innerText = "Dark Mode";
    }
});

//--- Faire un clear dans l'editeur ---//
let bntClear = document.querySelector(".btnClear")

bntClear.addEventListener("click", ()=> {
    editeur.value = "";
    result.innerText = "";
    myProgressBar.style.width = 0;
    maxCaracter.style.visibility = "hidden"
    editeur.maxLength = 1;
});