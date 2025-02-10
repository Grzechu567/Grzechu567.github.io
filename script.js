function changeContent() {
	const image = document.getElementById("pictures");
	image.src = "https://i.imgur.com/KlYo7pc.jpeg"; // Monkey picture
	image.alt = "A Image of a Cute Monkey";
	
	const paragraph = document.getElementById("picturesdsc");
	paragraph.innerHTML = "This is a Cute Cat Picture";