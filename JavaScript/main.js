'use strict';

////////////////////////////////////////////////////////////////

import './dataApi.js';


getRecipes()


// const getRecipes = async function () {
//     try {
//         let response = await fetch("../../Data/ApiRecipess.json")
//         if (response.ok) {
//             let data = await response.json()
//             const dataMedias = [...data.media]
//             console.log(data)
//         } else {
//             console.error('Retour du serveur : ', response.status )
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }

// function getRecipes(data) {
//     const showAllRecipes = document.getElementById('list-recipes');
//     showAllRecipes.innerHTML = ''
//     for (let data of data)
// }