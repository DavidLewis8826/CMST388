/*
		Your Name: David Lewis
		Last Modified Date: 7/9/2024
		File: event_registration.js
		File Description: Java script file for event registration project 3. 
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

function calculateTotal(){
	const x = document.getElementById("numTickets");
	const y = x.value; 
	if (isNaN(y)){
		document.getElementById("contactInformation").style.display = "none"
		alert("Please type 1, 2, or 3. No letters");
		x.style.backgroundColor = "yellow";
	}
	if (y >= minTickets && y <= maxTickets){
		x.style.backgroundColor = "white";
		document.getElementById("contactInformation").style.display = "block";
		const ticketTotal = y * costPerTicket;
		total = ticketTotal + ticketSurcharge;
		const t = document.getElementById("totalCost");
		t.value = "$" + total + "0";
	}
		else{
			alert("You can only purchase between 1 to 3 tickets at a time.");
			document.getElementById("contactInformation").style.display = "none"
			x.style.backgroundColor = "yellow";
		}}
const letters = ["name", "email"]
const list = ["Name", " E-Mail Address"]
function completePurchase(){
	const good = 0;
	for(let o = 0; o < letters.length; o++){
		let x = document.forms["contact"][letters[o]].value; //gets the values
		if(isNaN(x)){
		}
			else{
				alert(list[o] + " cannot be a number and has to be filled out"); 
				document.forms["contact"][letters[o]].style.backgroundColor = "yellow";
				const good = 1;
			}	
	}
	if (good == 0){
		const t = document.getElementById("totalCost");
		const final = t.value
		alert("Thank you for your purchase of " + final);
	}
}