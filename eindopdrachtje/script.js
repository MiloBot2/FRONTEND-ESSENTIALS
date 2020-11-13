var voornaam = prompt("Wat is uw voornaam?");
var achternaam = prompt("Wat is uw achternaam?");
var email = prompt("Wat is uw email?");
var woonplaats = prompt("Waar woont u?");
var leeftijd = prompt("Hoe jong bent u?");

var age = 16;

let iets = "1";

if(leeftijd == age)
{document.body.style.backgroundColor = 'orange';
console.log("Orange background");
}

if(leeftijd == age + 1)
{document.body.style.backgroundColor = 'blue';
console.log("Blue background");
}

if(leeftijd == age + 2)
{document.body.style.backgroundColor = 'gold';
console.log("Golden background");
}

if(leeftijd == age + 3)
{document.body.style.backgroundColor = 'green';
console.log("Green background");
}

if(!leeftijd.startsWith(iets) || leeftijd == null)
{document.body.style.backgroundColor = 'red';
console.log("Red background");
}

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
