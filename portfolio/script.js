const btn = document.querySelector(".btn");
const menu = document.querySelector(".nav-item"); 
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("btn-active")) {
        menu.classList.remove("btn-active");
         
        document.getElementById("bars").style.display="none";
        document.getElementById("times").style.display="block";
        document.getElementById("linkDisplay").style.display="block";
        menu.style.height = "100vh";
      } else {
        menu.classList.add("btn-active");
         
        // adds the close (x) icon
        document.getElementById("times").style.display="none";
        document.getElementById("bars").style.display="block";
        document.getElementById("linkDisplay").style.display="none";
        menu.style.height = "57.59px";
    }
}
//  console.log(toggleMenu());
/* Event Listener */
btn.addEventListener("click", toggleMenu, false);


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

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("grid-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  // document.querySelector(".react").style.width = "60%";
  // document.querySelector(".reactNative").style.width = "37%";
  // document.querySelector(".php").style.width = "37%";
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
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
            document.getElementById("contact_form").style.display="none";
            document.getElementById("contact-success").style.display = "block";

              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}