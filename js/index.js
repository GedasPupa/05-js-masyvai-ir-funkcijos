"use strict";

import {newArrayElement, createDiv} from "./functions.js"; // ES6
// const {newArrayElement} = require("./functions.js"); // Node

//style
const cStyle = document.querySelector('.container');
cStyle.style.border = "1px solid black";
cStyle.style.width = "300px";
cStyle.style.textAlign = "center";
cStyle.style.marginLeft = "calc(50% - 150px)";

// #1 
let pArray = [1, 3, 5];

let paragraph = document.getElementById('array');
paragraph.innerText = "[" + pArray + "]";

document.getElementById('submit').addEventListener("click", function() {
    let input = document.getElementById('input').value;
    newArrayElement(input, pArray);
    paragraph.innerText = "[" + pArray + "]";
    document.getElementById('input').value = "";    
});

// #2
// ... ??? ...

// #3
let index = 1;
document.getElementById('submit2').addEventListener("click", function() {
    let divas = createDiv(index);
    console.log(divas);
    document.getElementById('divs').append(divas);
    const dStyle = document.querySelector(`.elementas-${index}`);
    dStyle.style.border = "1px solid black";
    dStyle.style.width = "30px";
    dStyle.style.height = "30px";
    dStyle.style.margin = "5px";
    dStyle.style.float = "left";
    index++;
})







