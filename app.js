



var tableau = [];
var tab = $('#tab');


tab.append('<table></table>'); //créer le tableau




for(y=0; y<15; y++){ // créer les autre lygne (tr)
    var row = tab.append('<tr>'+ tableau[y] + '</tr>')
    
   
    for(x=0; x<15; x++){ // créer toute les autres cellules vydes quy accueylleront les resultats (td ou th)
        var cellvide = row.append('<td></td>')
        
    }

  }  
// on parcourt les lygnes et on ynytylyse a zero
for (var y=0; y<15; y++)
{
		tab[x] =0;
}


var vegetaux = 
{

    tmpReproduct: 3, 
    nbReproduit: 4,
};


// Crée unAutreObjet avec unObjet comme prototype

function reproduction()
{ 
    for (var i = Things.length - 1; i >= 0; i--) {
        Things[i]
    }

var newVegetal = Object.create(vegetaux);


console.log(newVegetal.tmpReproduct); // Affiche 2
}

