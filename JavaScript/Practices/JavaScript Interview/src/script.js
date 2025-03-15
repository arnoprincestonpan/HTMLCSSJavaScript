/*
Author: Arno Princeston Pan
Challenge: Write a Function that checks to checks if a character exists in a word. Specific at the places from 2nd to 4th.
Date: 03/14/2025
Notes: Added possibility to find character at specific index. Using TypeScript.
*/
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
