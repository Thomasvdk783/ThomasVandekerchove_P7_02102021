'use strict';
/////////////////////////////////////////

// export const getRecipes = async function () {
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


export default function(getRecipes) {
    const allRecipes = async function() {
        try {
            let response = await fetch("../../Data/ApiRecipess.json")
            if (response.ok) {
                let data = await response.json()
                const dataMedias = [...data.media]
                console.log(data)
            } else {
                console.error('Retour du serveur : ', response.status )
            }
        } catch (e) {
            console.log(e)
        }
    }
    console.log(allRecipes)
    getRecipes()
}
