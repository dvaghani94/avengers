var characterId = "https://gateway.marvel.com:443/v1/public/characters/"
var apiKey = config.API_KEY_MARVEL
var hash = "55638210085726b38b41d0d6fe2afba7"

var ironManId = "1017104"
var captainAmericaId = "1017105"
var hulkId = "1017107"
var hawkEyeId = "1017108"
var thorId = "1017106"
var blackWidowId = "1017109"
var nickFuryId = "1009471"


var thorBio = document.getElementById("thor");
var captainAmericaBio = document.getElementById("captain-america");
var hulkBio = document.getElementById("hulk");
var blackWidowBio = document.getElementById("black-widow");
var nickFuryBio = document.getElementById("nick-fury");
var hawkEyeBio = document.getElementById("hawkeye");
var ironManBio = document.getElementById("iron-man")

fetch(characterId + thorId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    thorBio.innerHTML = data.data.results[0].description
  });

fetch(characterId + hulkId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    hulkBio.innerHTML = data.data.results[0].description
  });

fetch(characterId + captainAmericaId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    captainAmericaBio.innerHTML = data.data.results[0].description
  });

fetch(characterId + nickFuryId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    nickFuryBio.innerHTML = "A veteran S.H.I.E.L.D. operative, Nick Fury continues the legacy as one of the greatest super spies in the world."
  });

fetch(characterId + captainAmericaId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    captainAmericaBio.innerHTML = data.data.results[0].description
  });

fetch(characterId + blackWidowId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    blackWidowBio.innerHTML = data.data.results[0].description
  });

fetch(characterId + hawkEyeId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    hawkEyeBio.innerHTML = data.data.results[0].description
  });

fetch(characterId + ironManId + "?ts=1&apikey=" + apiKey + "&hash=" + hash)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ironManBio.innerHTML = data.data.results[0].description
  });

