var input = document.querySelector(".user");
var sub = document.querySelector(".submit");
var msg = document.querySelector(".msg");
var language = document.getElementsByName("language");
var countClicks = document.getElementById("count");
var myForm = document.getElementById("myForm");

var counter = 0;

// //create a variable for array
 var names = [];

//create the function
sub.addEventListener("click", function() {
    var lang = "";
    counts();

        if (language[0].checked) {
            msg.innerHTML = "Molo " + input.value + "!";


        } else if (language[1].checked) {

            msg.innerHTML = "Hello " + input.value + "!";

        } else if (language[2].checked) {

            msg.innerHTML = "Dumela " + input.value + "!";
        }

        document.getElementById("count").innerHTML = counter;


  });

resetclear()
