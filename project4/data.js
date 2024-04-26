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