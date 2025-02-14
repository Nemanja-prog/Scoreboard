let domacin = document.getElementById("domacin");

let gost = document.getElementById("gost");

let poen1 = document.getElementById("poen1");

let poen2 = document.getElementById("poen2");

let poen3 = document.getElementById("poen3");

let poen4 = document.getElementById("poen4");

let poen5 = document.getElementById("poen5");

let poen6 = document.getElementById("poen6");

let restar = document.getElementById("restart");

let bodDomacin = 0;

let bodGost = 0;

function dodaj1(){

    bodDomacin +=1;

    domacin.textContent = bodDomacin;
    
}

function dodaj2() {

    bodDomacin += 2;

    domacin.textContent = bodDomacin;

}

function dodaj3() {

    bodDomacin += 3;

    domacin.textContent = bodDomacin;

}

function dodaj4() {

    bodGost += 1;

    gost.textContent = bodGost;

}

function dodaj5() {

    bodGost += 2;

    gost.textContent = bodGost;

}

function dodaj6() {

    bodGost += 3;

    gost.textContent = bodGost;

}

function restart() {
    
  domacin.textContent = 0;

  gost.textContent = 0;

  bodGost = 0;

  bodDomacin = 0;

}
