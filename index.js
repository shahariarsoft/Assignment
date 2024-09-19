// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.


function calculateDifference(num1,num2){

    let result = num1 - num2;
    return result;
}


let res = calculateDifference(15,7);
console.log(res);




//  2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.


function isOdd(num){
    
    if(num % 2 === 1){
        console.log('true');
    }
    else{
        console.log('false')
    }
}


let num = 7;
isOdd(num);


//  3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.


function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

var arr = [54, 7, 12, 32, 25, 86];
var smallNumber = findMin(arr);
console.log(smallNumber);



//  4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.


function filterEvenNumbers(arr) {
    var even = arr.filter(function(n) {
        return n % 2 === 0;
    });
    return even;
}

var number = [54, 7, 12, 32, 25, 86];
var evenNum = filterEvenNumbers(number);
console.log(evenNum);



//  5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


function sortArrayDescending(arr) {
    
    let DescendingNum = arr.sort(function(a, b) {
        return b - a; 
    });

    return DescendingNum;
}

let nums = [54, 7, 12, 32, 25, 86];

let DescendingNum = sortArrayDescending(nums);
console.log(DescendingNum);



//  6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.


function lowercaseFirstLetter(name) {

    let n = name.charAt(0).toLowerCase() + name.slice(1);
    return n;
}

let names = 'Shahariar';

let a = lowercaseFirstLetter(names);

console.log(a);





//  7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    
    return count;
}

var result = countVowels("shahariar");
console.log(result);



//  8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.


function findAverage(arr) {
    if (arr.length === 0) return 0; 
    var sum = arr.reduce(function(a, c) {
        return a + c;
    }, 0);
    var avg = sum / arr.length;
    return avg;
}

var number1 = [54, 7, 12, 32, 25, 86];

var avg = findAverage(number1);

console.log('Average Number is ', avg);

