//calculatrice

//constante
const spanbouton = document.querySelectorAll("span");
const ecran = document.querySelector(".container-ecran");
const boutonclear = document.querySelector(".delete");
const lotion = document.querySelectorAll(".lotion");
const chiffre = document.querySelectorAll(".chiffre");
const opt = document.querySelectorAll(".opérateur");
const egal = document.querySelector(".egal");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
let valeurEcran = 0; // initialisation de l'écran
ecran.innerHTML = `
    <h3> ${valeurEcran}</h3>
`;

//3 variables pour calculer
let nombre1 = "";
let nombre2 = "";
let opérateur;
let resultat;
// const division=document.querySelector('.division')
// division.addEventListener('click',()=>{
//     division.style.color='orange'
// })
let condition = true;
let click = 1;

// console.log(chiffre)
//-------------------------------
//FONCTION

//fonction calcul
function calcul(nb1, nb2, op) {
  let resultat = eval(`${nb1} ${op} ${nb2}`);
  return resultat;
}
// function reintialise(a){
//     a=0;
//     ecran.innerHTML=`
//         <h3> ${a}</h3>
//     `
// }

//--------------------------------------
//animation des boutons

spanbouton.forEach((box) => {
  box.addEventListener("click", (e) => {
    chiffre.forEach((chiffre) => {
      if (e.target == chiffre && condition == true) {
        valeurEcran = 0;
        ecran.innerHTML = `
                    <h3> ${valeurEcran}</h3>
                `;
        nombre1 += e.target.innerHTML;
        console.log("ok prenons le premier chiffre");
        console.log("le nombre 1 est égal à " + nombre1);
        boutonclear.innerText = "C";
      } else if (e.target == chiffre && condition == false) {
        // lotion.classList.remove('lotion')
        valeurEcran = nombre2;
        nombre2 += e.target.innerHTML;
        console.log("ok prenons le deuxième chiffre");
        console.log("le nombre 2 est égal à " + nombre2);
        document.querySelectorAll(".lotion").forEach((lotion) => {
          lotion.classList.remove("lotion");
        });
      }
    });
    opt.forEach((opt) => {
      if (e.target == opt && condition == true) {
        opérateur = e.target.innerHTML;
        console.log("il a cliqué sur un opérateur");
        condition = false;
        console.log(opérateur);
      } else if (e.target == multiplication) {
        console.log("la multiplication a marché");
        opérateur = "*";
      } else if (e.target == division) {
        console.log("la multiplication a marché");
        opérateur = "/";
      }
    });

    //initialisation du zero

    if (valeurEcran === 0) {
      valeurEcran = e.target.innerHTML;
    } else {
      valeurEcran += e.target.innerHTML; // Sinon, on concatène la nouvelle valeur
    }
    //initialisation des opérateurs

    if (e.target.innerText === "÷") {
      // console.log("j'ai selectionner la division")
      e.target.classList.add("lotion");
      // if(nombre2!=''){
      //     e.target.classList.remove('lotion')

      // }

      // if(){

      // }
    } else if (e.target.innerText === "x") {
      valeurEcran = nombre1;
      // console.log("j'ai selectionner la x ")
      e.target.classList.add("lotion");
    } else if (e.target.innerText === "-") {
      // console.log("j'ai selectionner la - ")
      e.target.classList.add("lotion");
    } else if (e.target.innerText === "+") {
      // console.log("j'ai selectionner la +")
      e.target.classList.add("lotion");
    } else if (e.target.innerText === "=") {
      // console.log("j'ai selectionner la =")
      e.target.classList.add("animation");
    } else {
      e.target.classList.add("animation");
    }

    ecran.innerHTML = `
            <h3> ${valeurEcran}</h3>
        `;
    //animation de mes boutons
    setTimeout(() => {
      e.target.classList.remove("animation");
    }, 1000);
    // calcul(nb1,nb2,op)

    // if(click==1 ){
    //     nombre1=e.target.innerHTML
    //     click++
    //     // console.log('il est rentré dans le if')
    // }
    // else if(click==2){
    //     opérateur=e.target.innerHTML
    //     click++
    //     // console.log('il est rentré dans le first else if')

    // }else if(click==3){
    //     nombre2=e.target.innerHTML
    //     // console.log('il est rentré dans le second else if')
    //     //affichage du resultat
    //     resultat= calcul(nombre1,nombre2,opérateur)
    //     valeurEcran=resultat
    //     ecran.innerHTML=`
    //     <h3> ${valeurEcran}</h3>

    //     `
    //     click=1
    // }
  });

  box.addEventListener("mouseover", (e) => {
    e.target.style.cursor = "pointer";
  });
});

//Ecran

boutonclear.addEventListener("click", () => {
  boutonclear.innerText = "AC";
  valeurEcran = 0;
  ecran.innerHTML = `
    <h3> ${valeurEcran}</h3>
    `;
  condition = true;

  document.querySelectorAll(".lotion").forEach((lotion) => {
    lotion.classList.remove("lotion");
  });
});

egal.addEventListener("click", () => {
  resultat = calcul(nombre1, nombre2, opérateur);
  console.log(resultat);
  valeurEcran = resultat;
  ecran.innerHTML = `
    <h3> ${valeurEcran}</h3>
`;
  condition = true;

  nombre1 = "";
  nombre2 = "";
  opérateur = "";
  console.log(nombre1);
  console.log(nombre2);
  console.log(opérateur);
});
