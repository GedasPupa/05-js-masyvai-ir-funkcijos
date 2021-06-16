"use strict";

import {newArrayElement} from "./functions.js"; // ES6
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
paragraph.innerText = pArray;

document.getElementById('submit').addEventListener("click", function() {
    let input = document.getElementById('input').value;
    newArrayElement(input, pArray);
    paragraph.innerText = pArray;
});

// #2






