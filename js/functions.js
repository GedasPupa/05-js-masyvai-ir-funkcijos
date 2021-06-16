"use strict";

function newArrayElement(element, pArray) {
    pArray.push(element);
    console.log(element);
    console.log(pArray);
}

function createDiv(index) {
    let divElement = document.createElement('div');
    divElement.classList.add(`elementas-${index}`);
    divElement.innerText = index;
    return divElement;
}
export {newArrayElement, createDiv}; // ES6
// module.exports.newArrayElement = newArrayElement; // Node