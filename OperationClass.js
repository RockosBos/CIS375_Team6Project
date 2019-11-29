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
    /*
        This function is activated upon pressing the "Generate test cases button" and will run most subsequent functions
        that will parse inputs and generate the Test report table. Currently It just loads the operation table information into the 
        operation class array.
    */
    console.log("Generate TR Begin");
    let table = document.getElementById("operationTable");
    let size = table.rows.length - 1;
    console.log(size);
    let operationArray = [];
    for(i = 0; i < size; i++){
        let currentRow = table.rows.item(i + 1);
        let Cells = currentRow.getElementsByTagName("td");
        operationArray[i] = new Operation(Cells[0].innerHTML, Cells[1].children[0].value, Cells[2].children[0].value);
        getNumFromArray(Cells[2].children[0].value, i + 1);
    }

    console.log("Generate TR End");
}
function getNumFromArray(inputString, rowNum){
  /*
    The purpose of this function is to inputa string from a user and it will parse it and return an array of valid 
    number inputs in which we will use to generate relationships. The function currently does not work right and I
    Will fix later
  */
    console.log("ParseRelationship Start");
    let splitString = inputString.split(" ");
    let stringArray = [];
    let table = document.getElementById("operationTable");
    let size = table.rows.length - 1;
    for(i = 0; i < splitString.length; i++){
        if(!isNaN(splitString[i])){
            splitString[i] = parseInt(splitString[i]);
            if(splitString[i] > size || splitString[i] < 1){
                stringArray[i] = splitString[i];
                console.log("Valid Location: " + splitString[i]);
            }
            else{
                console.log("Invalid relationship ID on line " + rowNum + ": " + splitString[i]);
                break;
            }
        }
        else{
          console.log("Invalid Relationship input on line " + rowNum + ": " + splitString[i]);
          break;
        }
    }
    console.log("ParseRelationship End");
    return stringArray;
}
