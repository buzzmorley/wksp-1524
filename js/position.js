var sx = document.getElementById('sx');     // var to hold screenX
var sy = document.getElementById('sy');     // var to hold screenY
var px = document.getElementById('px');     // var to hold pageX
var py = document.getElementById('py');     // var to hold pageY
var cx = document.getElementById('cx');     // var to hold clientX
var cy = document.getElementById('cy');     // var to hold clientY

function showPosition(event)    {           // Declare function
  sx.value = event.screenX;                 // Update element with screenX
  sy.value = event.screenY;                 // Update element with screenY
  px.value = event.pageX;                   //Update element with pageX
  py.value = event.pageY;                   //Update element with pageY
  cx.value = event.clientX;                 //Update element with clientX
  cy.value = event.clientY;                 //Update element with clientY
}

var el = document.getElementById('body');   // Get body element
el.addEventListener('mouseover', showPosition, false); // Move updates position