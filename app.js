console.log ('hello');
//creation d'un tableau en 2 dimension
var grille = new Array(); // on crée le cadre 

for (var y=0; y<15; y++) // creation de lignes dans la grille
	grille [y] = new Array(); 


for (var y=0; y<15; y++) // on parcourt les lignes
	for (var x=0; x<15; x++) // creation des cellules
		grille[y][x] =0;


for (var y=0; y<15; y++) // on parcourt les lignes
	for (var x=0; x<15; x++) // creation des cellules
		// alert("Case" + y + "-" + x + ":"+ grille[y][x]);
console.log(grille);
