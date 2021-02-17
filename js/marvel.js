var characterId = "https://gateway.marvel.com:443/v1/public/characters/"
var apiKey = "ac865cee692c9e8355597a42f5767d03"

var ironManId = "1009368"
var captainAmericaId = "1009220"
var hulkId = "1009351"
var hawkeyeId = "1009338"
var thorId ="1009664"
var blackWidowId = "1009189"

var hulkBio = document.getElementById("hulk")
//hulkBio.value = "1"

hulkBio.innerHTML = "1"

console.log(hulkBio)

fetch('https://gateway.marvel.com:443/v1/public/characters?ts=hulk&apikey=ac865cee692c9e8355597a42f5767d03&hash=1d43fe8dc58c7e2d777e5c7b82d544d4')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    hulkBio.innerHTML = data.data.results[0].name
    console.log(data.data.results[0].name)
    console.log(data);
  });
