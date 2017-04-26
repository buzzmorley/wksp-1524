var elUsername = document.getElementById('username');   // Get username input
var elMsg = document.getElementById('feedback');        // Get feedback element

function checkUsername(minLength)  {                    // Declare function
    if (elUsername.value.length < minLength)  {         // If username is too short
        // Set message
        elMsg.innerHTML = 'User name must be ' + minLength + ' characters or more';
    } else {                // Otherwise
    elMsg.innerHTML = '';   // Clear message
    }
    
}

if (elUsername.addEventListener)  {         // If event listener supported
    elUsername.addEventListener('blur', function() {
        checkUsername(5);                   // Call checkUsername
    } , false );                             // Capture during bubble phase
} else {                                    // Otherwise
  elUsername.attachEvent('onblur', function(){
      checkUsername(5);
  });
    }