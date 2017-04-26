var elUsername = document.getElementById('username');   // Get username input
var elMsg = document.getElementById('feedback');    // Get feedback element

function checkUsername(minLength)   {       // Declare function
    if (elUsername.value.length < minLength)    {
        // Set the error message
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {                        // Otherwise
    elMsg.innerHTML = '';           // Clear message
    }
}

elUsername.addEventListener('blur', function() {    // When it looses focus
    checkUsername(5);                               // Pass arguments here
}, false);