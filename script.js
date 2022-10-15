var wheelDistance = function(evt) {
      
    // wheelDelta inidicates how 
    // Far the wheel is turned
    var w = evt.wheelDelta;
          
    // Returning normalized value
    return w / 1;
}
  
// Adding event listener for some element
somEl.addEventListener("mousewheel", wheelDistance);