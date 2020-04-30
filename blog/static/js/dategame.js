let elt = document.getElementById('oups');

let entree = document.getElementById('entree');

entree.addEventListener('input', function(){
elt.textContent = entree.value.split("/")[2];

if(entree.value.length == 0){
  entree.className = "";
}

else{
  if(!isDateRight(entree.value)){
    entree.className = " error";
  }
  else {
      entree.className = " ok";
  }
}



});

function isDateRight(inputText){

  // Voilà on met le texte splitté dans un tableau
  var tab = inputText.split("/");
  
  if (tab.length != 3){
    return false;
  }
  else {
    var day_string = tab[0];
    var month_string = tab[1];
    var year_string = tab[2];

    if (day_string.length != 2 || month_string.length != 2){
      return false;
    }

    if (parseInt(month_string) < 13 && parseInt(month_string) > 0 && parseInt(day_string) > 0 && parseInt(day_string) < 32 && parseInt(year_string) != NaN && year_string.length > 0){
      
      var month = parseInt(month_string);
      var year = parseInt(year_string);
      var day = parseInt(day_string);

      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        return true;
      }

      if (month == 4 || month == 6 || month == 9 || month == 11){
        if (day < 31){
          return true;
        }
        else{
          return false;
        }
      }

      // Cas du mois de février 
      else{
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
          if (day < 30){
            return true;
          }
          else{
            return false;
          }
        }
        else{
          if (day < 29){
            return true;
          }
          else{
            return false;
          }
        }
      }
    }
  }
}

function checkField(field)
  {
    // validation fails if the input is blank
    if(field.value == "") {
      alert("Error: Input is empty!");
      field.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(field.value)) {
      alert("Error: Input contains invalid characters!");
      field.focus();
      return false;
    }

    // validation was successful
    return true;
  }
