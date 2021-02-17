var getAvengers = () => {

fetch(`http://www.omdbapi.com/?t=avengers&apikey=fbdde902`)
  .then(res => res.json())
  .then(posts => console.log(posts))
}

var getIronMan = () => {

fetch(`http://www.omdbapi.com/?t=iron+man&apikey=fbdde902`)
  .then(res => res.json())
  .then(posts => console.log(posts))
}

var getThor = () => {

  fetch(`http://www.omdbapi.com/?t=thor&apikey=fbdde902`)
    .then(res => res.json())
    .then(posts => console.log(posts))
  }

var getCaptainAmerica = () => {

fetch(`http://www.omdbapi.com/?t=captain+america&apikey=fbdde902`)
  .then(res => res.json())
  .then(posts => console.log(posts))
}

var getHulk = () => {

  fetch(`http://www.omdbapi.com/?t=hulk&apikey=fbdde902`)
    .then(res => res.json())
    .then(posts => console.log(posts))
  }

// var getBlackWidow = () => {

// fetch(`http://www.omdbapi.com/?t=black+widow&apikey=fbdde902`)
//   .then(res => res.json())
//   .then(posts => console.log(posts))
// }

// var getNickFury = () => {

//   fetch(`http://www.omdbapi.com/?t=avengers&apikey=fbdde902`)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//   }

// var getHawkeye = () => {

// fetch(`http://www.omdbapi.com/?t=avengers&apikey=fbdde902`)
//   .then(res => res.json())
//   .then(posts => console.log(posts))
// }

      

getAvengers();
getIronMan();
getThor();
getCaptainAmerica();
getHulk();





// Nmydu4qcPp5aIvJM6vQzsU7Wd    -twitter api key
// vh5zGTEZg4zfo872GbKY9Ag9DUKqbXgDobAZSEEQkcnO3rIRQD twitter secret api key
//  AAAAAAAAAAAAAAAAAAAAACZXMwEAAAAAIXtubGp2uDYSSKStFxUMcJrnPVQ%3Dyhg84UxwgwwSecQ55DS16LuAPYKwjl8EkdVvn4H8RcQj07yaDy  bearer token
