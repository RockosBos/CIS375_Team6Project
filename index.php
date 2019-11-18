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
    Instructions:
    <br>
    <p id="OperationInstruction">
        Enter the name of your operation here. This will be what the Generator will use to create test cases.
    </p>
    <p id="RelationshipInstruction">
        Enter all of the Relationships the operation will have here. The connections across these relationships will generate the test cases.
    </p>
    <form action="php-test.php" method="get">
        <input type="text" name="Input 1">
    </form>

  </body>
</html>
