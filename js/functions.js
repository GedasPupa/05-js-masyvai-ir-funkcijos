"use strict";

function newArrayElement(element, pArray) {
    pArray.push(element);
    console.log(element);
    console.log(pArray);
}

export {newArrayElement}; // ES6
// module.exports.newArrayElement = newArrayElement; // Node