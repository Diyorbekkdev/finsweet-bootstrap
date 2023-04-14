
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}




var i = 0;
var titles = [  "Diyorbek | Planning",  "Jo'rabek | Work",  "Nodirbek | About",  "Abdulaziz | Blog", "Behruzbek | Pricing"];

function changeTitle() {
  document.title = titles[i];
  i = (i + 1) % titles.length;
  setTimeout(changeTitle, 750); 
}

changeTitle();