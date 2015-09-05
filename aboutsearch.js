//write a function that searches an array for a favorite thing
function favorite () {

	var input=document.getElementById('textbox').value;

	var aa="";

	switch (input){
		case "book":
			aa="The Bartimaeus Trilogy";
			break;
		case "color":
			aa="Purple, of course";
			break;
		case "food":
			aa="Ice cream, or macaroni and cheese";
			break;
		case "song":
			aa="Right now, it's Gun by Chvrches";
			break;
		case "artist":
			aa="Salvador Dali"
			break;
		case "tv show":
			aa="The Flash"
			break;
		case "dessert":
			aa="Ice cream";
			break;
		case "website":
			aa="unfortunately I spend too much time on Tumblr";
			break;
		case "font":
			aa="Righ now, I like and can afford Mission Gothic and Cylburn.";
			break;
		case "place":
			aa="Bangkok, Thailand, or maybe Boston!"
			break;
		case "movie":
			aa="Current favorite is Big Hero 6";
			break;
		case "disney movie":
			aa="Mulan, The Lion King, Big Hero 6";
			break;
		case "disney princess":
			aa="Mulan";
			break;
		case "ice cream flavor":
			aa="Edy's French Silk"
			break;
		case "activity":
			aa="Singing, or designing/drawing, or dancing, or watching a movie"
			break;
		case "chain restaurant":
			aa="The Cheesecake Factory";
			break;
		case "famous person":
			aa="Randy Pausch, Grant Gustin";
			break;
		case "Hogwarts house":
			aa="Gryffindor!";
			break;
		case "store":
			aa="Best Buy";
			break;
		case "clothing store":
			aa="H&M";
			break;
		case "comic":
			aa="Robin: Son of Batman, Prez";
			break;
		case "webcomic":
			aa="Gloomverse";
			break;
		case "superhero":
			aa="Dick Grayson, AKA Nightwing";
			break;
		case "animal":
			aa="All kinds of cats and birds";
			break;
		case "hackathon":
			aa="HackBeanpot!";
			break;
		case "designer":
			aa="Stefan Sagmeister";
			break;
		default:
			aa="I guess I don't have a favorite one of those."



	}

	document.getElementById('answer').innerHTML=aa;
}