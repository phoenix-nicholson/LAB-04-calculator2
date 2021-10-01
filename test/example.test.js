// IMPORT MODULES under test here:
import { add, sub, mul, div, mod, int, pyth } from '../calculations.js';
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

test('sub function', (expect) => {
    const input1 = 20;
    const input2 = 16;
    const expected = 4;

    const actual = sub(input1, input2);
    

    expect.equal(actual, expected);
});

test('mul function', (expect) => {
    const input1 = 10;
    const input2 = 10;
    const expected = 100;

    const actual = mul(input1, input2);
    

    expect.equal(actual, expected);
});

test('div function', (expect) => {
    const input1 = 25;
    const input2 = 5;
    const expected = 5;

    const actual = div(input1, input2);
    

    expect.equal(actual, expected);
});

test('mod function', (expect) => {
    const input1 = 10;
    const input2 = 6;
    const expected = 4;

    const actual = mod(input1, input2);
    

    expect.equal(actual, expected);
});

test('int function', (expect) => {
    const input1 = 25;
    const input2 = 5;
    const expected = 5;

    const actual = int(input1, input2);
    

    expect.equal(actual, expected);
});

test('pyth function', (expect) => {
    const input1 = 5;
    const input2 = 5;
    const expected = 25;

    const actual = pyth(input1, input2);
    

    expect.equal(actual, expected);
});