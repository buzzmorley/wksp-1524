// create the array
var colors=['white','black','custom'];

//update third item in array
colors[2]='beige';

//get element with the id of colors
var el=document.getElementById('colors');

//replace with the third item from the array
el.textContent=colors[2]; 