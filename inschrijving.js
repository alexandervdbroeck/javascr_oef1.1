$(function () {
    $("form").submit(function(){
        return checkFormFields();
    });
})



function checkFormFields() {
   const voornaam = $('#voornaam').val().length;
   console.log(voornaam)
   const naam  = $('#naam').val().length;
   
   if (voornaam  < 2 || naam < 2)
   {
       $("#paragraaf").html("uw naam moet langer dan twee tekens zijn").show();
       return false
   }
   else
   {
       getInputValue()
       return false
   }
}

function getInputValue(){

    var inputVal = $("#number").val();
    persons  = parseInt(inputVal)
    persons += 1;
    $("#paragraaf").html(`u bent ingeschreven voor : ${persons}  personen`).show()

}