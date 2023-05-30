"use strict";
// Observer sur la liste des svg dans skills.css
const observerAboutMe = new IntersectionObserver(function(entries){
    // console.log(entries);
        // tableau contenant des intersectionObserverEntry
    for(var i = 0; i<entries.length;i++)
    {
        if(entries[i].isIntersecting)
        {
            entries[i].target.classList.add("visible");
            entries[i].target.classList.add("animateFromLeft");

        }
    }
}, {
    threshold : 0.5 // indique la zone a partir de laquelle l'élément devient "visible";
});

// observer un élément
observerAboutMe.observe(document.querySelector(".about-me-content_first"));

// Observer sur la liste des svg dans skills.css
const observerAboutMe2 = new IntersectionObserver(function(entries){
    for(var i = 0; i<entries.length;i++)
    {
        if(entries[i].isIntersecting)
        {
            entries[i].target.classList.add("visible");
            entries[i].target.classList.add("animateFromRight");

        }
    }
}, {
    threshold : 0.5
});

observerAboutMe2.observe(document.querySelector(".about-me-content_second"));