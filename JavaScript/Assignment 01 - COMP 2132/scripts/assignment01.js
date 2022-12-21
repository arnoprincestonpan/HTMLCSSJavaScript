/*
name       : arno princeston pan
student #  : a00823325
class      : comp 2132 (thurs.)
date       : 10/12/2021
asssignment: 01
*/

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const dp1   = document.getElementById('dp1');
const dp2   = document.getElementById('dp2');
const dp3   = document.getElementById('dp3');
const dp4   = document.getElementById('dp4');

const result    = document.getElementById('result');
const out1      = document.getElementById('p-01');
const out2      = document.getElementById('p-02');
const out3      = document.getElementById('p-03');
const out4      = document.getElementById('p-04');
const out5      = document.getElementById('p-05');
const out6      = document.getElementById('p-06');


/*
these data points represent different 
aspects of the show...
(do not change these values)
*/

const ticketCostDollarsCDN      = 30;
const minimumAgeToPurchase      = 24;
const taxRate                   = 0.10;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 

- use these values in your script below
- change these values when you test your script!
*/

var firstName;
var lastName;
var userName;
var age;
var cashOnHandDollarsCDN;
var quantityOfTickets;

/*
begin processing...
*/

btn5.addEventListener('click', function(){
    firstName               = prompt('What is your first name?', 'Enter name...');
    lastName                = prompt('What is your last name?', 'Enter name...');
    age                     = prompt('How old are you?', 'Enter age...');
    age                     = parseFloat(age);
    cashOnHandDollarsCDN    = prompt('How much cash do you have?', 'Enter cash...');
    cashOnHandDollarsCDN    = parseFloat(cashOnHandDollarsCDN);
    quantityOfTickets       = prompt('How many tickets do you want?', 'Enter quantity...');
    quantityOfTickets       = parseFloat(quantityOfTickets);

    userName                = firstName + ` ` + lastName;

    dp1.innerHTML           = `Username: ` + userName;
    dp2.innerHTML           = `Users' Age: ` + age;
    dp3.innerHTML           = `Users' Amount of Cash: ` + cashOnHandDollarsCDN;
    dp4.innerHTML           = `Quantity of Tickets: ` + quantityOfTickets;

    var ageRemaining;
    var ageInOneYear;
    var ticketsBeforeTax    = quantityOfTickets * ticketCostDollarsCDN;
    var ticketsAfterTax     = ticketsBeforeTax * (1 + taxRate); 
    ticketsAfterTax         = parseFloat(ticketsAfterTax.toFixed(2));

    result.innerHTML    = firstName + `, says: \" Let's buy some tickets for the Big Virtual Concert! \"`;

    if(age >= minimumAgeToPurchase)
    {

        out2.innerHTML  = `You are old enough. You are ` + age + ` year(s). Proceeding with ticket sales...`;
        out3.innerHTML  = `You want ` + quantityOfTickets + ` tickets at $` + ticketCostDollarsCDN + `\/ticket. Total before tax: $` + ticketsBeforeTax + `.`;
        out4.innerHTML  = `Total after tax: $` + ticketsAfterTax;
        out5.innerHTML  = `You have: $` + cashOnHandDollarsCDN;

        if(cashOnHandDollarsCDN >= ticketsAfterTax)
        {
            out6.innerHTML  = `&#9996 Proceeding with purchase...`;

            out6.style.border       = "5px solid black";
            out6.style.borderRadius = "5px";
            out6.style.background   = "#29AB87";
            out6.style.margin       = "20px";
            out6.style.padding      = "20px";
            out6.style.boxShadow    = "0 1px 0 red";
        }
        else
        {
            out6.innerHTML  = `&#9888 Sorry, ` + userName + ` you do not have enough.`;

            out6.style.border       = "5px solid black";
            out6.style.borderRadius = "5px";
            out6.style.background   = "#FB5AAA";
            out6.style.margin       = "20px";
            out6.style.padding      = "20px";
            out6.style.boxShadow    = "0 1px 0 red";
        }
    }
    else
    {
        ageRemaining    = minimumAgeToPurchase - age;

        out2.innerHTML = ` `;
        out3.innerHTML = ` `;
        out4.innerHTML = ` `;
        out5.innerHTML = ` `;

        out6.innerHTML  = `&#9785 You are not old enough. You are ` + age + ` year(s). The min age is ` + minimumAgeToPurchase + `. You need ` + ageRemaining + ` more years.`;
        
        out6.style.border       = "5px solid black";
        out6.style.borderRadius = "5px";
        out6.style.background   = "#FB5AAA";
        out6.style.margin       = "20px";
        out6.style.padding      = "20px";
        out6.style.boxShadow    = "0 1px 0 red";
    } 

    ageInOneYear        = age + 1;
    out1.innerHTML      = `You are going to be ` + ageInOneYear + ` in one year.`;


});
