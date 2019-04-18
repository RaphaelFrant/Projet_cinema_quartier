/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//création des variables
var section = document.querySelector("#placeTableau");
var cmbTitre = document.querySelector("#ListFilm");

//Lien avec le fichier json
var film_objet = new XMLHttpRequest();
film_objet.open("Get", "../json_infoFilm.json", "true");
film_objet.responseType = "json";
film_objet.send();

//Chargement de la combobox
film_objet.onreadystatechange = function(){
    if(film_objet.readyState === 4 && film_objet.status === 200){
        var ListingFilm = film_objet.response;
        msgBienvenue();
        cmbCharge(ListingFilm);
    }
};

//Message de bienvenue lors de l'inscription et de la connexion
function msgBienvenue(){
    var url = window.location.search;
    url = url.split("&").join(" ");
    var regexNom = /Nom=[a-zA-Z]{1,} Prenom=[a-zA-Z]{1,}/;
    var urlReduit = "";
    urlReduit = url.match(regexNom);
    if(urlReduit === null){
        alert("Bon retour parmi nous!");
    }
    else{
        urlReduit = urlReduit.toString().split("Nom=").join("");
        urlReduit = urlReduit.toString().split("Prenom=").join("");
        alert("Bonjour " + urlReduit + "!");
    }
}

//Evénement qui se déclenche lorsque le client sélectionne un film
document.getElementById("ListFilm").addEventListener("change", function(event) {
   if(event.target.selectedIndex === 0) {
       alert("Veuillez choisir une valeur valide!");
   } else {
       var FicheFilm = film_objet.response;
       showFilm(FicheFilm);
   }
});

//Fonction pour remplir la combobox
function cmbCharge(jsonObj){
    var listeTitre = jsonObj["film"];
    for(let j = 0; j < listeTitre.length; j++){
        var creaEntr = document.createElement("option");
        creaEntr.textContent = listeTitre[j].Title;
        creaEntr.setAttribute("value", j);
        cmbTitre.appendChild(creaEntr);
    }
};

//fonction pour afficher les films à l'affiche
function showFilm(jsonObj){
    
    if(section.querySelector("article") !== null){
        section.removeChild(section.querySelector("article"));
    }
    var filmAff = jsonObj["film"];
    /*var i = document.querySelector("#ListFilm option:nth-child(" + (event.target.selectedIndex+1) + ")").value;*/
    var i = document.getElementById("ListFilm").selectedIndex;
    i--;
    
        //création des différents éléments HTML
        var creaArticle = document.createElement("article");
        var creaH2 = document.createElement("h2");
        var creaPara1 = document.createElement("p");
        var creaPara2 = document.createElement("p");
        var creaPara3 = document.createElement("p");
        var creaPara4 = document.createElement("p");
        var creaPara5 = document.createElement("p");
        var creaPara6 = document.createElement("p");
        var creaPara7 = document.createElement("img");
        var creaPara8 = document.createElement("p");
        var creaPara9 = document.createElement("a");
        
        //Remplissage des éléments avec les données récupérés dans le json
        creaH2.textContent = filmAff[i].Title;
        creaPara1.textContent = "Année: " + filmAff[i].Year;
        creaPara2.textContent = "Durée: " + filmAff[i].Runtime;
        creaPara3.textContent = "Genre: " + filmAff[i].Genre;
        creaPara4.textContent = "Réalisateur: " + filmAff[i].Director;
        creaPara5.textContent = "Acteurs: " + filmAff[i].Actors;
        creaPara6.textContent = "Synopsis: " + filmAff[i].Plot;
        creaPara7.src = filmAff[i].Poster;
        creaPara7.setAttribute("alt", "AfficheFilm");
        creaPara7.setAttribute("title", filmAff[i].Title);
        creaPara8.textContent = creaPara9;
        creaPara9.textContent = "Site Web";
        creaPara9.setAttribute("href", filmAff[i].Website);
        
        //Intégration des nouvelles données dans le code HTML de la page
        creaArticle.appendChild(creaH2);
        creaArticle.appendChild(creaPara1);
        creaArticle.appendChild(creaPara2);
        creaArticle.appendChild(creaPara3);
        creaArticle.appendChild(creaPara4);
        creaArticle.appendChild(creaPara5);
        creaArticle.appendChild(creaPara6);
        creaArticle.appendChild(creaPara7);
        creaArticle.appendChild(creaPara8);
        creaArticle.appendChild(creaPara9);

        section.appendChild(creaArticle);
        creaArticle.setAttribute("class", "col-9");
        
}

