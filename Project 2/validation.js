//These list are made to go through and check if they equal numbers 
const list = ["First Name", "Last Name", "Address", "City"] // list of the name to print messages.
const letters = ["fname", "lname", "address", "City"] // list of the values to check
//These list are made to go through and check if don't equal numbers
const numlist = ["Zip Code", "Area Code", "Phone number"] // list of the name to print messages.
const nums = ["zip", "area", "number"]// list of the values to check
// made to check how long a number is
const digits = [numlist + "Email name", "Email Domain"]  //names to put on print messages
const digitsList =[numlist + "Email name", "Email Domain"] //list of values to check
const amount = [5, 3, 7, 64, 252] //values to compare
function validateForm() {
  let x = document.forms["form"]["state"].value;
  if (x == "0"){
    alert("Please select a State.");
  }
  //check for if user put numbers
  for(let o = 0; o < letters.length; o++){
    let x = document.forms["form"][letters[o]].value; //gets the values
    if (x == ""){ //if nothing entered
      alert(list[o] + " must be filled out");
      continue
    }
    if (Number.isInteger(x)){ //if it is a number
      alert(list[o] + " cannot be a number");
    }
  }
  //checks for if user put letters or anything but numbers
  for(let o = 0; o < nums.length; o++){
    let x = document.forms["form"][nums[o]].value;
    if (x == ""){
      alert(numlist[o] + " must be filled out");
      continue
    }
    if (isNaN(x)){
      alert(numlist[o] + " has to be all numbers.");
    }
    
  }
  //check for email 
  let e = document.forms["form"]["emailData"].value;
  var email = e.split("@"); //split to check each side
  email[0] = digits[3]
  email[1] = digits[4]
if(digits[3] > amount [3]){
  alert(digitslist[3] + " is too long"); //if too long
}
if(digits[4] > amount [4]){
  alert(digitslist[4] + " is too long");//if too long
}
//used to check how many digits in the data vaules
  for(let o = 0; o < digits.length; o++){
    let x = document.forms["form"][nums[o]].value;
    if(amount[o] < x.legth){ //if too long
      alert(digitslist[o] + " is too long");
    }
  }
  //check if meal preference was made
  let x =document.forms["form"][Vegan].value;
  if(x = false){
  let x =document.forms["form"][Vegetarian].value;
  if(x = false){
    let x =document.forms["form"][Vegetarian].value;
    if(x = false){
      alert("You must submit a meal preference");//if all were false
}} }
let x =document.forms["form"][contact].value; //checks for contact method entered
if (x = false){ //if not entered 
  alert("You must submit a contact method");
}
}



