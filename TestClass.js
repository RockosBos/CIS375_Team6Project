//This is the test Javascript page, can be deleted after project completion
document.body.onload = addElement();

function addElement () { 
        // create a new div element 
        var newDiv = document.createElement("div"); 
        // and give it some content 
        var newContent = document.createTextNode("Hi there and greetings!");
        var newInput = document.documentElement("")
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
  
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("div1"); 
        document.body.insertBefore(newDiv, currentDiv); 
  }
