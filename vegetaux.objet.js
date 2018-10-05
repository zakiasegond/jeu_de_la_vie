console.log('hello');

// var vegetaux = 
// {
//     valeur: [1], 
//     maturite: [4],
//     graine:[3]

// };

// function croissance(maturite)
// {
// 	for (var i = 0; i < 4; i++) {
// 		[i]
// 	}
// }



// // Crée unAutreObjet avec unObjet comme prototype

// function reproduction()
// { 
//     for (var  i = 0; i < vegetaux.length; i++) {
//         vegetaux[i]

//     }

// var newVegetal = Object.create(vegetaux);


// console.log(newVegetal); // Affiche 2
// }





var vegetaux = new Object();
vegetaux.vie = 1;
vegetaux.age = 0;



function generer_vegetaux()
{
    var e = document.getElementsByClassName('case');
    var cpt = 0;


    for(var i=0; i< 4; i++)
    {

        // console.log(e[cpt].style.backgroundColor);

        if(e[cpt].style.backgroundColor === 'rgb(255, 255, 255)')
	    {

		    e[cpt].style.backgroundColor = '#39790D';

	    }

	    else
	    {

            console.log("ca ne marche pas");

        }

        cpt ++;

    }

}

generer_vegetaux();

