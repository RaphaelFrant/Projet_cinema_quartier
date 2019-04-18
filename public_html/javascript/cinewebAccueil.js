/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var btn = document.getElementById("Spoiler");
var synopsis = document.getElementById("texteAlea");
//fonction permettant de charger un synopsis après avoir appuyer sur un bouton
btn.addEventListener("click", function (){
    document.getElementById("Spoiler").style.visibility = "hidden";
    document.getElementById("texteAlea").innerHTML = "Le film les <strong>47 Ronins</strong> est un incoutournables \n\
du cinéma japonnais! En voici le synopsis :<br> Un perfide seigneur de guerre ayant tué leur maître et \n\
banni leur tribu, 47 samouraïs errants jurent de se venger et de restaurer l'honneur de leurs \n\
compatriotes. Arrachés à leurs foyers et perdus aux quatre coins des terres connues, cette poignée \n\
de rebelles se voit contrainte de recourir à l'aide de Kai - un demi sang qu'ils avaient jadis \n\
renié - lors de leur combat à travers un univers violent, peuplé de monstres mythologiques, de \n\
métamorphoses maléfiques et d'effroyables dangers. Cet exil sera l'occasion pour cet esclave rejeté \n\
de se révéler leur arme la plus redoutable, et de devenir la figure héroïque qui donnera à cette \n\
troupe d'insoumis l'énergie de marquer à jamais l’éternité.";
});

var bannAccueil = document.getElementById("banniere");
//fonction permettant de modifier la bannière quand le curseur passe dessus
bannAccueil.addEventListener("mouseover", function(){
        setTimeout(function(){
            document.getElementById("banniere").src = "./image/decor.png";
            document.getElementById("LegendeImg").innerHTML = "Une petite tranche de hobbit?";
        }
        , 500)
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
