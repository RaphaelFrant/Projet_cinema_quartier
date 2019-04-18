/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var validConnex = document.getElementById("btnConnex");
var idConnex = document.getElementById("IdConnex");
var mdpConnex = document.getElementById("MdpConnex");
var regexMailConnex = /^[a-z0-9-_\.]{2,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;

//FOnction de vérification de validation des champs
validConnex.addEventListener("click", function(){
    let verifMailEntr = regexMailConnex.test(idConnex.value);
    if(idConnex.value.length === 0 || mdpConnex.value.length === 0){
        alert("Les champs ne peuvent pas être vide");
        event.preventDefault();
    }
    else if(!verifMailEntr){
        alert("L'adresse mail n'est pas au bon format");
        event.preventDefault();
    }
    else if(mdpConnex.value.length < 6){
        alert("Le mot de passe doit comporter 6 caractères");
        event.preventDefault();
    }
}, false);

//fonction auto-lancée lorsque le curseur survol le titre d'un champ
$(".LabChamp").hover(function(){
    $(this).css("color", "#ef8b00");
},
function(){
    $(this).css("color", "black");
});

//fonction auto-lancée lorsque un champ est sélectionné et désélectioné
$("input").focus(function(){
    $(this).css("background-color", "#f2ce9d");
});
$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});
    
    
    