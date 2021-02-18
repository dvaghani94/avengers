var characterId = "https://gateway.marvel.com:443/v1/public/characters/"
var apiKey = config.API_KEY_MARVEL

var ironManId = "1009368"
var captainAmericaId = "1009220"
var hulkId = "1009351"
var hawkeyeId = "1009338"
var thorId = "1009664"
var blackWidowId = "1009189"

var hulkBio = document.getElementById("hulk")
var thorBio = document.getElementById("thor")
//hulkBio.value = "1"

hulkBio.innerHTML = ""

console.log(hulkBio)

var baseUrl = "https://gateway.marvel.com:443/v1/public/characters?ts=hulk&apikey=' + apiKey + '&hash=1d43fe8dc58c7e2d777e5c7b82d544d4";
var hulkUrl = baseUrl + "&offset=520";
var thorUrl = baseUrl + "&offset=700";
var hulkIndex = 0;
var thorIndex = 0;
//Superhero=Hulk
function getSuperHero(superHeroUrl, index) {

  fetch('https://gateway.marvel.com:443/v1/public/characters?ts=hulk&apikey=' + apiKey + '&hash=1d43fe8dc58c7e2d777e5c7b82d544d4&offset=520')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data.results[index]);
      return data.data.results[index].description;
      
    });
}

hulkBio.innerHTML = getSuperHero(hulkUrl, hulkIndex)
thorBio.innerHTML = getSuperHero(thorUrl, thorIndex)

