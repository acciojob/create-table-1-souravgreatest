// script.js
function insert_Row() {
    var table = document.getElementById("sampleTable");
    var newRow = table.insertRow(0); // Insert at the top

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
