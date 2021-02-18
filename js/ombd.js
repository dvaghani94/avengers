const characterId = 'https://gateway.marvel.com/v1/public/characters?'
const characterComic = 'https://gateway.marvel.com/v1/public/characters/'
const apiKey = config.API_KEY_MARVEL


//hero's id numbers
const thorId = '1009664'
const hulkId = '1009351'
const spiderManId = '1009610'
const ironManId = '1009368'
const wolverineId = '1009718'
const thanosId = '1009652'


const comicCover = document.querySelector(".comic-cover")
const heroName = document.querySelector('.heroName')
const heroDescription = document.querySelector('.heroDescription')
var thorBio = document.getElementById("thor")


function thor(){
  const thor = 'ts=thor'
  fetch(characterId + thor + '&apikey=' + apiKey)
    .then(response => response.json())
    .then(data => {

      thorBio.innerHTML = data.data.results
      //thorBio.innerHTML = data.data.results[0].description
    })
    console.log(data)
};
