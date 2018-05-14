Array.prototype.forEach.call(document.querySelectorAll('[data-ripple]'), function(element){
        // find all elements and attach effect
        new RippleEffect(element); // element is instance of javascript element node
    });