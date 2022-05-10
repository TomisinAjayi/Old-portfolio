$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".links").toggle();
    });
});


var linksUl = document.getElementById("linksUl");
var list = linksUl.getElementsByClassName("list");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}