document.getElementById("date").valueAsDate = new Date();
document.getElementById("date2").valueAsDate = new Date();

var datereservation;
var nbrpersonne;
var chambre = [{name:"Duo", prix:35, place:2, stock:5},
               {name:"Familiale", prix:55, place:5, stock:3}, 
               {name:"Appartement", prix:110, place:10, stock:2}];

var formule = [{name:"Aucune", reduction:0},
               {name:"Weekend d'amour", reduction:0.10},
               {name:"Nature et découverte", reduction:0.05},
               {name:"Travail saisonnier", reduction:0.20}];

console.log(chambre);


function tarif(){
    var datereservation = [new Date(document.getElementById("date").value), new Date(document.getElementById("date2").value)];
    var dureereservation = (datereservation[1]-datereservation[0])/(1000 * 3600 * 24);
    var nbrpersonne = document.getElementById("personne").value;
    var choixchambre = document.querySelector('input[name="chambre"]:checked').value

        document.getElementById("suivant").disabled = false;
        document.getElementById("blocage").innerHTML = "";

            if(datereservation[0].getDay() == 6 && nbrpersonne%2 == 0 && choixchambre == "0"){
                document.getElementById("weekend").disabled = false;
                document.getElementById("week").innerHTML = "";
            } else {
                document.getElementById("weekend").disabled = true;
                document.getElementById("week").innerHTML = "Disponible seulement les week-ends";
            }


        if(nbrpersonne%chambre[choixchambre].place == 0){
            nbrchambre = nbrpersonne/chambre[choixchambre].place;
        }
        else{
            nbrchambre = parseInt(nbrpersonne/chambre[choixchambre].place)+1;
        }
    
        if(dureereservation < 30 || (datereservation[0].getMonth() > 2 && datereservation[0].getMonth() < 5) || (datereservation[0].getMonth() > 7 && datereservation[0].getMonth() < 11)){
            document.getElementById("saison").disabled = true;
            document.getElementById("sai").innerHTML = "Indisponible pour une durée inférieur à 30 jours, et seulement durant les périodes Juin à Août et Décembre à Mars";
        } else {
            document.getElementById("saison").disabled = false;
            document.getElementById("sai").innerHTML = "";
        }

        if (dureereservation < "5") {
            document.getElementById("nature").disabled = true;
            document.getElementById("nat").innerHTML = "Indisponible pour une durée inférieur à 5 jours.";
        }else {
            document.getElementById("nature").disabled = false;
            document.getElementById("nat").innerHTML = "";
        }
        
    if(dureereservation<2){
        document.getElementById("blocage").innerHTML = "2 nuitées minimum !";
        document.getElementById("suivant").disabled = true;
    }
    else{

        var tarif = (((chambre[choixchambre].prix - (chambre[choixchambre].prix * formule[document.querySelector('input[name="formule"]:checked').value].reduction)) * nbrchambre)*dureereservation)
        if (datereservation[0].getMonth() == 11 || (datereservation[0].getMonth() >=0 && datereservation[0].getMonth() <=2) || (datereservation[0].getMonth() >=5 && datereservation[0].getMonth() <= 7)){
            var tarif = tarif + (tarif * 0.1);
        }
        document.getElementById("tarif").innerHTML = "Tarif : " + tarif + " €";
    
    }    
}
tarif()

document.getElementById("formulaire").addEventListener('change', tarif);