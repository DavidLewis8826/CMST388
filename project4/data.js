
function Login() {
  let x = document.forms["login"]["Username"].value;
  let y = document.forms["login"]["Password"].value;
  let a = document.forms["login"]["Request"].value;
  if (x == "admin") {
    if (y == "1234"){
      if (a == "Data"){
      window.location.replace("https://cmst386-dlewis218.azurewebsites.net/project4/Data.html");
      }
      if (a == "Remove"){
        window.location.replace("https://cmst386-dlewis218.azurewebsites.net/project4/removedata.html");
      }
      if (a == "Add"){
        window.location.replace("https://cmst386-dlewis218.azurewebsites.net/project4/adddata.html");
      }
    }
    alert("All must be filled out");
    return false;
  }
}

function dataupdate () {
    Papa.parse("list.csv", {
      download: true,
      skipEmptyLines: true,
      complete : csv => {
        var table = document.getElementById("data");
        for (let row of csv.data) {
          let tr = table.insertRow();
          for (let cell of row) {
            let td = tr.insertCell();
            td.innerHTML = cell;
          }
        }
      }
    });
  }
function adddata(){
  const fs = require('fs');
  const AddArray = [];

 
  const input1 = document.getElementById("login");
  const input2 = document.getElementById("fname");
  const input3 = document.getElementById("lname");
  const input4 = document.getElementById("path");
  const input5 = document.getElementById("tdate");


  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const value6 = "N";

 
  AddArray.push(value1, value2, value3, value4, value5, value6);
  fs.appendFile('list.csv', AddArray, (err) => {
    if (err) throw err;
    console.log('Data appended to file');
  });
}
function removedata(){
  const fs = require('fs');
  const AddArray = [];

 
  const input1 = document.getElementById("login");
  const input2 = document.getElementById("fname");
  const input3 = document.getElementById("lname");
  const input4 = document.getElementById("path");
  const input5 = document.getElementById("tdate");


  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const value6 = "Y";

 
  AddArray.push(value1, value2, value3, value4, value5, value6);
  fs.appendFile('list.csv', AddArray, (err) => {
    if (err) throw err;
    console.log('Data appended to file');
  });

}
var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var months = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]
function update(){
  var d = new Date();
  date.innerHTML = 'Year - '+d.getFullYear()+'<br>';
  date.innerHTML += 'Month - '+months[d.getMonth()]+'<br>';
  date.innerHTML += 'Date(in month) - '+d.getDate()+'<br>';
  date.innerHTML += 'Day of Week - '+days[d.getDay()]+'<br>';
  date.innerHTML += 'Hour - '+d.getHours()+'<br>';
  date.innerHTML += 'Minute - '+d.getMinutes()+'<br>';
  date.innerHTML += 'Second - '+d.getSeconds()+'<br>';

}
window.addEventListener("load", function(){
  setInterval(update, 1000 );
});
function validateForm() {
  let x = document.forms["request"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["request"]["mail"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  let u = document.forms["request"]["comment"].value;
  if (u == "") {
    alert("Comment must be filled out");
    return false;
  }
}