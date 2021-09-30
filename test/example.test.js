// IMPORT MODULES under test here:
import { add_two, add } from '../calculations.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    const input1 = 2;
    const input2 = 3;
    const expected = 5;

    const actual = add(input1, input2);
    

    expect.equal(actual, expected);
});

test('add function', (expect) => {
    const input1 = 4;
    const input2 = 5;
    const expected = 9;

    const actual = add(input1, input2);
    

    expect.equal(actual, expected);
});
