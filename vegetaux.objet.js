console.log('hello');

var vegetaux = {
    valeur: 1,
    maturite : 4,
    color : "green",
    affiche : function()
    {
    	document.write(this.maturite);
    }

}
vegetaux.affiche();



vegetaux.maturite = 4;

console.log(vegetaux.maturite);




// function generer_vegetaux()
// {
//     var e = document.getElementsByClassName('case');
//     var cpt = 0;
    
//     for(var i=0; i< 4; i++)
//     {
//         if(e[cpt].style.backgroundColor === 'rgb(255, 255, 255)')
//         {
                
//             e[cpt].style.backgroundColor = '#39790D';
//         }
            
//         else
//         {
//             console.log("ca ne marche pas");
//         }
//             cpt++;

//     }

//      generer_vegetaux()
// }
            

 //function croissance_vegetaux()
// {
//  
//      for(var i=0; i< 4; i++)
//     setIntarval(function(){
//         cpt++;
//     },
//         1000);        
// }

// croissance_vegetaux();

    

//         var interval = setInterval(generer_vegetaux(),500);
//         cpt++;
//         console.log(interval);
//     }      
// }        


                      
//  var newVegetal = Object.create(vegetaux);
//  var vegetaux = {
//     valeur:1,
//      //reproduction:reproduction_vegetaux();
//      color : "green",
 
//   };
//      vegetaux.maturite : generer_vegetaux();

// // var vegetaux = {
// //     maturite: 4,
// //     valeur: 1,
// //     color: "green"
// // };


// // var vegetaux = new Object();
// // vegetaux.vie = 1;
// // vegetaux.age = 0;