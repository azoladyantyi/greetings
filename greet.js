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


    if ((input.value).length > 0) {
        var isinarray = false;
        if (names.length) {
            //is it in the array nsomewhere
            var x;
            for (x = 0; x < names.length; x++) {
                if (input.value == names[x]) {
                    isinarray = true;

                }
            }

            if (!isinarray) {
                names[names.length] = input.value;
                counter++;

            }
        } else {
            names[0] = input.value;
            counter++;


        }

        if (language[0].checked) {
            msg.innerHTML = "Molo " + input.value + "!";


        } else if (language[1].checked) {

            msg.innerHTML = "Hello " + input.value + "!";

        } else if (language[2].checked) {

            msg.innerHTML = "Dumela " + input.value + "!";
        }
    }

    document.getElementById("count").innerHTML = counter;

});

function resetclear() {
    msg.innerHTML = "";
    input.value = "";
    document.getElementById("count").innerHTML = 0;
    document.getElementsByName("language") = "";
}
