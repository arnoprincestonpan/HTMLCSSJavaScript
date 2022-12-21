/*
IMPORTANT NOTE: ensure each and all variables
declared here are later used as arguments 
when demonstrating the invocation of your functions
eg: invoke your function several times, 
each time with different sample data
*/

/*
Part 1
some test data to use as arguments 
for the list images function tests
*/
//use this when pathing the src="" to the img
const pathToImages  = "images/";

//a valid array of images
const arrayOfImages      = ["jane.jpg","joe.jpg","jana.jpg","jim.jpg"];
//not a valid one
const notAnArrayOfImages     = "just a string";
const alsoNotAnArrayOfImages = [54, 54, 2345, -45];

/*
Part 2
some test data to use as arguments 
for the list links function tests
*/
//a valid array of link urls
const arrayOfLinks = ["https://bcit.ca","https://learn.bcit.ca","https://www.bcit.ca/study/courses/comp2132","https://www.bcit.ca/study/courses/comp2913","https://www.bcit.ca/study/courses/comp2909"];
//bad examples of array of link urls
const notAnArrayOfLinks     = [true, false, true];
const alsoNotAnArrayOfLinks = 45;

/*
Part 3
some test data to use as arguments 
for the list of names function tests
*/
//a valid list of names
const arrayOfNames          = ["Shania", "Joe", "Jane", "Sandy"];
//not valid examples
const notAnArrayOfNames     = 23;
const arrayOfNamesTooSmall  = ["Shania"];
