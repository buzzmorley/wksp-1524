if(window.localStorage) {                                // Check for local storage

  var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');
  
  txtUsername.value = localStorage.getItem('username'); // Elements populated by localStorage data
  txtAnswer.value = localStorage.getItem('answer');
  
  txtUsername.addEventListener('input', function() {    // Data saved
    localStorage.setItem('username', txtUsername.value);
    }, false);
    
    txtAnswer.addEventListener('input', function() {    // Data saved
      localStorage.setItem('answer', txtAnswer.value); 
    }, false);
    
}