"use strict";
/*
    1. Créer une todo list. à chaque appui sur le bouton ajout,
        créer un nouvel élément dans la liste.
        cet élément doit contenir la valeur de l'input et une croix.
        On en profitera pour vider l'input.
    2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
        effet de barrer l'élément.
    3. le clique sur la croix supprimera l'élément concerné.
    4. sauvegarder la liste en localstorage.
    5. afficher la liste sauvegardé au chargement de la page.
    6. éditer la liste lorsque l'on coche ou supprime un élément.
    Bonus : Utiliser le drag and drop pour déplacer nos éléments dans la liste. il faudra penser à sauvegarder les éléments déplacé.
 */



// Selecteurs
//  Selecteur du bouton ajouter
const todoForm = document.querySelector(".splide .splide__track ul li div .addBtn");
//  Selecteur du champ de texte
const todoInput = document.querySelector(".splide .splide__track ul li div input");
//  Selecteur de ul contenant la liste
const todoItemsList = document.querySelector(".splide .splide__track ul li .todo-items");
console.log(todoForm,todoInput,todoItemsList)
//  tableau qui va stock toute les todos , il aura un id , un nom et un boolean completed sous format JSON
let todos = [];


//  Evenements 

//  Quand je clique sur le bouton ajouter , je créer mon élément li dans ul
todoForm.addEventListener("click", showTodoList)
function showTodoList(e){
    e.preventDefault();
    //  Je crée un li
    const li = document.createElement("li");
    let todoInputValue = todoInput.value;
    //  J'ajoute la valeur de l'utilisateur dans li
    li.append(todoInputValue);
    //  Si le champ est vide
    if(todoInputValue === ''){
        console.log('pas ok') 
    }
    else{ 
        todoInput.value = "";
        console.log("ok")
        //  J'ajoute le li dans ul
        todoItemsList.append(li); 
        const span = document.createElement('span');
        const txt = document.createTextNode('\u00D7');
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        //  J'ajoute la valeur dans le tableau todos
        todos.push(todoInputValue);
        //  J'appelle la fonction
        addToLocalStorage(todos);
         // Je clear le champ de texte.
        getFromLocalStorage();
        
    }
}


//  Ajout d'une classe qui aura l'effet de barrer l'élément quand je clique sur un élément de la liste
todoItemsList.addEventListener("click", function(e){
    var t = e.target
    if(e.target.tagName === "LI"){
        console.log("evenement pour barrer l'élément",e.target);
        // si la class checked est défini , j'ajoute cette classe à mon élément.
        e.target.classList.toggle("checked");
    }
    if(t.classList.contains('checked')){
        t.remove(t)
        console.log("ok")
        
    }else{
        console.log("non ok")
    } 
})

// fonction pour ajouter les Todo au localstorage avec parametre mon tableau vide
function addToLocalStorage(todos){
    //  Convertir le tableau en string puis le stocke
    localStorage.setItem('todos', JSON.stringify(todos))
    //  l'afficher
    showTodoList(todos);
}


// afficher la liste sauvegardé au chargement de la page.

function getFromLocalStorage(){
    //  recuperer la propriété 'todo' dans localstorage
    const ref = localStorage.getItem('todos');
    // si ref existe
    if(ref){
        //  On le reconverti en tableau et on le stocke dans le tableau todos
        todos = JSON.parse(ref);
        //  Puis on l'affiche
        showTodoList();
    }
}
getFromLocalStorage()

