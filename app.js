// console.log ('hello');
// //creation d'un tableau en 2 dimension
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



// var tab = $('#tab');
// var color

// tab.append('<table></table>'); //créer le tableau




// for(i=1; i<15; i++){ // créer les autre ligne (tr)
// 	var row = tab.append('<tr>'+ grille[i] + '</tr>')
	
// 	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
// 		var cell = row.append('<th>' + grille[i] + '</th>')
// 	}
// 	for(j=1; j<15; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
// 		var cellvide = row.append('<td></td>')
		
// 	}

	
// }
