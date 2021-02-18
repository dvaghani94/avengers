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

// collapsible nav bar

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}