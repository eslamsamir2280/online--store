var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");

sidenav.style.right = "-250px";
sidenav.style.top = "50px";
menubtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
    } else {
        sidenav.style.right = "-250px";
    }
};
let span = document.querySelector(".up");

window.onscroll = function() {
    this.scrollY >= 400 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function myFunction(x) {
    x.classList.toggle("fa-solid");
}

var proudectimg = document.getElementById("proudect-img");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function() 
{
proudectimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
  proudectimg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  proudectimg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  proudectimg.src = smallimg[3].src;
};

