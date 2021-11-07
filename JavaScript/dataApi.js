'use strict';

////////////////////////////////////////////////////////////////

fetch("../../Data/ApiRecipes.json")
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } 
    })
    .then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        // Une erreur et survenue
    })