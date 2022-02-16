

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(28); 
var x = document.getElementById("guessField").value; 


document.getElementById("submitguess2").onclick = function(){

    var z=Math.floor(Math.random() * 100 + 1);



    if ( y == z) {

        console.log(y);

        document.getElementById("guessField").value = z;

        alert("De er like. Gratulerer");

    }

    else {

        console.log(y);

        document.getElementById("guessField").value = z;

        alert ("De er ikke like. Prøv igjen");

    }

   

}


var nummer = Math.round(Math.random()*100);

console.log(nummer);



document.getElementById('btCheck').addEventListener('click', function() {

    let myinput = document.getElementById("bt").value;

    if (nummer < myinput) {

        document.getElementById("svar").innerHTML = "Svaret er større";

        }

        else if (nummer > myinput) {

        document.getElementById("svar").innerHTML = "Svaret er mindre";

        }

        else {

        document.getElementById("svar").innerHTML = "Gratulerer, du gjettet riktig";

        }

    });
function random() {
    let le = Math.round(Math.random()100);

    if (le == nummer) {
        document.getElementById("svar").innerHTML = "Gratulerer, du fikk riktig";
    }
    else {
        document.getElementById("svar").innerHTML = "Huff, " + le + " var feil";
    }
}


