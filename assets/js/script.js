// var searchInput = document.getElementById("search-input");
var searchInput = "avengers"
var apiUrl = "https://api.twitter.com/2/tweets/search/recent?query="
var proxy = "https://cors-anywhere.herokuapp.com/"
// https://cors-anywhere.herokuapp.com/
// https://cors-anywhere.herokuapp.com


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAACZXMwEAAAAAbTZ9SY0Z8d%2BTq1VFBrqDYs%2FWeKo%3Di1vVMs206mb6CvipDlLvJuGgxI1qzQlRceramS8GCUpNeNw5sx");
myHeaders.append("Cookie", "guest_id=v1%3A161367772454425496; personalization_id=\"v1_XvRSwPBrVMSD5+4Z3/QK7A==\"");

var queryString = proxy + apiUrl + searchInput;
console.log(queryString)

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(queryString, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




// var getAvengers = () => {

// fetch(`http://www.omdbapi.com/?t=avengers&apikey=fbdde902`)
//   .then(res => res.json())
//   .then(posts => console.log(posts))
// }

// var getIronMan = () => {

// fetch(`http://www.omdbapi.com/?t=iron+man&apikey=fbdde902`)
//   .then(res => res.json())
//   .then(posts => console.log(posts))
// }

// var getThor = () => {

//   fetch(`http://www.omdbapi.com/?t=thor&apikey=fbdde902`)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//   }

// var getCaptainAmerica = () => {

// fetch(`http://www.omdbapi.com/?t=captain+america&apikey=fbdde902`)
//   .then(res => res.json())
//   .then(posts => console.log(posts))
// }

// var getHulk = () => {

//   fetch(`http://www.omdbapi.com/?t=hulk&apikey=fbdde902`)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
//   }

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



// getAvengers();
// getIronMan();
// getThor();
// getCaptainAmerica();
// getHulk();





// 6KbkBqRDDdtNbMrLaovOHB7oy   -twitter api key
// C5oTLEOjXt55ifu7JMC0PtjuNnRmHxLk70hSSMBIR5W1Ybo71N      twitter secret api key
//  AAAAAAAAAAAAAAAAAAAAACZXMwEAAAAAIXtubGp2uDYSSKStFxUMcJrnPVQ%3Dyhg84UxwgwwSecQ55DS16LuAPYKwjl8EkdVvn4H8RcQj07yaDy  bearer token
// 270341803-UpfkaG90lEsSzWDvHefJBIhBcBy1gM9EMWtfEs1F     access token
//g2T6Yq0YXzTzkN90FGs58AdUS6RBJiZHovKxBF27oCN4W     access tokem secret
