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

  // Get the input elements
  const input1 = document.getElementById("login");
  const input2 = document.getElementById("fname");
  const input3 = document.getElementById("lname");
  const input4 = document.getElementById("path");
  const input5 = document.getElementById("tdate");

  // Get the values of the input elements
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const value6 = "N";

  // Add the values to the array
  AddArray.push(value1, value2, value3, value4, value5, value6);
  fs.appendFile('list.csv', AddArray, (err) => {
    if (err) throw err;
    console.log('Data appended to file');
  });
}