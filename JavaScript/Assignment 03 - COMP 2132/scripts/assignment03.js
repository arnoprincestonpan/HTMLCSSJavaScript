/*
IMPORTANT NOTE: ensure each and all variables
declared here are later used as arguments 
when demonstrating the invocation of your functions
eg: invoke your function several times, 
each time with different sample data
*/

const out1  = document.getElementById('pt-01'); // first function output
const out2  = document.getElementById('pt-02'); // second function output
const out3  = document.getElementById('pt-03'); // third function output

/*
Part 1
some test data to use as arguments 
for the list images function tests
*/
//use this when pathing the src="" to the img
const pathToImages  = "images/";
const imagesSize    = `width = '160' height = '160'`;

//a valid array of images
const arrayOfImages      = ["peter.png","quagmire.png","joe.png","cleveland.png"];
//not a valid one
const notAnArrayOfImages     = "just a string";
const alsoNotAnArrayOfImages = [54, 54, 2345, -45];
const justANumber            = 77;

out1.innerHTML += listImagesOnly(arrayOfImages);
out1.innerHTML += listImagesOnly(notAnArrayOfImages);
out1.innerHTML += listImagesOnly(alsoNotAnArrayOfImages);
out1.innerHTML += listImagesOnly(justANumber);


function listImagesOnly(inputArrayOnly){
    html = '';

    let isAnArray = false;
    let hasStrings = false;

    // Find out what was entered into the parameters/arguments
    if(typeof inputArrayOnly == 'string')
    {
        html += `<p>&#10060 You have entered a String.</p>`;
        html += `<p>&#10071 You must provide an Array.</p>`
    }
    else if(Array.isArray(inputArrayOnly))
    {
        html += `<p>&#9989 Awesome! You have entered an Array</p>`
        isAnArray = true;
    }
    else
    {
        html += `<p>&#10060 Please enter an Array.</p>`;
    }

    // proceed to checking inside of Array if it is an Array
    if(isAnArray == true)
    {
        for(let i = 0; i < inputArrayOnly.length; i++)
        {
            if(typeof inputArrayOnly[i] == 'string')
            {
                html += `<p>&#9989 This Array has Image Names inside.</p>`;
                hasStrings = true;
                break;
            }
            else
            {
                html += `<p>&#10071 This Array doesn't have Image Names inside.</p>`;
                break;
            }
        }
    }

    // if it has Strings inside use it to find the images
    if(hasStrings == true)
    {
        // html += `<p>Entered</p>`;
        html += `<ul>`;

        for(let i = 0; i < inputArrayOnly.length; i++)
        {
            html += `<li><img src = '${pathToImages}${inputArrayOnly[i]}' alt = "${inputArrayOnly[i]}" ${imagesSize}></li>`;
        }

        html += `</ul>`;
    }

    return(html);
  
};

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
const alsoReallyNotAnArrayOfLinks = [23,54,69];

out2.innerHTML += listLinksOnly(arrayOfLinks);
out2.innerHTML += listLinksOnly(notAnArrayOfLinks);
out2.innerHTML += listLinksOnly(alsoNotAnArrayOfLinks);
out2.innerHTML += listLinksOnly(alsoReallyNotAnArrayOfLinks);

