
var tableau = [];
var tab = $('#tab');

tab.append('<table></table>'); //créer le tableau

for(y=0; y<15; y++)
{ // créer les autre ligne (tr)
    var row = tab.append('<tr>'+ tableau[y] + '</tr>')
    
    for(x=0; x<15; x++)
    { // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
        var cell = row.append('<td></td>')
       
    }
}  
// function initjeu ()

// {
//     for (tableau[x,1] & tableau[y,1]) 
//     {
//         var cell = newVegetal.valeur
        
//     }

//     if (var cell == 1)
//         var cell = row.append ('<td class = 'green'></td>')
// }






// -----------------------------------------------------------------------------------------------------
// cours d Orel : 

// // cette fonction renvoie un tableau en 2 dimensions contenant des objets placée aléatoirement

// var monde =[];

// function genere_monde (monde,x, y, nb_vege, nb_carni, nb_vegetaux){
    
//     return[
//         [v1, null, av2],
//         [av1, V2, null]
//     ];
// }



// // cette fonction genere le html qui permet d'afficher le monde

// function afficher_monde(m)
// {
//     $('body').empty();
// }


// function maj_objets (m)
// {
//     for(y=0; y<15; y++)
//     {
//         for(x=0; x<15; x++)
//         {

//             if(m[i][j])
//             {
//                 m[i][j].update();
//             } 
//         }      
//     }
// }





// var monde = genere_monde(monde, 10,10);



// while(true)
// {
// afficher_monde (monde);
// maj_objets(monde);

// }

// //ou
// //setInterval est une fonction qui va generer le monde automatiquement.

// setInterval(function
// {
//     afficher_monde (monde);
//     maj_objets(monde);
// });


