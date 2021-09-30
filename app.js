import { add } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addAnswer = document.getElementById('add-answer');
const addButton = document.getElementById('add-btn');
console.log(addInput1, addInput2, addAnswer, addButton);

addButton.addEventListener('click', ()=> {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);

    addAnswer.textContent = result;
}); 



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
