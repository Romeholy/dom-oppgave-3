# dom-oppgave-3

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="index.js">
</head>
<body class="blackground">
    <h1>Find the Number, between 0 and 100</h1>
    <h2 id="svar">Skriv et nummer</h2>
    <form action="">
        <input type="text" id="bt">
        <input type="button" value="Check" onclick="number()">
        <input type="button" value="I fell myself lucky" onclick="random()">
    </form>
</body>
<script src="script.js"></script>

<script>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>

    
</body>
</html>


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


var nummer = Math.round(Math.random()100);
console.log(nummer)
var lop = 1;

function number() {
javascript:

    let ge = document.getElementById("bt").value;

    if (nummer > ge) {
        document.getElementById("svar").innerHTML = "Svaret er større";
    }
    else if (nummer < ge) {
        document.getElementById("svar").innerHTML = "Svaret er mindre";
    }
    else {
        document.getElementById("svar").innerHTML = "Gratulerer, du gjettet riktig";
    }
}

function random() {
    let le = Math.round(Math.random()100);

    if (le == nummer) {
        document.getElementById("svar").innerHTML = "Gratulerer, du fikk riktig";
    }
    else {
        document.getElementById("svar").innerHTML = "Huff, " + le + " var feil";
    }
}


.blackground{ background-color:rgb(123, 221, 31);
    padding: 20px;
    margin: 20px;
   
}
