var x = document.getElementById("x");
var y = document.getElementById("y");
var drop = document.getElementById("drop");
var yoffset = 60;
var xoffset = 140;
var bounding = drop.getBoundingClientRect();

onmousemove = function (e) {
  console.log("mouse location:", e.clientX, e.clientY);
  x.style.top = e.clientY - bounding.top + "px";
  y.style.left = e.clientX - bounding.left + "px";
};

function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  console.log("toggleTheme");
  var theme = document.getElementById("theme");
  var icon = document.getElementById("darkIcon");

  // Change the value of href attribute
  // to change the css sheet.
  if (theme.getAttribute("href") == "css/light.css") {
    theme.setAttribute("href", "css/style.css");
    icon.setAttribute("class", "ri-sun-fill");
  } else {
    theme.setAttribute("href", "css/light.css");
    icon.setAttribute("class", "ri-moon-fill");
  }
}
