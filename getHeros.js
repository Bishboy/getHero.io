
let SUPERHERO_TOKEN ='287018400412863'
let BASE_URL =`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

 
 
let heroBuutton = document.getElementById('heroButton')
const heroImageDiv = document.getElementById('heroImage')
let searchBtn = document.getElementById('searchButton')
let getSuperHero  = document.getElementById('searchInput') 

function getSuperHeros(id){
        fetch( `${BASE_URL}/${id}`)
        .then( response => response.json())
        .then( json => { 
                let superHero = json;
                showHeroInfo(superHero)        
        })
}

//  function getSuperHeros (id){
//         fetch(`${BASE_URL}/${id}`)
//         .then( response => response.json())
//         .then( json => { let superHero = json;
//                 showHeroInfo(superHero)
//         })
//  } 
 
let statToEmoji = {
        intelligence : '🧠 ',
        strength : '🏋🏻‍♀️',
        speed : '🏃🏻‍♀️',
        combat : '⚔️',
        durability : '🤬',
        power : '💪🏻'

}
  
 
 function showHeroInfo( character){
        let name = `<h2 class = "name">${character.name}</h2>`
      const img =  `<div class = "image2" > <img src="${character.image.url}" width = 250 height = 300 /></div>` 
      const stats = Object.keys(character.powerstats).map( stat => {
        return `<div class="try" ><p>${statToEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]} </p></div>`
      }).join('')

      heroImageDiv.innerHTML = `${name}${img}${stats} `
        

 }
 
 
function getSearchSuperHero (id){
        fetch(`${BASE_URL}/search/${id}`)
                .then(response => response.json())
                .then(json => { 
                const hero = json.results[0]
                showHeroInfo(hero)
               
        })
}
 
function randomHero (){
     let numberOfHeros = 731;
     return Math.floor(Math.random()* numberOfHeros) + 1

 }
  
heroBuutton.onclick =() => getSuperHeros(randomHero())
searchBtn.onclick = () => getSearchSuperHero(searchInput.value)

 
 
