function languages() {
  var language = document.getElementsByName("language");

  if(language[0].checked) {
     msg.innerHTML = "Molo " + input.value + "!";

 } else if (language[1].checked) {

     msg.innerHTML = "Hello " + input.value + "!";

 } else if (language[2].checked) {

     msg.innerHTML = "Dumela " + input.value + "!";
 }
};
