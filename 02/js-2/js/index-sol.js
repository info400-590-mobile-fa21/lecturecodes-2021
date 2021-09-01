document.addEventListener("DOMContentLoaded", function(event) {
	//We will work on the first half of the exercise in the class here
	document.getElementById("menu1").addEventListener("click", function(){
		document.getElementById("paragraph1").textContent = "This is the 1st <i>italic</i> paragaph.";
	});

	document.getElementById("menu2").addEventListener("click", function(){
		document.getElementById("paragraph2").innerHTML = "This is the 1st <i>italic</i> paragaph.";
	});

	document.getElementById("menu3").addEventListener("click", function(){
		document.getElementById("textfield1").value = "Not a Default Value";
	});

	document.getElementById("menu4").addEventListener("click", function(){
		document.getElementById("url1").setAttribute("href", "https://www.facebook.com/");
	});

	document.getElementById("menu5").addEventListener("click", function(){
		document.getElementById("img1").setAttribute("src", "images/twc-logo.gif");
	});

	//Your exercise starts here
	
	document.getElementById("test-menu1").addEventListener("click", function(){
		document.getElementById("test-sentence").innerHTML = "This paragraph contains a <i>italic</i> sentence";
	});

	document.getElementById("test-menu2").addEventListener("click", function(){
		document.getElementById("url-test").textContent = "the Cordova document";
	});

	document.getElementById("test-menu3").addEventListener("click", function(){
		document.getElementById("url-test").setAttribute("href", "https://cordova.apache.org/docs/en/latest/");
	});

	document.getElementById("test-menu4").addEventListener("click", function(){
		document.getElementById("img-test").setAttribute("src", "images/reactnative-logo.png");
	});

	document.getElementById("test-menu5").addEventListener("click", function(){
		document.getElementById("button-test").setAttribute("value", "We are all buttons.");
	});
});