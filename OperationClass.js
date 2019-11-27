//This is the javascript file for the operation class all back end class development will be located here
class Operation{
  constructor(id, name, relationships){
    this.operationID = id;
    this.name = name;
    this.relationships = relationships;
    console.log("Operation Created: " + id +" " + name + " " + relationships);
  }
  getID(){
    return this.operationID;
  }
  getName(){
    return this.name;
  }
  getRelationshipLoc(){
    return this.relationships;
  }
};
function generateTR(){
    console.log("Generate TR Begin");
    let table = document.getElementById("operationTable");
    let size = table.rows.length - 1;
    console.log(size);
    let operationArray = [];
    for(i = 0; i < size; i++){
        let currentRow = table.rows.item(i + 1);
        let Cells = currentRow.getElementsByTagName("td");
        operationArray[i] = new Operation(Cells[0].innerHTML, Cells[1].children[0].value, Cells[2].children[0].value);
        console.log(operationArray[i].getID());
        console.log(operationArray[i].getName());
        console.log(operationArray[i].getRelationshipLoc());
    }

    console.log("Generate TR End");
}
