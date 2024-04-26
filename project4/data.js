function demoA () {
    // (PART A) FETCH CSV FROM SERVER
    Papa.parse("list.csv", {
      download: true,
      skipEmptyLines: true,
  
      // (PART B) DRAW CSV FILE
      complete : csv => {
        // (B1) GET + RESET HTML TABLE
        var table = document.getElementById("demoA");
       
  
        // (B2) DRAW TABLE ROWS
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