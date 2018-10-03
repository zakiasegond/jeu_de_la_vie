// console.log ('hello');
// //creation d'un tableau en 2 dimension
//  var grille = new Array(); // on crée le cadre 
//  var tab = $('#tab');
 
 
// tab.append('<table></table>'); //créer le tableau
// console.log(tab);

// // creation de lignes dans la grille
// for (var y=0; y<15; y++)
// { 
// 	var row = tab.append ( '<tr>' + grille [y] + '</tr>');

// console.log(row);
// }

// 	for (var x=0; x<15; x++) 
// 	{// creation des cellules
// 		var cell = tab.apppend ( '<td></td>');
// 	} 

// on parcourt les lignes et on initilise a zero
// for (var y=0; y<15; y++)
// {
// 		grille[y][x] =0;
// }


var tableau = [];
var tab = $('#tab');


tab.append('<table></table>'); //créer le tableau


// for(i=0; i<15; i++){ // créer ligne de tete (th)
//     var row = tab.append('<th>'+ tableau[i] + '</th>')
// }

for(i=0; i<15; i++){ // créer les autre ligne (tr)
    var row = tab.append('<tr>'+ tableau[i] + '</tr>')
    
    // for (j=0; j<15; j++){ // la premiere cellule de chaque ligne (th ou td)
    //     var cell = row.append('<th>' + tableau[i] + '</th>')
    // }
    for(j=0; j<15; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
        var cellvide = row.append('<td></td>')
        
    }

  }  


// var tab = $('#tab');
// var color





// for(i=1; i<15; i++){ // créer les autre ligne (tr)
// 	var row = tab.append('<tr>'+ grille[i] + '</tr>')
	
// 	for (j=1; j<=1; j++){ // la premiere cellule de chaque ligne (th ou td)
// 		var cell = row.append('<th>' + grille[i] + '</th>')
// 	}
// 	for(j=1; j<15; j++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
// 		var cellvide = row.append('<td></td>')
		
// 	}

	
// }
