var input = document.querySelector(".user");
var sub = document.querySelector(".submit");
var msg = document.querySelector(".msg");
var language = document.getElementsByName("language");

sub.addEventListener("click",function() {
var lang = "";
if (language[0].checked) {
  var input = document.querySelector(".user");
  msg.innerHTML = "Molo "+input.value+"!";
}
else if (language[1].checked) {
  var input = document.querySelector(".user");
  msg.innerHTML = "Hello "+input.value+"!";

}
else if (language[2].checked)  {
  var input = document.querySelector(".user");
  msg.innerHTML = "Dumelang "+input.value+"!";
}
  return lang;

});
