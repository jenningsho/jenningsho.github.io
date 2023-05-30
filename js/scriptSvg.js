"use strict";
// Observer sur la liste des svg dans skills.css
const observerSvg = new IntersectionObserver(function(entries){
    // console.log(entries);
        // tableau contenant des intersectionObserverEntry
    for(var i = 0; i<entries.length;i++)
    {
        if(entries[i].isIntersecting)
        {
            entries[i].target.classList.add("visibleSvg");
        }
    }
}, {
    threshold : 0.5 // indique la zone a partir de laquelle l'élément devient "visible";
});

// observer un élément
observerSvg.observe(document.querySelector(".skills .svg_list"));
