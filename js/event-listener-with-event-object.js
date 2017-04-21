function checkLength(e, minLength) { // Declare function
    var el, elMsg; // Declare variables
    if (!e) { // If event object does not exist
        e = window.event; // Use IE fallback
    }
    el = e.target || e.srcElement; // Get target of event
    elMsg = el.nextSibling; // Get it's next sibling

    if (el.value.length < minLength) { // If length is too short set msg
        elMsg.innerHTML = 'Username must be ' + minLength + 'characters or more';
    } else { // Otherwise
        elMsg.innerHTML = ''; // Clear message
    }
}

var elUsername = document.getElementById('username'); // Get username input
if (elUsername.addEventListener) { // If event listener is supported
    elUsername.addEventListener('blur', function(e) { // On blur event
        checkLength(e, 5); // Call checkLength()
    }, false);
} else { // Otherwise
    elUsername.attachEvent('onblur', function(e) { // IE falback on blur
        checkLength(e, 5); // Call checkLength
    });
}