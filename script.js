var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");


function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value +")";
	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setRandom() {
	var randomColor1=generateRandomColor();
	var randomColor2=generateRandomColor();
	color1.value = randomColor1;
	color2.value = randomColor2;
	setGradient()
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom);
	
