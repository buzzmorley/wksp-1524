
// querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a node list
// The second matching element  ( the third list name) is selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';