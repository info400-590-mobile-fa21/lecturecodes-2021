document.addEventListener('DOMContentLoaded', function(event) {
	
	/* 
	In this JavaScript exercise, we will practice DOM selection and manipulation.
	The sample code here shows the UI of a weather app, without backend data access.
	In this assignment, you'll need to implement the following features:
	1. When a user types a city name in the "city" textfield and click the "+" button on the right, 
	the app will create a city "panel" with the city name, an weather icon, a temperature, and a delete button
	2. When a user clicks the "-" button on the right of each city panel, the panel will be deleted.

	** You can find some weather icons in the image folder. For now, just choose any icon and a temperature **
	** For the newly added city panel, you can choose to add it in any place 
	(e.g., in the begining, at the end, or sort it by city name) as long as that is consistent.

	*/

	//when the + button is pressed
	let city_name = ''
	
	document.getElementById('add_city').addEventListener('click', function(event){
		city_name = document.getElementById('city_text').value;


      	let mainNode = document.getElementById('main');
      	let creditNode = document.getElementById('credit');

		let panelNode = document.createElement('div');
		panelNode.setAttribute('class', 'panel-body');
		// mainNode.appendChild(panelNode);
		mainNode.insertBefore(panelNode, creditNode);



		let captionNode = document.createElement('div');
		captionNode.setAttribute('class', 'caption-display');
		panelNode.appendChild(captionNode);

		let cityNode = document.createElement('span');
		let cityNameNode = document.createTextNode(city_name);
		cityNode.appendChild(cityNameNode);
		captionNode.appendChild(cityNode); 

		let imgNode = document.createElement('img');
		imgNode.setAttribute('class', 'weather-icon');
		imgNode.setAttribute('src', 'images/snowy.png');
		panelNode.appendChild(imgNode);

		let tempNode = document.createElement('span');
		tempNode.setAttribute('class', 'status');
		let tempTextNode = document.createTextNode('58F');
		tempNode.appendChild(tempTextNode);
		panelNode.appendChild(tempNode);


		let deleteNode = document.createElement('a');
		deleteNode.setAttribute('class', 'btn clickable');
		deleteNode.setAttribute('href', '#');
		panelNode.appendChild(deleteNode); 

		let deleteIconNode = document.createElement('i');
		deleteIconNode.setAttribute('class', 'fas fa-minus');
		deleteNode.appendChild(deleteIconNode);
		deleteNode.addEventListener('click', function(event){
			deleteNode.parentNode.remove()
		});

		document.getElementById('city_text').value = '';

	});

	//when the delete button is clicked
	let deleteNodes = document.getElementsByClassName('clickable');

	Array.prototype.forEach.call(deleteNodes, function(element){
		if (element.id != 'add_city'){
			element.addEventListener('click', function(event){
				element.parentNode.remove();
			});
		}
		
	});

}, false);