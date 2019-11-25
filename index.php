<!-- 
  ***********************************************************************************************************
Test Case Generator
Created By Nicholas Kessey, Walker Bass, Ryan Way, Colin McLaughlin
Start Date: 11/17/2019
Completion Date: 12/12/2019
Purpose: This is the main index page, this is the home page in which all other pages will be expanded on from
*************************************************************************************************************
-->
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <script type="text/javascript" src="NewOperation.js"></script>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1> CIS375 Test Case Generator </h1>
    <h3> Created By: Nick Kessey - Colin McLaughlin - Walker Bass - Ryan Way</h3>
    <hr>
    <div id="Instructions" >Instructions:</div>
    <br>
    <!-- This is description of the operation box, it will only appear once on the top left of the page-->
    <p id="OperationInstruction">
        Enter the name of your operation here. This will be what the Generator will use to create test cases.
    </p>
    <!-- This is the description of the Relationships, it will be located on the top right of the screen. -->
    <p id="RelationshipInstruction">
        Enter all of the Relationships the operation will have here. The connections across these relationships will generate the test cases.
    </p>
    <form action="index.php" method="get">
      <div id="Inputs">
        <input type="text" name="Input1" id="OperationInput">
        <input type="text" name="Input2" id="RelationshipInput">
      </div>
      <button onclick="addRow()" id="AddRowButton">Add New Row</button>
      <br>
      <input type="submit" value="Generate Test Cases" id="TestCaseButton">
    </form>

         <script src="OperationClass.js"></script>
        <br><br>
        <a href="index.php">Go To Test Page</a>
  </body>
</html>
