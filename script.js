let ham =  document.getElementById("btn");
let menu = document.getElementById("hamburgertoggle");

ham.addEventListener('click', () => {
    menu.classList.toggle('activated');
})

var fonts = ['Satisfy', 'Courgette' ,'Patrick Hand', 'Merienda'];
var rand = fonts[Math.floor(Math.random() * fonts.length)];
console.log(rand);

document.getElementById("highlight").style.fontFamily = rand;


// let body = document.getElementsByTagName("body");
// body.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }


