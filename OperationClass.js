class Operation{
  constructor(id, name, relationships){
    this.operationID = id;
    this.name = name;
    this.relationships = relationships;
    console.log("Operation Created");
  }
  getID(){
    return this.operationID;
  }
  getName(){
    return this.name;
  }
  getRelationshipLoc(num){
    return this.relationships[num];
  }
};
function createOperation(id, name, relationships){
    let myOperation = new Operation(id, name, relationships);
    console.log("Hello");
    let tempID = myOperation.getID();
    console.log(tempID);
    
    console.log(myOperation.getName());
    for(i = 0; i < 3; i++){
      console.log(myOperation.getRelationshipLoc(i));
    }
}
let myArray = [1, 2, 3];
console.log("Hi");
createOperation(1, "Nick", myArray);
