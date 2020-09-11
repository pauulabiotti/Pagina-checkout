function mascara(i,t){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    if(t == "data"){
       i.setAttribute("maxlength", "7");
       if (v.length == 2 || v.length == 2) i.value += "/";
    }
 
    if(t == "cartao"){
       i.setAttribute("maxlength", "19");
       if (v.length == 4 || v.length == 10) i.value += " ";
       if (v.length == 15) i.value += " ";
    }
 
    if(t == "cpf"){
       i.setAttribute("maxlength", "14");
       if (v.length == 3 || v.length == 7) i.value += ".";
       if (v.length == 11) i.value += "-";
    }
 
    if(t == "cep"){
       i.setAttribute("maxlength", "9");
       if (v.length == 5) i.value += "-";
    }
 
    if(t == "tel"){
       if(v[0] == 9){
          i.setAttribute("maxlength", "10");
          if (v.length == 5) i.value += "-";
       }else{
          i.setAttribute("maxlength", "9");
          if (v.length == 4) i.value += "-";
       }
    }
 
 }
 
 function formatCreditCardOnKey(event) {
     //on keyup, check for backspace to skip processing
     var code = (event.which) ? event.which : event.keyCode;
     if(code != 8)
         formatCreditCard();
     else{
         //trim whitespace from end; trimEnd() doesn't work in IE
         document.getElementById("cartao").value = document.getElementById("cartao").value.replace(/\s+$/, '');
     }
 
 }
 
 function formatCreditCard() {
     var cardField = document.getElementById("cartao");
     //remove all non-numeric characters
     var realNumber = cardField.value.replace(/\D/g,'');
     var newNumber = "";
     for(var x = 1; x <= realNumber.length; x++){
         //make sure input is a digit
         if (isNumeric(realNumber.charAt(x-1)))
             newNumber += realNumber.charAt(x-1);
         //add space every 4 numeric digits
         if(x % 4 == 0 && x > 0 && x < 15)
             newNumber += " ";
     }
     cardField.value = newNumber;
 }
 
 function isNumeric(char){
     return('0123456789'.indexOf(char) !== -1);
 }
 
 
 
 