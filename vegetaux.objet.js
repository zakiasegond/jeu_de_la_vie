console.log('hello');

var vegetaux = new Object(); // création d'un nouvel objet
vegetaux.vie = 1;
vegetaux.age = 0;
vegetaux.coord = shuffleTable(); // variable qui appelle la fonction shuffleTable dans le app.js


vegetaux.etaler = function(vegetauxCoord)
{
	var choixEtalage = Math.floor(Math.random() *Math.floor(3));
	

	if(choixEtalage == 0) // permet de faire deplacer de haut en bas et de droite a gauche.
	{
		var xActuel = vegetauxCoord[1]++;
		var yActuel = vegetauxCoord[0]; 
	}

	if(choixEtalage == 1)
	{
		var xActuel = vegetauxCoord[1]--;
		var yActuel = vegetauxCoord[0]; 
	}

	if(choixEtalage == 2)
	{
		var xActuel = vegetauxCoord[1];
		var yActuel = vegetauxCoord[0]++; 
	}

	if(choixEtalage == 3)
	{
		var xActuel = vegetauxCoord[1];
		var yActuel = vegetauxCoord[0]--; 
	}

	vegetauxCoord = [yActuel, xActuel, "#" + yActuel + "C" + xActuel];
	$(vegetauxCoord[2]).css("background-color", "green"); // colore la case en vert.
	return vegetauxCoord;	
	
}

vegetauxCoord = vegetaux.coord;
var temps = 0;
var memoire = 0;
setInterval(function()
{
		temps ++;
		if(temps - memoire == 4)
		{
			vegetauxCoord = shuffleTable();
			memoire = temps;
		}
		console.log(temps);
		vegetaux.etaler(vegetauxCoord);
		
},500);



//vegetaux.generer_vegetaux();
console.log(vegetaux.coord);
console.log(vegetaux.vie);
console.log("son age est de : "+vegetaux.age);


