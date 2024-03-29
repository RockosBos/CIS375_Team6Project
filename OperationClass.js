//This is the javascript file for the operation class all back end class development will be located here
class Operation{
  constructor(id, name, relationships){
    this.operationID = id;  //Id number, automatically generated based on row
    this.name = name; //The text the user inputs into the "Operation Name" Column
    this.relationships = relationships; //Array of numeric inputs to form relationships
    
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
    
    let table = document.getElementById("operationTable");
    let size = table.rows.length - 1;
    let errorFlag = false;

    let operationArray = [];
    for(num = 0; num < size; num++){
      
        let currentRow = table.rows.item(num + 1);
        let Cells = currentRow.getElementsByTagName("td");
        if(Cells[1].children[0].value != ""){
            operationArray[num] = new Operation(Cells[0].innerHTML, Cells[1].children[0].value, getNumsFromString(Cells[2].children[0].value, num + 1));
            //This is where our operation array is input. It takes the Id and Name directly and parses the relationship array
        }
        else{
            let e = document.createElement("ErrText");
            document.getElementById("errText").innerHTML = "All operations must have a name!";
            errorFlag = true;
			      break;
			      
        }
        if(operationArray[num].relationships == -1){
          break;
        }
    }
    while(TestCaseTable.rows.length > 1){ //This clears all previous test report rows
      let table = document.getElementById("TestCaseTable");
      table.deleteRow(-1);
    }
    if(!errorFlag){
        for(t = 0; t < operationArray.length; t++){
            for(c = 0; c < operationArray[t].relationships.length; c++){
                createTestCases(t, operationArray, c);
            }
        
        }
    }

}
function getNumsFromString(inputString, rowNum){
  /*
    The purpose of this function is to inputa string from a user and it will parse it and return an array of valid
    number inputs in which we will use to generate relationships. The function currently does not work right and I
    Will fix later
  */
    let splitString = inputString.split(' ');
    let stringArray = [];
    let table = document.getElementById("operationTable");
    let size = table.rows.length - 1;
    let e = document.createElement("errText");
    
	  document.getElementById("errText").innerHTML = "";
	
    for(numl = 0; numl < splitString.length; numl++){
        if(!isNaN(splitString[numl])){
          
            splitString[numl] = parseInt(splitString[numl]);

            if(splitString[numl] <= size && splitString[numl] >= 1 && splitString[numl] != rowNum){
                stringArray[numl] = splitString[numl];
            }
            else{
                if(inputString != ""){
                  document.getElementById("errText").innerHTML = "You have inserted an invalid relationship ID, they must be between 0 and the largest ID you have created, A relationship also cannot be the same ID and the Operation ID, see HELP for input instructions";
                  return -1;
                }
            }
        }
        else{
              document.getElementById("errText").innerHTML = "You have inserted an invalid input, please enter a series of numbers separated by a space. See HELP for input instructions";
              return -1;
            }
    }
        
    return stringArray;
}
function testOutputArray(array){
  /*
    This function is purely for test purposes, you input the input array and it will output all array elements to console.
  */

    for(numi = 0; numi < array.length; numi++){
      console.log("ID: " + array[numi].operationID + " Name: " + array[numi].name + " Relationships: ");
        for(numj = 0; numj < array[numi].relationships.length; numj++){
            console.log(array[numi].relationships[numj]);
        }
    }

}
function createTestCases(rowNum, operationArray, relLoc){

  /*
    This function creates the rows for test cases. Each time it is run it adds a single new row based on the number input.
  */

  let j = rowNum + 1;
  let rel = operationArray[rowNum].relationships[relLoc];
  let table = document.getElementById("TestCaseTable");
  let row = TestCaseTable.insertRow(-1);
  

  let col1 = row.insertCell(0);
  let col2 = row.insertCell(1);
  let col3 = row.insertCell(2);
  let col4 = row.insertCell(3);
  let col5 = row.insertCell(4);

  col1.innerHTML= TestCaseTable.rows.length - 1;
  col2.innerHTML= operationArray[rowNum].name + " and " + operationArray[rel - 1].name + " have been executed successfully";
  col3.innerHTML= "Operation " + operationArray[rowNum].name + " has successfully completed and called Operation " + operationArray[rowNum].relationships[relLoc]  + " Correctly";
  col4.innerHTML= j + " And " + rel;
  col5.innerHTML= "<center><input type='text' id='F' name='Function1' size='4'></center>";

}
