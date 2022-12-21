/*
class   : comp 2132 - javascript
period  : thursday
student : arno princeston pan
date    : 11/24/2021
ver     : 3
notes   : assignment 07 - animations
 */


const bicycleDisplay = document.getElementById("bicycleDisplay");
// javascript doesn't need "#" to grab id
// jquery needs the "#" to grab the id, also for classes you'll need "."

// initialize image
var currentImageNumber = 1;
var currentImageNumberString = currentImageNumber.toString(); // don't really have to do this, but do it just in case
var imageSource; // use this variable to contain the source of the images

const imageType = '.jpg';
const lastImageNumber = 34;

/* IMPORTANT DON'T LOSE THIS */
var bicycleAnimation; // for requestionAnimationFrame()

// load image

loadImage(); // this is to make sure the original image is not the one inside the HTML

// this function loads the image by passing imageSource to bicycleDisplay.src
function loadImage(){
    currentImageNumberString = currentImageNumber.toString(); // convert the number to String
    imageSource = `images/bike-${currentImageNumberString}${imageType}`; // updating the new imageSource
    bicycleDisplay.src = `${imageSource}`; // passing the imageSource to bicycleDisplay.src
}

// update the image
function updateImageSource(){
    // use the setTimeout to slow down the default 60 FPS
    setTimeout(function(){
        if(rotateNow == true){ // if the rotate request has started we update currentImageNumber
            if(currentImageNumber < lastImageNumber){
                currentImageNumber++; // increment if the image # is less than the last image #
            }else{
                currentImageNumber = 1; // reset it
            }
            loadImage(); // update the image after the increment OR reset
            bicycleAnimation = requestAnimationFrame(updateImageSource); // call itself
        }else{
            cancelAnimationFrame(bicycleAnimation);
            return;
        }
    }, 100); // assignment says to get it to 100 ms
}


// initialize buttons
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

var spinningTime = 100; // set speed of interval

var rotateNow; // check if user has started or stopped animation
var animationStarted; // use this to track animation process, use this to stop a speed increment
var buttonPressed = false; // this checks if start/stop has been pressed, used for pop Up

// see if user clicked the buttons
startButton.addEventListener("click", function(){
    // make sure the stopButton doesn't go underneath
    startButton.style.zIndex = 2;
    stopButton.style.zIndex = 3;

    // check if the animation has started
    if(!animationStarted){
        animationStarted = true; // after it goes through here yes it has started

        bicycleAnimation = requestAnimationFrame(updateImageSource); // start the animation
    }

    rotateNow = true; // it is moving
    buttonPressed = true; // prevents pop up

    console.log("start detected");
});

// has the user paused or stopped the task?
stopButton.addEventListener("click", function(){
    // make sure the startButton doesn't go underneath
    stopButton.style.zIndex = 3;
    stopButton.style.zIndex = 2;

    rotateNow = false; // it is not moving
    buttonPressed = true; // prevents pop up
    animationStarted = false; // makes it okay to start a new requestionAnimation
    cancelAnimationFrame(bicycleAnimation); // cancels the current animation

    console.log("stop detected");
})

// initialize pop Up materials
const closeButton = document.getElementById('closeButton'); // get the closeButton
const popUp = document.getElementById('popUp'); // javascript element of popUp
const $popUp = $(`#popUp`); // jQuery element of popUp
const delayTime = 3000; // required delay time
const fadeTime = 2000; // required delay time 1 or so seconds

popUp.style.opacity = 0; // hide this in the beginning
popUp.style.zIndex = -1; // move the pop Up to the back initially

// delay the pop Up by delayTime = 3000ms
setTimeout(showPopUp, delayTime);

function showPopUp(){
    popUp.style.zIndex = 1; // move this layer
    if(buttonPressed == true){ // this means start/stop has been pressed
        popUp.style.opacity = 0; // make it not show
        popUp.style.cursor = "default"; // reset the cursor to default
    }else{
        $popUp.fadeTo(fadeTime, 1); // use jQuery to fade (speed, opacity)
        popUp.style.cursor = "help"; // change the cursor to help
    }
}

// listens to the close button of the pop up
closeButton.addEventListener('click', function(){
    popUp.style.opacity = 0; // make it not show
    popUp.style.zIndex = -1; // move the popup to the back
});