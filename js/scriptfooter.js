"use strict";
// Observer sur le footer 
const observer = new IntersectionObserver(function(entries){
    // console.log(entries);
    for(var i = 0; i<entries.length;i++)
    {
        if(entries[i].isIntersecting)
        {
            entries[i].target.classList.add("visible");
        }
    }
}, {
    threshold : 0.2 
});

// observer un élément
observer.observe(document.querySelector("footer"));