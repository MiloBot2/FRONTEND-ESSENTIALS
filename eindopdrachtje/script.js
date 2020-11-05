var voornaam = prompt("Wat is uw voornaam?");
var achternaam = prompt("Wat is uw achternaam?");
var email = prompt("Wat is uw email?");
var woonplaats = prompt("Waar woont u?");
var leeftijd = prompt("Hoe jong bent u?");

if(leeftijd == 16)
document.body.style.backgroundColor = 'orange';

if(leeftijd == 17)
document.body.style.backgroundColor = 'blue';

if(leeftijd == 18)
document.body.style.backgroundColor = 'gold';

if(leeftijd == 19)
document.body.style.backgroundColor = 'green';

if(!leeftijd.startsWith("1"))
document.body.style.backgroundColor = 'red';

var element = document.getElementById("v1");
element.innerHTML = voornaam;

var element = document.getElementById("v2");
element.innerHTML = achternaam;

var element = document.getElementById("v3");;
element.innerHTML = email;

var element = document.getElementById("v4");
element.innerHTML = woonplaats;

var element = document.getElementById("v5");
element.innerHTML = leeftijd;
