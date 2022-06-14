var elForm = document.querySelector(".form");
var elKM = document.querySelector(".inputkm");
var textDanger = document.querySelector(".text");
var elman = document.querySelector(".input-men");
var text = document.querySelector(".man-strong");
var eltext =document.querySelector(".text");
var elveloso = document.querySelector(".velo-strong");
var elinputValu = document.querySelector(".input-velo");



elForm.addEventListener('submit', function (e){
  e.preventDefault()
  var elvLU = Number(elKM.value) 
  
  if (isNaN(elvLU)) {
    eltext.textContent = "harif  mumkin emas"
    return
  } if (elvLU < 0) {
    eltext.textContent = "0 dan kichik sonlar kirg'azish mumkin emas"
    return
  }

  eltime(elman, elvLU)
  
});



function eltime (elman, elvLU) {
  return  elman == "man" ? text.textContent = Math.round (elvLU / 3.6)  : console.log(" "); 
};

function elvelo (elman, elvLU) {
  return  elman == "car" ? elveloso.textContent = Math.round (elvLU / 3.6)  : console.log(" ") 
};