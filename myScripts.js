if (localStorage["note"]) {
   var note = localStorage["note"];
   document.getElementById("note").value = note;
}
 
function autoSave() {
   var note = document.getElementById("note").value;
   localStorage.setItem("note", note);
}

//POST-IT NOTE SHOW AND HIDE
var show = false;
function showNote(){
   if (show == false){
       document.getElementById("note").style.opacity = 1;
       show = true;
   }
   else if (show == true){
       document.getElementById("note").style.opacity = 0;
       show = false;
   }
}
var showCalc = false;
function showCalculator(){
   if (showCalc == false){
       document.getElementById("calc").style.opacity = 1;
       showCalc = true;
   }
   else if (showCalc == true){
       document.getElementById("calc").style.opacity = 0;
       showCalc = false;
   }
}
