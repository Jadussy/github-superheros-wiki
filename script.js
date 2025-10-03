// ========================================
// 🎯 INSTRUCTIONS
// ========================================
// 1. Changez l'ID du héros ci-dessous
// 2. Personnalisez l'affichage HTML
// 3. Ajoutez du CSS dans index.html si vous voulez
// 4. Faites des commits réguliers !
// ========================================

const heroId = 70;

const myToken = "6570e44801f81594f8a913d3e21be5ab"; 
const apiUrl = `https://superheroapi.com/api.php/${myToken}/${heroId}`;

const container = document.getElementById("hero-info");

// https://superheroapi.com/api.php/6570e44801f81594f8a913d3e21be5ab/70
fetch(apiUrl)
    .then( ( reponse ) => reponse.json () )
    .then ( ( data ) => {
        const heroImageUrl = "https://corsproxy.io/?" + encodeURIComponent(data.image.url);

        container.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${heroImageUrl}" alt="${data.name}" height="200">
        <p><strong>Nom complet :</strong> ${data.biography['full-name']}</p>
        <p><strong>Éditeur :</strong> ${data.biography.publisher}</p>
        <p><strong>Intelligence :</strong> ${data.powerstats.intelligence}/100</p>

        <p><strong>Rapidité :</strong> ${data.powerstats.speed}/100</p> 

        <p><strong>Lieu de naissance :</strong> ${data.biography['place-of-birth']}</p> 
        
        <p><strong>Taille :</strong> ${data.appearance.height[1]}</p> 
        
        `;
    })
    .catch( ( error ) => console.log("Erreur : ", error));


// N'oubliez pas de gérer les erreurs (avec .catch())
// J'ai ca : GET http://127.0.0.1:5500/$%7BheroImageUrl%7D 404 (Not Found)