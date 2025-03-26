/*
Author: Arno Princeston Pan
Challenge: Write a Function that checks to checks if a character exists in a word. Specific at the places from 2nd to 4th.
Date: 03/14/2025
Notes: Added possibility to find character at specific index. Using TypeScript.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
* function char_find
* a function that returns true or false if a String/char character exists in the String word
* parameters: String word, String/Char character, Number[] from (range char to char)
* returns: true or false
*/
var START_RANGE = 1;
var END_RANGE = 3;
function char_find(word, character, range) {
    if (range === void 0) { range = [START_RANGE, END_RANGE]; }
    if (!word || word.length < (END_RANGE - START_RANGE)) {
        throw new Error("Error Detected: parameter word is ".concat(word));
    }
    else if (!character || character.length === 0) {
        throw new Error("Error Detected: parameter character is ".concat(character));
    }
    else if (!range || range.length < 2) {
        throw new Error("Error Detected: parameter range is ".concat(range[0], " to ").concat(range[1]));
    }
    for (var charIndex = range[0]; charIndex < word.length; charIndex++) {
        if (word.charAt(charIndex) === character) {
            console.log("For word: ".concat(word, " find from range ").concat(range[0], " to ").concat(range[1], ". The char ").concat(character, " is found at index: ").concat(charIndex, "."));
            return true;
        }
        else {
            console.log("For word: ".concat(word, " find from range ").concat(range[0], " to ").concat(range[1], ". The char ").concat(character, " is NOT found at index: ").concat(charIndex, "."));
            return false;
        }
    }
    ;
}
console.log(char_find("Console", 'c'));
console.log(char_find("Console", 'o'));
console.log(char_find("Console", 'o', [4, 5]));
console.log(char_find("Console", 'o', [0, 0]));
console.log(char_find("Console", 'l', [1, 6]));
/*
Error Checks Below
*/
// console.log(char_find("Console", 'o', [1,0]))
// console.log(char_find("Console", 'o', ["Cuba",0]))
// console.log(char_find("Console", 'o', []))
// console.log(char_find("Console", 'o', [0,"Argentina"]))
// console.log(char_find(null, 'o', [1,3]))
// console.log(char_find("Me", 'o'))
// console.log(char_find("", 'o', [0,0]))
// console.log(char_find("Fusion", '', [0,0]))
// console.log(char_find(5, 'o', [0,0]))
// console.log(char_find("kitty", 5, [0,0]))
/*
Find the amount of words in a paragraph and how many time it repeats.
The paragraph "The cat sat on the mat. The cat was very fat. The mat was soft. The cat liked the soft mat.".
*/
var findCount;
var originalString = "The cat sat on the mat. The cat was very fat. The mat was soft. The cat liked the soft mat.";
findCount = originalString.toLowerCase().split(/[\s.]+/).filter(function (word) { return word !== ''; });
var wordCounts = new Map();
findCount.forEach(function (word) {
    if (wordCounts.has(word)) {
        wordCounts.set(word, wordCounts.get(word) + 1);
    }
    else {
        wordCounts.set(word, 1);
    }
});
console.log(wordCounts);
/*
Given the array you made above called findCount. How would you make it not have repeated words?
*/
var filteredFindCount = Array.from(new Set(findCount));
console.log(filteredFindCount);
function intersection(nums1, nums2) {
    var resultNumbers = [];
    nums1.forEach(function (numberOne) {
        nums2.forEach(function (numberTwo) {
            if (numberOne === numberTwo) {
                resultNumbers.push(numberOne);
            }
        });
    });
    resultNumbers.sort();
    resultNumbers = Array.from(new Set(resultNumbers));
    return resultNumbers;
}
// function intersection(nums1 : number[], nums2 : number[]) : number[] {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     const result: number[] = [];
//     set1.forEach(number => {
//         if(set2.has(number)){
//             result.push(number);
//         }
//     })
//     return result;
// }
// Example usage:
console.log(intersection([1, 2, 2, 3, 4, 5], [2, 2, 4, 6])); // Expected: [2, 4]
console.log(intersection([1, 3, 5, 7], [2, 4, 6, 8])); // Expected: []
/*
Combine two Arrays and Sort them.
*/
var array1 = [1, 3, 5];
var array2 = [2, 4, 6];
var spreadArray = __spreadArray(__spreadArray([], array1, true), array2, true);
console.log(spreadArray);
spreadArray.sort(function (a, b) { return a - b; });
console.log(spreadArray);
var concatArray = array1.concat(array2);
console.log(concatArray);
