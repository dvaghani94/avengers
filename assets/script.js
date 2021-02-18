// http://www.omdbapi.com/?t=the+avengers&apikey=fbdde902


// var searchBtn = document.querySelector(".btn");

function seacrhWindow(event) {
    event.preventDefault();

    var formatInput = document.getElementById("search-input").value;

    if (!formatInput) {
        console.error('You need to enter characters/numbers');
        return;
      }
    
      var queryString = '' + formatInput;
    
      location.assign(queryString);
}
// searchBtn.addEventListener("click", seacrhWindow);

function myFunction() {
  var element = document.body;
    element.classList.toggle("dark-mode");
}