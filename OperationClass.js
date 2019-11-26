//This is the javascript file for the operation class all back end class development will be located here
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
function generateTR(){
    console.log("Generate TR Begin");

    console.log("Generate TR End");
}
