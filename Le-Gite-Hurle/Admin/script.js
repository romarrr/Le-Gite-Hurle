var image;
var description;
var titre;
var id = 3;
var modForm = 3;
var paraForm = 3;
var titreForm = 3;
var serviceID;


date1 = new Date();
date2 = new Date(2/3/1997);
console.log(date1)

var nbrpersonne = 3;
var chambre = [{name:"Duo", prix:35, place:2, stock:5},
               {name:"Familiale", prix:55, place:5, stock:3}, 
               {name:"Appartement", prix:110, place:10, stock:2}];

var formule = [{name:"Aucune", reduction:0},
               {name:"Weekend d'amour", reduction:0.10},
               {name:"Nature et découverte", reduction:0.05},
               {name:"Travail saisonnier", reduction:0.20}];
var prix = 35;

console.log(chambre);

document.getElementById("arrivee").innerHTML = date1.toLocaleDateString();
document.getElementById("depart").innerHTML = date2.toLocaleDateString();
document.getElementById("personne").innerHTML = nbrpersonne;
document.getElementById("chambre").innerHTML = chambre[0].name;
document.getElementById("formule").innerHTML = formule[1].name;
document.getElementById("prix").innerHTML = prix;   

function change(showIMG, customIMG, showTitre, customTitre, showDesc, customDesc){
  
    //Modifié image
      var img = document.getElementById(customIMG).value;
      console.log(img);
      document.getElementById(showIMG).src = img;
    
      //Modifié titre
      var titre = document.getElementById(customTitre).value;
      document.getElementById(showTitre).innerHTML = titre;
    
      //Modifié Description
      var description = document.getElementById(customDesc).value;
      document.getElementById(showDesc).innerHTML = description;
    }


    //Script qui garde les données dans le popup
function savechambre(showIMG, customIMG, showTitre, customTitre, showDesc, customDesc){
    document.getElementById(customIMG).value = document.getElementById(showIMG).src
    document.getElementById(customTitre).value = document.getElementById(showTitre).innerHTML
    document.getElementById(customDesc).value = document.getElementById(showDesc).innerHTML
    }





function suppFormule(forid) {
    document.getElementById(forid).remove();
}




function ajoutFormule()  {

    
    id++
    var main = document.getElementById("page");
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    main.appendChild(div1)
    div1.appendChild(div2)

    var sectionContenaire = document.createElement("section")
    div2.appendChild(sectionContenaire);
    sectionContenaire.setAttribute("id",'formule'+id);
    
    sectionContenaire.setAttribute("class", "col-12");

    var titreFormule = document.createElement("h4")
    sectionContenaire.appendChild(titreFormule);
    titreFormule.setAttribute("class", "fw-bold text-center mt-5 mb-5 pt-2 ");
    titreFormule.setAttribute("id", 'titreForm'+id )

    var paraFormule = document.createElement("p")
    paraFormule.setAttribute("class", "text-center");
    sectionContenaire.appendChild(paraFormule);
    paraFormule.setAttribute("id", 'paraForm'+id )

    var sectionButton = document.createElement("section")
    sectionContenaire.appendChild(sectionButton);
    sectionButton.setAttribute("class", "row");

    var sectionButtonSupp = document.createElement("article")
    sectionButton.appendChild(sectionButtonSupp);
    sectionButtonSupp.setAttribute("class", "row-5 offset-1");

    var sectionButtonModif = document.createElement("article")
    sectionButton.appendChild(sectionButtonModif);
    sectionButtonModif.setAttribute("class", "row-5");

    var buttonSupp = document.createElement("button")
    buttonSupp.innerHTML = "Supprimez";
    sectionButtonSupp.appendChild(buttonSupp);
    buttonSupp.setAttribute("class", "btnAdminStyle btn btn-primary bttpop");
    buttonSupp.setAttribute('onclick', `suppFormule("formule${id}")`)

    var buttonModif = document.createElement("button")
    sectionButtonModif.appendChild(buttonModif);
    buttonModif.setAttribute("class", "btn btn-primary offset-9  bttpop");

    buttonModif.setAttribute("data-bs-toggle", "modal");
    buttonModif.setAttribute("data-bs-target", "#exampleModal");
    buttonModif.setAttribute("typ", "button");
    buttonModif.setAttribute("id", `modForm${modForm}`);
    buttonModif.setAttribute("data-bs-whatever", "@getbootstrap");
    buttonModif.setAttribute("onclick", `AllChoix("titreForm${id}", "paraForm${id}")`);
    buttonModif.innerHTML = "Modifier";
}


function changeForm(id, id2)   {
//Modifié titre
      var titre = document.getElementById("customTitre").value;
      document.getElementById(id).innerHTML = titre;
    
      //Modifié Description
      var description = document.getElementById("customType").value;
      document.getElementById(id2).innerHTML = description;
}

function AllChoix(choix, choix2) {

 var xxx = document.getElementById('popupG')
    xxx.setAttribute("onclick", `changeForm("${choix}", "${choix2}")`);
    document.getElementById("customTitre").value = document.getElementById(choix).innerHTML
    document.getElementById("customType").value = document.getElementById(choix2).innerHTML
}