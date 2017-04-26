
function checkUsername()    {       //Declare function
    var elMsg = document.getElementById('feedback');    // Get feedback element
    if (this.value.length < 5)  {       // If user name too short
        elMsg.textContent = 'Username must be 5 characters or more';    //Set message
    } else {                        // Otherwise
      elMsg.textContent = '';       // Clear message     
    }
    
}

var elUsername = document.getElementById('username');        // Get username input
// When it looses focus call checkUsername
elUsername.addEventListener('blur', checkUsername, false);