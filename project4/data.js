function demoA () {
    // (PART A) FETCH CSV FROM SERVER
    Papa.parse("list.csv", {
      download: true,
      skipEmptyLines: true,
  
         // (PART B) DRAW CSV FILE
    complete : csv => {
        // (B1) GET + RESET HTML TABLE
        var table = document.getElementById("demoA");
        table.innerHTML = "";
  
        // (B2) DRAW TABLE HEADER
        var thead = table.createTHead(),
            tr = thead.insertRow();
        for (let cell of csv.data[0]) {
          let td = tr.insertCell();
          td.innerHTML = cell;
        }
  
        // (B3) DRAW TABLE BODY
        var tbody = table.createTBody();
        for (let i=1; i<csv.data.length; i++) {
          let row = csv.data[i],
              tr = tbody.insertRow();
          for (let cell of row) {
            let td = tr.insertCell();
            td.innerHTML = cell;
          }
        }
      }
    });
  }