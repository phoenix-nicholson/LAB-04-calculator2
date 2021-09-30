import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mul } from './calculations.js';
import { div } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addAnswer = document.getElementById('add-answer');
const addButton = document.getElementById('add-btn');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subAnswer = document.getElementById('sub-answer');
const subButton = document.getElementById('sub-btn');

const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulAnswer = document.getElementById('mul-answer');
const mulButton = document.getElementById('mul-btn');

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divAnswer = document.getElementById('div-answer');
const divButton = document.getElementById('div-btn');




addButton.addEventListener('click', ()=> {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);

    addAnswer.textContent = result;
}); 

subButton.addEventListener('click', ()=> {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);

    subAnswer.textContent = result;
}); 

mulButton.addEventListener('click', ()=> {
    const value1 = Number(mulInput1.value);
    const value2 = Number(mulInput2.value);
    const result = mul(value1, value2);

    mulAnswer.textContent = result;
}); 

divButton.addEventListener('click', ()=> {
    const value1 = Number(divInput1.value);
    const value2 = Number(divInput2.value);
    const result = div(value1, value2);

    divAnswer.textContent = result;
}); 

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
