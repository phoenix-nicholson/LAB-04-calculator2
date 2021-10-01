import { add } from './calculations.js';
import { sub } from './calculations.js';
import { mul } from './calculations.js';
import { div } from './calculations.js';
import { mod } from './calculations.js';
import { int } from './calculations.js';
import { pyth } from './calculations.js';

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

const modInput1 = document.getElementById('mod-input-1');
const modInput2 = document.getElementById('mod-input-2');
const modAnswer = document.getElementById('mod-answer');
const modButton = document.getElementById('mod-btn');

const intInput1 = document.getElementById('int-input-1');
const intInput2 = document.getElementById('int-input-2');
const intAnswer = document.getElementById('int-answer');
const intButton = document.getElementById('int-btn');

const pythInput1 = document.getElementById('pyt-input-1');
const pythInput2 = document.getElementById('pyt-input-2');
const pythAnswer = document.getElementById('pyt-answer');
const pythButton = document.getElementById('pyt-btn');




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

modButton.addEventListener('click', ()=> {
    const value1 = Number(modInput1.value);
    const value2 = Number(modInput2.value);
    const result = mod(value1, value2);

    modAnswer.textContent = result;
}); 

intButton.addEventListener('click', ()=> {
    const value1 = Number(intInput1.value);
    const value2 = Number(intInput2.value);
    const result = int(value1, value2);

    intAnswer.textContent = result;
}); 

pythButton.addEventListener('click', ()=> {
    const value1 = Number(pythInput1.value);
    const value2 = Number(pythInput2.value);
    const result = pyth(value1, value2);

    pythAnswer.textContent = result;
}); 

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