function listLinksOnly(inputArrayOnly){
    html = '';

    let isAnArray = false;
    let hasStrings = false;

    // Find out what was entered into the parameters/arguments
    if(typeof inputArrayOnly == 'string')
    {
        html += `<p>&#10060 You have entered a String.</p>`;
        html += `<p>&#10071 You must provide an Array.</p>`
    }
    else if(Array.isArray(inputArrayOnly))
    {
        html += `<p>&#9989 Awesome! You have entered an Array</p>`
        isAnArray = true;
    }
    else
    {
        html += `<p>&#10060 Please enter an Array.</p>`;
    }

    // if it is an array check out what's inside
    if(isAnArray == true)
    {
        for(let i = 0; i < inputArrayOnly.length; i++)
        {
            if(typeof inputArrayOnly[i] == 'string')
            {
                html += `<p>&#9989 This Array has String Links inside.</p>`;
                hasStrings = true;
                break;
            }
            else
            {
                html += `<p>&#10071 This Array doesn't have String Links inside.</p>`;
                break;
            }
        }
    }

    // proceed to print links if array are strings
    if(hasStrings == true)
    {
        // html += `<p>Entered</p>`;
        html += `<ol>`;

        for(let i = 0; i < inputArrayOnly.length; i++)
        {
            html += `<li><a href = "${inputArrayOnly[i]}">${inputArrayOnly[i]}</a></li>`;
        }

        html += `</ol>`;
    }

    return(html);
  
};

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
const arrayOfNamesAgain     = ["Iverson", "LeBron", "Jordan", "Bryant"];


out3.innerHTML += listNamesOnly(arrayOfNames);

out3.innerHTML += listNamesOnly(notAnArrayOfNames);
out3.innerHTML += listNamesOnly(arrayOfNamesTooSmall);

out3.innerHTML += listNamesOnly(arrayOfNamesAgain);
out3.innerHTML += listNamesOnly(arrayOfNames, 'ol');
out3.innerHTML += listNamesOnly(arrayOfNames, 'boggie');

function listNamesOnly(inputArrayOnly, order = `ul`){

    html = ``;

    let isAnArray = false;
    let hasStrings = false;
    let hasLists = false;

    // Find out what was entered into the parameters/arguments
    if(typeof inputArrayOnly == 'string')
    {
        html += `<p>&#10060 You have entered a String.</p>`;
        html += `<p>&#10071 You must provide an Array.</p>`
    }
    else if(Array.isArray(inputArrayOnly))
    {
        html += `<p>&#9989 Awesome! You have entered an Array</p>`
        isAnArray = true;
    }
    else
    {
        html += `<p>&#10060 Please enter an Array.</p>`;
        return(html);
    }

    // if it is an array check out what's inside
    if(isAnArray == true)
    {
        for(let i = 0; i < inputArrayOnly.length; i++)
        {
            if(typeof inputArrayOnly[i] == 'string')
            {
                html += `<p>&#9989 This Array has String Links inside.</p>`;
                hasStrings = true;
                break;
            }
            else
            {
                html += `<p>&#10071 This Array doesn't have String Links inside.</p>`;
                break;
            }
        }
    }

    // check the length if it is less than 1 index or less, if so quit.
    if(inputArrayOnly.length <= 1)
    {
        html += `<p>&#10071 This Array needs more Strings. It only has ${inputArrayOnly.length} Index.</p>`;
        hasStrings = false;
        hasLists = false;
        return(html);
    }
    else
    {
        html += `<p>&#9989 This Array has more than one String(s).</p>`;
    }

    // check the second parameter
    if(order == `ol` || order == `ul`)
    {
        hasLists = true;
    }
    else
    {
        html += `<p>&#10071 ${order} is an invalid type of list.</p>`;
        hasStrings = false;
    }

    // if there the lists are 'ol' or defauly 'ul'
    if(hasLists == true)
    {
        // open type of lines
        if(order == 'ol')
        {
            html += `<p>&#187 Ordered List has been selected.</p>`;
            html += `<ol>`;
        }
        else if(order == `ul`)
        {
            html += `<p>&#187 Unordered List has been selected.</p>`;
            html += `<ul>`;
        }
    
        // display all the names
        if(hasStrings == true)
        {
            for(let i = 0; i < inputArrayOnly.length; i++)
            {
                html += `<li>${inputArrayOnly[i]}</li>`;
            }
        }
        
        // close type of lines
        if(order == 'ol')
        {
            html += `</ol>`;
        }
        else if(order == `ul`)
        {
            html += `</ul>`;
        }
    }

    return(html);
  
};

