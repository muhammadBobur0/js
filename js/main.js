var elForm = document.querySelector(".form");
var elKM = document.querySelector(".inputkm");
var textDanger = document.querySelector(".text");
var elman = document.querySelector(".input-men");
var text = document.querySelector(".man-strong");
var eltext =document.querySelector(".text")



elForm.addEventListener('submit', function (e){
  e.preventDefault()
  var elvLU = Number(elKM.value) 
  var elma = elman.value
  
  if (isNaN(elvLU)) {
    eltext.textContent = "harif  mumkin emas"
    return
  } if (elvLU < 0) {
    eltext.textContent = "0 dan kichik sonlar kirg'azish mumkin emas"
    return
  }else {
    eltext.textContent = "son kirgazin"
  }

  // text.textContent = eltime(elvLU, elma);
  
  
});




function eltime (elvLU, elma) {
  if (elma == "man") {
    return Math.round(elvLU / 3.6) 
  }
};