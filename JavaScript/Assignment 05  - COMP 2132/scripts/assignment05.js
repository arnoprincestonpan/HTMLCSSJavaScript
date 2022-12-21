/*
assignment: 05 - javascript forms

name:       arno princeston pan
course:     comp 2132 (thurs.)
date:       11/07/2021
update:     11/10/2021 v2

notes:      make a form that is responsive and checks the numbers
            entered, there should be a show password <--> hide password,
            there should also be a '?' pop-up for a student ID hint
*/

/* Student ID, Help, and HelpBox Initialize */ 

const studentIDInput = document.getElementById("studentID");
const studentIDHelp = document.getElementById("IDHelp");
const helpBox = document.getElementById("popUp");

/* ID Input */

studentIDInput.addEventListener("mouseover", function(){
    studentIDInput.style = "background-color: blue;";
    studentIDInput.style.color = 'white';
    console.log("Hover Detected on \"Student ID Input\"");
});

studentIDInput.addEventListener("mouseout", function(){
    studentIDInput.style = "background-color:;";
    studentIDInput.style.color = '';
});

/* ? Button */

studentIDHelp.addEventListener("mouseover", function(){
    studentIDHelp.style = "background-color: blue;";
    studentIDHelp.style.color = 'white';
    console.log("Hover Detected on \" ? \"");
    helpBox.style.visibility = 'visible';
});

studentIDHelp.addEventListener("mouseout", function(){
    studentIDHelp.style = "background-color:;";
    studentIDHelp.style.color = '';
    helpBox.style.visibility = 'hidden';
});

// mobile cannot hover, use click 
studentIDHelp.addEventListener("click", function(){
    if(helpBox.style.visibility == 'visible')
    {
        helpBox.style.visibility = 'hidden';
    }
    else
    {
        helpBox.style.visibility = 'visible';
    }
});

/* First and Last Name Initialize */ 

const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");

/* First Name */

firstNameInput.addEventListener("mouseover", function(){
    firstNameInput.style = "background-color: blue;";
    firstNameInput.style.color = 'white';
    console.log("Hover Detected on \" First Name \"");
});

firstNameInput.addEventListener("mouseout", function(){
    firstNameInput.style = "background-color:;";
    firstNameInput.style.color = '';
});

/* Last Name */

lastNameInput.addEventListener("mouseover", function(){
    lastNameInput.style = "background-color: blue;";
    lastNameInput.style.color = 'white';
    console.log("Hover Detected on \" Last Name \"");
});

lastNameInput.addEventListener("mouseout", function(){
    lastNameInput.style = "background-color:;";
    lastNameInput.style.color = '';
});

/* Initialize Password */

const passwordInput = document.getElementById('passwordInput');
const passwordButton = document.getElementById("passwordButton");

/* Password */

passwordInput.addEventListener("mouseover", function(){
    passwordInput.style = "background-color: blue;";
    passwordInput.style.color = 'white';
    console.log("Hover Detected on \" Password \"");
});

passwordInput.addEventListener("mouseout", function(){
    passwordInput.style = "background-color:;";
    passwordInput.style.color = '';
});

/* Hide */

passwordButton.addEventListener("click", function(){
    console.log("toggle hide/show password");
    if(passwordButton.innerHTML == 'Show Password')
    {
        passwordButton.innerHTML = 'Hide Password';
        passwordInput.type = 'text';
    }
    else{
        passwordButton.innerHTML = 'Show Password';
        passwordInput.type = 'password';
    }
});

passwordButton.addEventListener("mouseover", function(){
    passwordButton.style = "background-color: blue;";
    passwordButton.style.color = 'white';
    console.log("Hover Detected on \" Hide \"");
});

passwordButton.addEventListener("mouseout", function(){
    passwordButton.style = "background-color:;";
    passwordButton.style.color = '';
});



/* Initialize Courses*/

coursesOption = document.getElementById('courses');

/* Courses */

coursesOption.addEventListener("mouseover", function(){
    coursesOption.style = "background-color: blue;";
    coursesOption.style.color = 'white';
    console.log("Hover Detected on \" Courses \"");
});

coursesOption.addEventListener("mouseout", function(){
    coursesOption.style = "background-color:;";
    coursesOption.style.color = '';
});


/* Initialize Submit Button */

submitButton = document.getElementById('submitButton');

/* Submit Button */

submitButton.addEventListener("mouseover", function(){
    submitButton.style = "background-color: blue;";
    submitButton.style.color = 'white';
    console.log("Hover Detected on \" Submit \"");
});

submitButton.addEventListener("mouseout", function(){
    submitButton.style = "background-color:;";
    submitButton.style.color = '';
});


/* Submitting the Form */

