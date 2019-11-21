<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" type="text/css" href="./style.css">
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
      <input type="submit" text="Generate Test Cases" value="Generate Test Cases" id="TestCaseButton">
    </form>
    <script src="OperationClass.js"></script>
        <?php
          //this will be the beginning of the php for repeating and loading the operations and relationships into the operation array.
            echo $_GET ["Input1"];
            echo $_GET ["Input2"];
         ?>

  </body>
</html>
