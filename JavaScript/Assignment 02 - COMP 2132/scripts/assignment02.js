/*
name:   arno princeston pan
class:  comp 2132 - web dev w/ javascript
date:   10/14/2021
notes:  assignment #2 - arrays & iterations
*/

/* Initialization */

const out1              = document.getElementById('p-01');
const out2              = document.getElementById('p-02');
const out3              = document.getElementById('p-03');
const out4              = document.getElementById('p-04');
const out5              = document.getElementById('p-05');
const out6              = document.getElementById('countme');

const arrayOfNumbers    = [4, 0, -4, 13, -2];
const students          = ["Jane", "Joe", "Jill", "Jerome"];


/* change the targetName to see what happens */
const targetName          = "jOe";


var foundName           = false;

/* Part One
a.) use array.push() to add 3 more 1st names to the students array 
b.) display total number of students in the array
*/

students.push('Jackson');
students.push('Arno');
students.push('Joseph');

out1.innerHTML = `Target Name is: \"${targetName}\"`;
out2.innerHTML = `There are ${students.length} student(s) in the list.`;

let html = `<ul style = "margin-top: -10px;">`; 

/* Iterate thru the Student Array */
for(let i = 0; i < students.length; i++)
{
        /* make them all .toUpperCase() to compare */
        if(targetName.toUpperCase() == students[i].toUpperCase())
        {
            /* convert the first charAt(0) .toUpperCase() and add the rest starting from the second letter .substring(1, length of string) .toLowerCase() */
            html += `<li class = "foundLine">THEY'RE HIDING HERE --> 
                <em>${students[i].charAt(0).toUpperCase()}${students[i].substring(1,students[i].length).toLowerCase()}</em>
                     <-- THEY'RE HIDING HERE</li>`;
            foundName = true;
        }
        else
        {
            html += `<li>${students[i]}</li>`;
        }
}

html += `</ul>`;

out3.innerHTML = html;

/* Did the name get found? */
if(foundName)
{
    out4.innerHTML = `YES! ${targetName} is found on the list.`;
}
else
{
    out4.innerHTML = `NO! \"${targetName}\" is not found on the list.`;
}

/* Part Two 
a.) start an <article>
b.) go throught the numbers in the array 
c.) check if it counts up or down
d.) embedd each count within <li></li>
e.) end the <article>
f.) transfer it into the article in html 'countme'
*/

let html2   = `<article>`;
html2       = `<h2>Part #2: Count up or Down</h2>
                <p>Iterative code used to perform various counting routines. (i.e. greater than 0 count down, lesser count up)</p>`;
var countNumber = 0;
const reachMe   = 0;

for(let i = 0; i < arrayOfNumbers.length; i++)
{
    /* Show the Number of the Current Array */
    html2 += `<h3>Number: <strong>${arrayOfNumbers[i]}</strong></h3>`;

    /* Indicate "Count-Up" OR "Count-Down" OR "On-Zero" */
    if(arrayOfNumbers[i] > reachMe)
    {
        html2 += `<h3>Count-Down to ${reachMe}</h3><ul>`; // start <ul> after <h3>Number: #</h3>
    }
    else if(arrayOfNumbers[i] < reachMe)
    {
        html2 += `<h3>Count-Up to ${reachMe}</h3><ul>`;
    }
    else
    {
        arrayOfNumbers[i];
        html2 += `<h3>Number is already at ${arrayOfNumbers[i]}</h3><ul>`;
    }

    if(arrayOfNumbers[i] > reachMe)
    {
        countNumber = arrayOfNumbers[i];
        while(countNumber >= reachMe)
        {
            html2 += `<li>${countNumber}</li>`;
            countNumber--;
        }
    }
    else if(arrayOfNumbers[i] < reachMe)
    {
        countNumber = arrayOfNumbers[i];
        while(countNumber <= reachMe)
        {
            html2 += `<li>${countNumber}</li>`;
            countNumber++;
        }
    }
    else
    {
    }

    /* Close the un-numbered list */
    html2 += `</ul>`;

}

html2 += `</article>`;
out6.innerHTML = html2;