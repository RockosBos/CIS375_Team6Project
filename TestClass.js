//This is the test Javascript page, can be deleted after project completion

    document.body.onload = addElement();

function addElement () { 
        // create a new div element 
        var newDiv = document.createElement("div"); 
        // and give it some content 
        var newContent = document.createTextNode("Hi there and greetings!");
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
  
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("div1"); 
        document.body.insertBefore(newDiv, currentDiv); 
  }
  function AddFunction() {
    var table = document.getElementById("Table");
    var row = table.insertRow(table.rows.length-2);
	var table_buffer = table.rows.length-5;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    
    cell1.innerHTML = "<center><input type='text' id='F' name='Function1' size='4'></center>";
    cell2.innerHTML = "<center><input type='Number' id='CC' name='CC1' style='width:50px' value='0' min='1' max='100'></center>";
    cell3.innerHTML = "<center><input type='Number' id='P' name='P1' style='width:50px' value='0' min='1' max='100'></center>";
    cell4.innerHTML = "<center><input type='Number' id='RA' name='RA1' style='width:50px' value='0' min='1' max='100'></center>";
    cell5.innerHTML = "<center><input type='Number' id='EA' name='EA1' style='width:50px' value='0' min='1' max='100'></center>";
    cell6.innerHTML = "<center><input type='Number' id='ED' name='ED1' style='width:50px' value='0' min='1' max='100'></center>";
    cell7.innerHTML = "<center><input type='Number' id='CRC' name='CRC1' style='width:50px' value='0' min='1' max='100'></center>";
    cell8.innerHTML = "<center><input type='Number' id='CRT' name='CRT1' style='width:50px' value='0' min='1' max='100'></center>";
    cell9.innerHTML = "<center><input type='Number' id='CE' name='CE1' style='width:50px' value='0' min='1' max='100'></center>";
    cell10.innerHTML = "<center><b><p id='Fsum'>0</p></b></center>";

    document.getElementById('F').scrollIntoView();

    document.getElementById('F').id = 'F'+ table_buffer;
    document.getElementById('CC').id = 'CC'+ table_buffer;
    document.getElementById('P').id = 'P'+ table_buffer;
    document.getElementById('RA').id = 'RA'+ table_buffer;
    document.getElementById('EA').id = 'EA'+ table_buffer;
    document.getElementById('CRC').id = 'CRC'+ table_buffer;
    document.getElementById('CE').id = 'CE'+ table_buffer;
    document.getElementById('ED').id = 'ED'+ table_buffer;
    document.getElementById('CRT').id = 'CRT'+ table_buffer;
    document.getElementById('Fsum').id = 'Fsum'+ table_buffer;
}

