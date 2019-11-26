<!--
Purpose: This will be a test HTML page, may be deleted once project is complete
-->
<!DOCTYPE html>
<html>
<head>
  <title>Process Based Estimation</title>
  <script src= "Calculate.js"></script>
  <script src= "TestClass.js"></script>
  <script src= "DeleteFunction.js"></script>
</head>
<body>
<a href="../index.php">Back to main page</a>
<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>
<a href="help.html"><button>Help</button></a>
<button style="float: right;" onclick="Calculate()">Calculate</button>
<table style="width:100%" id="Table">
  <caption><font size="6"><b>Process Based Estimation</b></font></caption>
  <tr>
    <th>Activity --></th>
    <th>Customer Communication</th>
    <th>Planning</th>
    <th>Risk Analysis</th>
    <th>Engineering p1</th>
    <th>Engineering p2</th>
    <th>Construction Release p1</th>
    <th>Construction Release p2</th>
    <th>Customer Evaluation</th>
    <th>Total per-function:</th>
  </tr>
  <tr>
    <th>Task --></th>
    <th></th>
    <th></th>
    <th></th>
    <th>Analysis</th>
    <th>Design</th>
    <th>Code</th>
    <th> Test</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <th>Function</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <th><input type="text" name="Function1" id='F1' size="4"></th>
    <th><input type="text"  name="CC1" id='CC1' style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="P1" id='P1' style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="RA1" id='RA1' style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="EA1" id='EA1'style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="ED1" id='ED1'style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="CRC1" id='CRC1' style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="CRT1" id='CRT1'style="width:50px" value="0" min="1" max="100"></th>
    <th><input type="text"  name="CE1" id='CE1' style="width:50px" value="0" min="1" max="100"></th>
    <th><p id="Fsum1">0</p></th>
  </tr>
<tr>
    <th>Total per-task:</th>
    <th><p id = "CCsum">0</p></th>
    <th><p id = "Psum">0</p></th>
    <th><p id = "RAsum">0</p></th>
    <th><p id = "EAsum">0</p></th>
    <th><p id = "EDsum">0</p></th>
    <th><p id = "CRCsum">0</p></th>
    <th><p id = "CRTsum">0</p></th>
    <th><p id = "CEsum">0</p></th>
    <th><p id = "Totalsum">0</p></th>
  </tr>
  <tr>
    <th>% of Effort</th>
    <th><p id = "CC%">0%</p></th>
    <th><p id = "P%">0%</p></th>
    <th><p id = "RA%">0%</p></th>
    <th><p id = "EA%">0%</p></th>
    <th><p id = "ED%">0%</p></th>
    <th><p id = "CRC%">0%</p></th>
    <th><p id = "CRT%">0%</p> </th>
    <th><p id = "CE%">0%</p></th>
    <th><p id = "Total%">0%</p></th>
  </tr>
</table>
<button onclick="AddFunction()">Add Function</button>
<button onclick="DeleteFunction()">Remove Function</button>
</body>
</html>