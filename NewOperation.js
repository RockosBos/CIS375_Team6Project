//This page will be used to generate HTML and will work with both the Operation class and index files
let i = 0;
function addRow(){
    i++;
    console.log("Add new Row Begin");
    let table = document.getElementById("operationTable");
    let row = table.insertRow(-1);

    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);

    col1.innerHTML= i;
    col2.innerHTML= "<input type='text' id='inputOp' name='inputOp' style='width: calc(100% - 3px)'>";
    col3.innerHTML= "<input type='text' id='inputRel' name='inputRel' style='width: calc(100% - 3px)'>";
    

    console.log("Add new Row End");
}
function removeRow(){
    console.log("Remove Bottom Row Begin");

    let table = document.getElementById("operationTable");
    if(table.rows.length > 1){
        table.deleteRow(-1);
        i--;
    }

    console.log("Remove Bottom Row End");
}