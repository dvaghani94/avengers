var myHeaders = new Headers();
myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"RcmHKtrA030GlJA0nuoj10YTn\",oauth_token=\"270341803-oi0gMyN0m0zPWZIQExjqmzRAHFmqDHsBpALC9JGr\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1613669793\",oauth_nonce=\"6KHa8y48m9R\",oauth_version=\"1.0\",oauth_signature=\"k2kGpkfhxx201AI3CSujCZNe3nw%3D\"");
myHeaders.append("Cookie", "guest_id=v1%3A161366419056994383; personalization_id=\"v1_nK6my6t1evj80ztdtJSraQ==\"");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets/search/recent?query=avengers", requestOptions)
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
