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
  getRelationships(){
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
    
    let operationArray = [];
    for(num = 0; num < size; num++){
      console.log(num + ":" + size);
        let currentRow = table.rows.item(num + 1);
        let Cells = currentRow.getElementsByTagName("td");
        operationArray[num] = new Operation(Cells[0].innerHTML, Cells[1].children[0].value, getNumsFromString(Cells[2].children[0].value, num));
        
    }
    
    testOutputArray(operationArray);
    console.log("Generate TR End");
}
function getNumsFromString(inputString, rowNum){
  /*
    The purpose of this function is to inputa string from a user and it will parse it and return an array of valid 
    number inputs in which we will use to generate relationships. The function currently does not work right and I
    Will fix later
  */
    //console.log("ParseRelationship Start");
    let splitString = inputString.split(" ");
    let stringArray = [];
    let table = document.getElementById("operationTable");
    let size = table.rows.length - 1;
    for(numl = 0; numl < splitString.length; numl++){
      if(!isNaN(splitString[numl])){
        splitString[numl] = parseInt(splitString[numl]);
        if(!(splitString[numl] > size || splitString[numl] < 1)){
            stringArray[numl] = splitString[numl];
            console.log("Valid Location: " + splitString[numl]);
        }
        else{
            console.log("Invalid relationship ID on line " + rowNum + ": " + splitString[numl]);
            break;
        }
    }
    else{
      console.log("Invalid Relationship input on line " + rowNum + ": " + splitString[numl]);
      break;
    }
    }
    //console.log("ParseRelationship End");
    return stringArray;
}
function testOutputArray(array){
  /*
    This function is purely for test purposes, you input the input array and it will output all array elements to console.
  */
    for(numi = 0; numi < array.length; numi++){
      console.log(array.length);
      console.log("ID: " + array[numi].operationID + " Name: " + array[numi].name + " Relationships: ");
        for(numj = 0; numj < array[numi].relationships.length; numj++){
            console.log(array[numi].relationships[numj]);
        }
    }
}
