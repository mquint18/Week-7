// Part 1 
console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
-----------------------`);
console.log(`Programmatically subtract the value of the first element in the array from the value in the last element of the array.`)

let ages = [3,9,23,64,2,8,28,93];
let lastNum = ages.length - 1;
let numTot = 0;

//console.log(ages, ages[lastNum]);

console.log(ages[lastNum]-ages[0]);

console.log(`-------------------------------------
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
-----------------------------------------`)
ages.push(18);
lastNum = ages.length - 1;

//console.log(ages, ages[lastNum]);
console.log(ages[lastNum]-ages[0]);

console.log(`-------------------------------------
Use a loop to iterate through the array and calculate the average age.
-----------------------------------------`)
for(i=0; i<lastNum; i++) {
    numTot =numTot + ages[i];
}
//console.log(numTot);
console.log('average = ' + numTot/lastNum);

//Part 2
console.log(`-------------------------------
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
-----------------------------------`)
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);
console.log(`-------------------------------
Use a loop to iterate through the array and calculate the average number of letters per name.
-------------------------------------    `)
let total = 0;
let namesString = "";
for(i=0; i<names.length; i++){
    let thisName = names[i];
    let nameLength = thisName.length;
    //console.log(thisName + nameLength);
    total = total+nameLength;
}
console.log('The average length = ' + total/names.length);
console.log(`------------------------------
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
----------------------------------`);
for(j=0; j<names.length; j++){
    let thatName = names[j];

    namesString = namesString + thatName+' ';
}
console.log(namesString);

// Parts 3 and 4

console.log(`-----------------------------------------
3. How do you access the last element of any array?
    Answer: use the array.length - 1 to find the index number of the last element.
--------------------------------------`)

console.log(`4. How do you access the first element of any array?
    Answer: use index position 0 as in array[0]
-----------------------------------`);

//Part 5

console.log(`5. Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
---------------------------------------`)
//console.log(names);
let nameLengths = [];
for (k=0; k<names.length; k++) {
    let nameNum = 0;
    nameNum = names[k].length;
    //console.log(nameNum);
    nameLengths.push(nameNum);
}
console.log(nameLengths);

//Part 6
console.log(`------------------------------------------
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
-------------------------------------------`)

let sumTotal = 0;
for (m=0;m<nameLengths.length;m++) {
    sumTotal += nameLengths[m];

}
console.log(`The total is ${sumTotal}.`);

//Part 7

console.log(`----------------------------------------
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
-------------------------------------`)
let newString = ''
function repeatMe(word, n) {
    for (x=1;x<=n;x++) {
        newString = newString + word
    }
    console.log(newString);
    return newString;
}
repeatMe('Hello', 4);

// Part 8

console.log(`-----------------------------------------------------
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
------------------------------------------`)

function combineNames(firstName, lastName) {

return firstName + ' ' + lastName;
}

console.log(combineNames('John', 'Jones'));

//Part 9

console.log(`----------------------------------------------
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
---------------------------------------------------------- `)
const testArray1 = [10,24,33,12,9, 2];
const testArray2 = [34,14,26,62,4,23];
let arrayTotal = 0;

function sumHundred(array) {
    for (p=0;p<array.length;p++)  {
        arrayTotal = arrayTotal + array[p];
    }
    if (arrayTotal > 100) {
        return true;
    }
    else { 
        return false}
}
console.log(sumHundred(testArray1));
console.log(sumHundred(testArray2));

//Part 10
{
console.log(`-----------------------------------------
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
-------------------------------------------------------`)
let numTotal = 0;
let numAvg = 0;
function arrayAverage(array) {
    for (q=0;q<array.length;q++) {
        numTotal += array[q];
    }
    numAvg = numTotal/array.length;
    return numAvg.toFixed(2);
}
console.log(`The average for array 1 is ${arrayAverage(testArray1)}`);
console.log(`The average for array 2 is ${arrayAverage(testArray2)}`);
}

//Part 11
{
console.log(`----------------------------------------------------
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
--------------------------------------------------`);
let numTotal1 = 0;
let numTotal2 = 0;
let numAvg1 = 0;
let numAvg2 = 0;

function arrayAverages(array1, array2) {
    for (q=0;q<array1.length;q++) {
        numTotal1 += array1[q];
    }
    numAvg1 = numTotal1/array1.length;
    ;
    for (r=0;r<array2.length; r++) {
        numTotal2 += array2[r];
    }
    numAvg2=numTotal2/array2.length;
    if (numAvg1 > numAvg2){
        return true; }
    else {return false;}
}
console.log(arrayAverages(testArray1, testArray2));
}

//Part 12
{console.log(`-------------------------------------------------------
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
-----------------------------------------------------`);
let x = 11;
let y = 9;
let a = true;
let b = false;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside === true && moneyInPocket > 10.5) {
        return true;
    }
    else {
        return false;
    }
}
console.log (willBuyDrink(a, x));
console.log (willBuyDrink(a, y));
console.log (willBuyDrink(b, x));
console.log (willBuyDrink(b, y));

}

// Part 13
console.log(`-------------------------------------------------
13. A functon to calculate tip on a restaurant bill.
-----------------------------------------------`);
// A function calculate tip on a restaurant bill.

const tipCalculator =((subTotal, tip) => (subTotal*(tip/100) + subTotal).toFixed(2));
console.log (`Your total including tip is $${tipCalculator(45.22, 20)}.`);

