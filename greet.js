var input = document.querySelector(".user");
var sub = document.querySelector(".submit");
var msg = document.querySelector(".msg");
var language = document.getElementsByName("language");
var countClicks = document.getElementById("count");
var myForm = document.getElementById("myForm");
var reset = document.querySelector('#reset');

var counter = 0 ;

var names = [];
sub.addEventListener("click", function() {
    var lang = "";
    languages();
    greetMassage();
    counts();
countClicks.innerHTML = counter;
});

reset.addEventListener('click', function() {

  resetClear();
});