const regexStudentID = /^a0[0-9]{7}$/i;
var regexSID = RegExp(regexStudentID);

warningBox = document.getElementById('warningBox');

var hasErrors = false;
var html = '';

formBox = document.getElementById('formContainer');

function validateForm(event)
{
    hasErrors = false;
    warningBox.innerHTML = '';
    html = '';

    html += '<ol>';

    firstNameInput.value.trim();
    lastNameInput.value.trim();
    passwordInput.value.trim();
    studentIDInput.value.trim();

    /* Check First and Last Names */ 

    if(firstNameInput.value == "")
    {
        console.log("Empty First Name");
        html += '<li>Warning: First Name Must not be Empty</li>';
        firstNameInput.style.backgroundColor = '#C24641';
        hasErrors = true;
    }
    else
    {
        firstNameInput.style.backgroundColor = '';
    }

    if(lastNameInput.value == "")
    {
        console.log("Empty Last Name");
        html += '<li>Warning: Last Name Must not be Empty</li>';
        lastNameInput.style.backgroundColor = '#C24641';
        hasErrors = true;
    }
    else
    {
        lastNameInput.style.backgroundColor = '';
    }

    /* Check Password */

    if(passwordInput.value == "")
    {
        console.log("Empty Password");
        html += '<li>Warning: Password Must not be Empty</li>';
        passwordInput.style.backgroundColor = '#C24641';
        hasErrors = true;
    }
    else
    {
        passwordInput.style.backgroundColor = '';
    }

    /* Check Student ID */

    if(regexSID.test(studentIDInput.value))
    {
        studentIDInput.style.backgroundColor = '';
    }
    else
    {
        console.log('Invalid Student ID');
        html += '<li>Warning: Invalid Student ID</li>';
        studentIDInput.style.backgroundColor = '#C24641';
        hasErrors = true;
    }

    /* Check COurses*/

    if(coursesOption.value == 'Choose your course:')
    {
        html += '<li>Warning: Please choose a course.</li>'
        coursesOption.style.backgroundColor = '#C24641';
        hasErrors = true;
    }
    else
    {
        coursesOption.style.backgroundColor = '';
    }

    html += '</ol>';

    if(hasErrors == true)
    {
        warningBox.style.visibility = 'visible';
        event.preventDefault();
    }
    else
    {
        warningBox.style.visibility = 'hidden';
    }

    warningBox.innerHTML += `${html}`;

}

formBox.addEventListener("submit", validateForm);

// /* Check Form */

// submitButton.addEventListener("click", function(){

//     warningBox.innerHTML = '';
//     html = '';

//     html += '<ol>';

//     firstNameInput.value.trim();
//     lastNameInput.value.trim();
//     passwordInput.value.trim();

//     /* Check First and Last Names */ 

//     if(firstNameInput.value == "")
//     {
//         console.log("Empty First Name");
//         html += '<li>Warning: First Name Must not be Empty</li>';
//         firstNameInput.style.backgroundColor = '#C24641';
//         hasErrors = true;
//     }
//     else
//     {
//         firstNameInput.style.backgroundColor = '';
//     }

//     if(lastNameInput.value == "")
//     {
//         console.log("Empty Last Name");
//         html += '<li>Warning: Last Name Must not be Empty</li>';
//         lastNameInput.style.backgroundColor = '#C24641';
//         hasErrors = true;
//     }
//     else
//     {
//         lastNameInput.style.backgroundColor = '';
//     }

//     /* Check Password */

//     if(passwordInput.value == "")
//     {
//         console.log("Empty Password");
//         html += '<li>Warning: Last Name Must not be Empty</li>';
//         passwordInput.style.backgroundColor = '#C24641';
//         hasErrors = true;
//     }
//     else
//     {
//         passwordInput.style.backgroundColor = '';
//     }

//     /* Check Student ID */

//     if(regexSID.test(studentIDInput.value))
//     {
//         studentIDInput.style.backgroundColor = '';
//     }
//     else
//     {
//         console.log('Invalid Student ID');
//         html += '<li>Warning: Invalid Student ID</li>';
//         studentIDInput.style.backgroundColor = '#C24641';
//         hasErrors = true;
//     }

//     /* Check COurses*/

//     if(coursesOption.value == 'Choose your course:')
//     {
//         html += '<li>Warning: Please choose a course.</li>'
//         coursesOption.style.backgroundColor = '#C24641';
//         hasErrors = true;
//     }
//     else
//     {
//         coursesOption.style.backgroundColor = '';
//     }

//     html += '</ol>';

//     if(hasErrors == true)
//     {
//         warningBox.style.visibility = 'visible';
//     }
//     else
//     {
//         warningBox.style.visibility = 'hidden';
//     }

//     warningBox.innerHTML += `${html}`;

// });
