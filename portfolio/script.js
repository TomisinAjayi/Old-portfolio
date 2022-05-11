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

var projectList = document.getElementById("projectList");
var projectLang = projectList.getElementsByClassName("list");
for (var x = 0; x < projectLang.length; x++) {
  projectLang[x].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-project");
  current[0].className = current[0].className.replace(" active-project", "");
  this.className += " active-project";
  });
}

// contact mail
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('1kutXdqilnCQZV1ga');
})();

window.onload = function() {
  document.getElementById('contact_form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}