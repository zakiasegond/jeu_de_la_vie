// var vegetarien = {
//     vie : 7,
//     estomac : 3,
//     alimentation : "vegetarien"
// };



var vegetarien = new Object();
vegetarien.vie = 1;
vegetarien.age = 0;
vegetarien.coord = shuffleTable();


vegetarien.grandir = function(vegetarienCoord)
{
	var choixEtalage = Math.floor(Math.random() *Math.floor(3));
	

	if(choixEtalage == 0)
	{
		var xActuel = vegetarienCoord[1]++;
		var yActuel = vegetarienCoord[0]; 
	}

	if(choixEtalage == 1)
	{
		var xActuel = vegetarienCoord[1]--;
		var yActuel = vegetarienCoord[0]; 
	}

	if(choixEtalage == 2)
	{
		var xActuel = vegetarienCoord[1];
		var yActuel = vegetarienCoord[0]++; 
	}

	if(choixEtalage == 3)
	{
		var xActuel = vegetarienCoord[1];
		var yActuel = vegetarienCoord[0]--; 
	}

	vegetarienCoord = [yActuel, xActuel, "#" + yActuel + "C" + xActuel];
	$(vegetarienCoord[2]).css("background-color", "blue");
	return vegetarienCoord;	
	
}

vegetarienCoord = vegetarien.coord;
var temps = 0;
var memoire = 0;
setInterval(function()
{
		temps ++;
		if(temps - memoire == 4)
		{
			vegetarienCoord = shuffleTable();
			memoire = temps;
		}
		console.log(temps);
		vegetarien.grandir(vegetarienCoord);
		
},250);

//vegetaux.generer_vegetaux();
// console.log(vegetaux.coord);
// console.log(vegetaux.vie);
// console.log("son age est de : "+vegetaux.age);


