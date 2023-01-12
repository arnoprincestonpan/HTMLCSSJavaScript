/*
Author: Arno Princeston Pan
Challenge: Write a Function that checks to checks if a character exists in a word. Specific at the places from 2nd to 4th.
Date: 12/20/2022
Notes: Added possibility to find character at specific index. 
*/

/*
* function char_find
* a function that returns true or false if a String/char character exists in the String word
* parameters: String word, String/Char character, Number[] from
* returns: true or false
*/
function char_find(word, character, from = [1, 3]) {
    if (word == null) {
        throw new Error("Error Detected: parameter string word is null.")
    } else if (character == null) {
        throw new Error("Error Detected: parameter char character is null.")
    } else if (from == null) {
        throw new Error("Error Detected: parameter number array from is null.")
    } else if (from[0] > from[1]) {
        throw new Error("Error Detected: parameter number array from cannot have the starting number smaller than the second.")
    } else if (typeof (from[0]) !== 'number' || typeof (from[1]) !== 'number') {
        throw new Error("Error Detected: parameter number array from must be a number.")
    } else if (word.length < from[1]) {
        throw new Error("Error Detected: parameter number array from seeks beyond number of characters inside parameter word.")
    } else if (word === "") {
        throw new Error("Error Detected: parameter word is empty.")
    } else if (character === "") {
        throw new Error("Error Detected: parameter character is empty.")
    } else if (typeof (word) !== 'string' || typeof (character) !== 'string') {
        throw new Error("Error Detected: parameter word or/and character must be a string.")
    }

    for (let start = from[0]; start <= from[1]; start++) {
        if (word.charAt(start) === character) {
            return true
        }
    }
    return false
}

console.log(char_find("Console", 'c'))
console.log(char_find("Console", 'o'))
console.log(char_find("Console", 'o', [4, 5]))
console.log(char_find("Console", 'o', [5, 6]))
console.log(char_find("Console", 'o', [0, 0]))
console.log(char_find("Console", 'l', [1, 6]))

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
