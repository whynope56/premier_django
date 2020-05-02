let elt = document.getElementById('oups');
let elt2 = document.getElementById('oups2');
let elt3 = document.getElementById('oups3');

let entree = document.getElementById('entree');
let launchButton = document.getElementById('launch-button');
let gameContent = document.getElementById('game-content');

entree.addEventListener('input', function(){

  if(entree.value.length == 0){
    entree.className = "";
    launchButton.disabled = true;
  }

  else{
    if(!isDateRight(entree.value)){
      entree.className = " error";
      launchButton.disabled = true;
    }
    else {
        entree.className = " ok";
        launchButton.disabled = false; 
    }
  }

});

launchButton.addEventListener('click', function(){
  launchButton.disabled = true;
  entree.disabled = true;
  var tab = entree.value.split("/");
  dayNumber = findDay(tab[0], tab[1], tab[2]);
  createButton(gameContent, numberToDay(dayNumber));
  //elt3.innerHTML = "C'était un " + numberToDay(dayNumber) + "<br>" + "Oui j'ai trouvé à ta place.";
  
});

function buttonListen(){

}

function createButton(parentElement, answer){
  let buttonDiv = document.createElement('div');
  let buttons = [];
  
  let btn1 = document.createElement('button');
  btn1.textContent = "lundi";
  let btn2 = document.createElement('button');
  btn2.innerHTML = "mardi";
  let btn3 = document.createElement('button');
  btn3.innerHTML = "mercredi";
  let btn4 = document.createElement('button');
  btn4.innerHTML = "jeudi";
  let btn5 = document.createElement('button');
  btn5.innerHTML = "vendredi";
  let btn6 = document.createElement('button');
  btn6.innerHTML = "samedi";
  let btn7 = document.createElement('button');
  btn7.innerHTML = "dimanche";

  btn1.setAttribute('class', 'game-button');
  buttons.push(btn1);
  btn2.setAttribute('class', 'game-button');
  buttons.push(btn2);
  btn3.setAttribute('class', 'game-button');
  buttons.push(btn3);
  btn4.setAttribute('class', 'game-button');
  buttons.push(btn4);
  btn5.setAttribute('class', 'game-button');
  buttons.push(btn5);
  btn6.setAttribute('class', 'game-button');
  buttons.push(btn6);
  btn7.setAttribute('class', 'game-button');
  buttons.push(btn7);

  for (let index = 0; index < 7; index++) {
    buttons[index].addEventListener('click', function(){
      if(buttons[index].getAttribute('class') == 'game-button-right'){
        document.location.reload(true);
      }
      if(buttons[index].textContent == answer){
        buttons[index].setAttribute('class', 'game-button-right');
        btns = buttonDiv.getElementsByClassName('game-button');
        btns_false = buttonDiv.getElementsByClassName('game-button-false');
        btns_right = buttonDiv.getElementsByClassName('game-button-right');
        elt3.innerHTML = "Cliquer sur le bouton vert pour réessayer.";
      }
      else{
        buttons[index].setAttribute('class', 'game-button-false');
      }
    });

    buttonDiv.appendChild(buttons[index]);    
  }

  parentElement.appendChild(buttonDiv);

  
}

function findDay(day, month, year){
  // Initialisation
  var number = 0;

  // On ajoute les deux derniers chiffres de l'année (ou l'année elle même si elle est 
  // inférieure ou égale à 2 chiffres)
  if(year.length < 3){
    number = parseInt(year);
  }
  else{
    var y = year.length;
    number = parseInt(year.substring(y-2, y));
  }
  
  // On ajoute le quart de ce nombre, sans le reste
  number = number + Math.floor(number/4);

  // On ajoute le jour (facile celui-ci)
  number = number + parseInt(day);

  // On ajoute un chiffre selon le mois (là il faut faire des if, pas le choix)
  var monthValue = parseInt(month);
  if(monthValue == 2 || monthValue == 3 || monthValue == 11){
    number = number + 3;
  }
  else if(monthValue == 4 || monthValue == 7){
    number = number + 6;
  }
  else if(monthValue == 5){
    number = number + 1;
  }
  else if(monthValue == 6){
    number = number + 4;
  }
  else if(monthValue == 9 || monthValue == 12){
    number = number + 5;
  }
  else if(monthValue == 8){
    number = number + 2;
  }
  else{
    number = number + 0;
  }

  // On enlève 1 pour janvier et février
  if (monthValue == 1 || monthValue == 2){
    number = number - 1;
  }

  // On ajoute un nombre selon le siècle (un truc modulo 400)
  var siecle = Math.floor(parseInt(year)/100)
  if(siecle % 4 == 0){
    number = number + 6;
  }
  else if(siecle % 4 == 1){
    number = number + 4;
  }
  else if(siecle % 4 == 2){
    number = number + 2;
  }
  else{
    number = number + 0;
  }

  return number % 7;

}

function numberToDay(number){
  if(number == 0){
    return "dimanche";
  }
  else if(number == 1){
    return "lundi";
  }
  else if(number == 2){
    return "mardi";
  }
  else if(number == 3){
    return "mercredi";
  }
  else if(number == 4){
    return "jeudi";
  }
  else if(number == 5){
    return "vendredi";
  }
  else if(number == 6){
    return "samedi";
  }
}

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

    if (parseInt(month_string) < 13 && parseInt(month_string) > 0 && parseInt(day_string) > 0 && parseInt(day_string) < 32 && !isNaN(year_string) && year_string.length > 0){
      
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

// Test REQUEST
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        elt.textContent = response.current_condition.tmp + "°C à Lyon actuellement (" + response.current_condition.hour + ")";
        elt2.textContent = "Si, c'est une info importante.";
        console.log(response.current_condition.tmp);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/lat=45.747lng=4.836");
request.send();