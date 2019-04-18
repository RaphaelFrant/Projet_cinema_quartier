/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global JQUERY */

var validForm = document.getElementById("btnEnvoie");
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var dateNai = document.getElementById("dateNai");
var numTel = document.getElementById("Telephone");
var adresse = document.getElementById("Adresse");
var email = document.getElementById("identifiant");
var verifMail = document.getElementById("VerificationId");
var password = document.getElementById("password");
var password2 = document.getElementById("VerifMdp");
var accord = document.getElementById("Accord");
var regexTxt = /^[a-zA-Z' -]+$/;
var regexMail = /^[a-z0-9-_\.]{2,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
var regexTel = /^[0]{1}[1-9]{1}[0-9]{8}$/;

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

//Vérification de chacun des champs du formulaire
validForm.addEventListener("click", function(){
    ChampVide();
    formatTxt();
    formatTel();
    formatMail();
    formatMdp();
    memeMail();
    memeMdp();
    verifAccord();
}, false);

//Vérification qu'aucun champ ne soit vide
function ChampVide(){
        if(nom.value.length === 0 || prenom.value.length === 0 || dateNai.value.length === 0 || numTel.value.length === 0 || adresse.value.length === 0 || email.value.length === 0 || verifMail.value.length === 0 ||
                password.value.length === 0 || password2.value.length === 0){
            alert("Aucun champ ne peut être vide!");
            event.preventDefault();
        }
};

//fonction permettant de vérifier le format des champs textes
function formatTxt(){
    var verifNom = regexTxt.test(nom.value);
    let verifPrenom = regexTxt.test(prenom.value);
    if(!verifNom || !verifPrenom){
        alert("Votre nom et votre prénom ne peuvent contenir de nombres!");
        event.preventDefault();
    }
};

//fonction pour vérifier le format du mail
function formatMail(){
    let validMail = regexMail.test(email.value);
    let validVerifMail = regexMail.test(verifMail.value);
    if(!validMail || !validVerifMail){
        alert("Les adresses mail doivent être au bon format!");
        event.preventDefault();
    }
};

function formatMdp(){
    if(password.value.length < 6 || password2.value.length < 6){
        alert("Les mots de passe doivent comporter au moins 6 caractères");
        event.preventDefault();
    }
}

//fonction pour vérifier que les deux adresses mail sont identiques
function memeMail(){
    if(email.value !== verifMail.value){
        alert("L'adresse mail n'a pas pu être vérifiée!");
        event.preventDefault();
    }
};

//fonction pour vérifier que les deux mots de passe sont identiques
function memeMdp(){
    if(password.value !== password2.value){
        alert("Les mots de passe doivent être identique!");
        event.preventDefault();
    }
};

//fonction pour vérifier le format du téléphone
function formatTel(){
    let verifTel = regexTel.test(numTel.value);
    if(!verifTel){
        alert("Le numéro de téléphone n'est pas au bon format!");
        event.preventDefault();
    }
};

//fonction permettant de vérifier que l'utilisateur a accepté les conditions d'utilisations
function verifAccord(){
    if(!accord.checked){
        alert("Vous devez accepter les conditions d'utilisation!");
        event.preventDefault();
    }
}


