// var carnivor_F = {
//     vie : 10,
//     estomac : 5,
//     sexe : "femelle",
//     alimentation : "carnivor"
// };

// var carnivor_M = {
//     vie : 10,
//     estomac : 5,
//     sexe : "mâle",
//     alimentation : "carnivor"
// };

// carnivor_F.vie = 10;
// carnivor_M.estomac = 5;

// console.log(carnivor_F.vie);
// console.log(carnivor_M.estomac);

var carnivor = new Object();
carnivor.vie = 1;
carnivor.age = 0;
carnivor.coord = shuffleTable();


carnivor.manger = function(carnivorCoord)
{
	var choixEtalage = Math.floor(Math.random() *Math.floor(3));
	
carnivorCoord
	if(choixEtalage == 0)
	{
		var xActuel = carnivorCoord[1]++;
		var yActuel = carnivorCoord[0]; 
	}

	if(choixEtalage == 1)
	{
		var xActuel = carnivorCoord[1]--;
		var yActuel = carnivorCoord[0]; 
	}

	if(choixEtalage == 2)
	{
		var xActuel = carnivorCoord[1];
		var yActuel = carnivorCoord[0]++; 
	}

	if(choixEtalage == 3)
	{
		var xActuel = carnivorCoord[1];
		var yActuel = carnivorCoord[0]--; 
	}

	carnivorCoord = [yActuel, xActuel, "#" + yActuel + "C" + xActuel];
	$(carnivorCoord[2]).css("background-color", "brown");
	return carnivorCoord;	
	
}

carnivorCoord = carnivor.coord;
var temps = 0;
var memoire = 0;
setInterval(function()
{
		temps ++;
		if(temps - memoire == 4)
		{
			carnivorCoord = shuffleTable();
			memoire = temps;
		}
		console.log(temps);
		carnivor.manger(carnivorCoord);
		
},250);

//vegetaux.generer_vegetaux();
// console.log(vegetaux.coord);
// console.log(vegetaux.vie);
// console.log("son age est de : "+vegetaux.age);




