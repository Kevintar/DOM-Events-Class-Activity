//Your code goes here

// 1. Click the button to display your name
//Selectors
let targetButton = document.querySelector("#btnName");
let myName = document.querySelector("#myName");
//Function
function displayName() {
  document.getElementById(`displayMsg`).innerText = myName.value;
}
//Call the event
targetButton.addEventListener("click", displayName);








//2. Switch lights on mouseover
//Selectors
let switchTheBulb = document.querySelector("#imgSec");
//Function
function switchOn() {
  document.getElementById("imageOff").src = "images/lighton.png";
}
function switchOff() {
  document.getElementById('imageOff').src = "images/lightoff.png";
}
//Call the event
switchTheBulb.addEventListener("mouseover", switchOn);
switchTheBulb.addEventListener("mouseout", switchOff);









//3. Double click to display content
//Selectors
let clickButton = document.querySelector("#btndbName");
/*Function {
  //some code here
  //create a new img element
}*/
function showPic(){
  document.getElementById('displayPara').innerHTML = '<img src="images/smileyface.png">'
}
//Call the event
clickButton.addEventListener("dblclick", showPic);








// 4. Traffic Lights
//Selectors
let stopHere =  document.querySelector('#btnStop');
let ready = document.querySelector('#btnReady');
let go = document.querySelector('#btnGo');
//Function 1
function turnRed(){
  document.getElementById("stopDiv").style.backgroundColor = "red";
  document.getElementById("readyDiv").style.backgroundColor = "black";
  document.getElementById("goDiv").style.backgroundColor = "black";
}
//Function 2
function turnYellow(){
  document.getElementById("stopDiv").style.backgroundColor = "black";
  document.getElementById("readyDiv").style.backgroundColor = "yellow";
  document.getElementById("goDiv").style.backgroundColor = "black";
}
//Function 3
function turnGreen(){
  document.getElementById("stopDiv").style.backgroundColor = "black";
  document.getElementById("readyDiv").style.backgroundColor = "black";
  document.getElementById("goDiv").style.backgroundColor = "green";
}
//Call the events
stopHere.addEventListener('click', turnRed);
ready.addEventListener('click', turnYellow);
go.addEventListener('click', turnGreen);









//5. Change textbox border colours
//Selectors
let btnToColor = document.querySelector('#btn2Name');
//Function
function changeColor(){
document.getElementById("firstName").style.borderColor= "orange";  
document.getElementById("lastName").style.borderColor= "purple";  
}
//Call the event
btnToColor.addEventListener('click',changeColor);











//6. validate the box [length should be more than 5 characters]
//Selectors
let q6Bth = document.querySelector("#btnSub2");
let myName2 = document.querySelector("#myName2");
/*Function {
  //if statement
}*/
function displayName2() {
  if (myName2.value.length <= 8) {
  document.getElementById(`errMsg`).innerText = "The Number " + myName2.value + " has been recorded";}
  else {
    alert('Warnning!! The Password must less than 8 characters');
  }
}

//Call the event
q6Bth.addEventListener('click', displayName2);









// 7.create a list of hobbies
//Selectors

/*Function {
  //for loop
}*/

//Call the event

// 8. Display a profile card from an object
//Object

//Selectors

/*Function {
    //for loop
      //if statement
  }*/
