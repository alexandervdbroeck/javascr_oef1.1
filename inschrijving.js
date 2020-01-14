function checkFormFields() {
   const voornaam = document.getElementById("voornaam").value.length;
   const naam  = document.getElementById("naam").value.length;
   if (voornaam  < 2 || naam < 2)
   {
       document.getElementById('paragraaf').style.display = "block";
       document.getElementById('paragraaf').innerHTML = 'uw naam moet langer dan twee tekens zijn ';
       return false
   }
   else
   {
       getInputValue()
       return false
   }
}

function getInputValue(){

    var inputVal = document.getElementById("number").value;
    persons  = parseInt(inputVal)
    persons += 1;
    document.getElementById('paragraaf').style.display = "block";
    document.getElementById('paragraaf').innerHTML = 'u schreef u in voor : ' + persons + '  personen';

}