/*eslint-env browser */
var noteInput, noteName, textEntered, target;                   // Declare variables

noteName = document.getElementById('noteName');                 // Get element that holds name
noteInput = document.getElementById('noteInput');               // Input for writing the note

function writeLabel(e)  {                                       // Declare function
  if (!e)  {
        e = window.event;                                       // Use IE5-8 fallback
  }
  target = e.target || e.srcElement;                            // Get target of event
  textEntered = target.value;                                   // Value of that element
  noteName.textContent = textEntered;                           // Update note text
}

// This is where the record / pause controls and functions go...

function recorderControls(e)  {                                 // Declare recorderControls()
  if (!e)  {                                                    // If event not present
  e = window.event;                                             // Use IE5-8 fallback
}
   target = e.target || e.srcElement;                           // Get the target element
   if (e.preventDefault)  {                                     // If preventDefault() supported
      e.preventDefault();                                       // Stop default action
   } else {                                                     // Otherwise
     e.returnValue = false;                                     // IE fallback: stop default action
}

   switch(target.getAttribute('data-state'))  {                 // Get the data-state attribute
     case 'record':                                             // If it's vale is record
       record(target);                                          // Call the record() function
       break;                                                   // Exit function to where its called
     case 'stop':                                               // If it's value is stop
       stop(target);                                            // Call the stop(function)
       break;
       // More buttons could go here...
   }
}

function record(target)  {                                      // Declare function
  target.setAttribute('data-state', 'stop');                  // Set data-state attr to stop
  target.textContent = 'stop';                                  // Set text to 'stop'
  
}

function stop(target)  {                                        
    target.setAttribute('data-state', 'record');                // Set data-set attr to record
    target.textContent = 'record';                              // Set text to record
}

// End record / pause controls


if (document.addEventListener)  {                               // If event listener supported
  document.addEventListener('click', function(e)  {             // For any click document
    recorderControls(e);                                        // Call recorderControls()
  }, false);
  
// If input fires on noteInput, call writeLabel()
  noteInput.addEventListener('input', writeLabel, false);
} else {                                                        // Otherwise
  document.attachEvent('onclick', function(e)  {                // IE fallback
    recorderControls(e);                                        // Calls recorderControls()
});

// If keyup event fires on noteInput, call writeLabel()

noteInput.attachEvent('onkeyup', writeLabel);
      
}

