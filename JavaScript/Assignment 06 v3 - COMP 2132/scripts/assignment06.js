/*
class   : comp 2132 - javascript
period  : thursday
student : arno princeston pan
date    : 11/11/2021
ver     : 1
notes   : assignment 06 - jQuery
 */


var readyToSubmit = false;


const redNoModel = `images/t-shirt-red-no-model.jpg`;
const redFront = `images/t-shirt-red-front.jpg`;
const redBack = `images/t-shirt-red-back.jpg`

const greyNoModel = 'images/t-shirt-grey-no-model.jpg';
const greyFront = 'images/t-shirt-grey-front.jpg';
const greyBack = 'images/t-shirt-grey-back.jpg';

const blackNoModel = 'images/t-shirt-black-no-model.jpg';
const blackFront = 'images/t-shirt-black-front.jpg';
const blackBack = 'images/t-shirt-black-back.jpg';


// $('#changingColor').text('Black'); //default color black

const $displayImage = $('#displayImage');
const $thumbnail = $('#smallImageContainer img'); // goes to the <a></a> after #id
const $submitButton = $('#submitButton');

$submitButton.text('Choose a Size');
$submitButton.prop('disabled', true)

// $thumbnail.click( switchImage );
$thumbnail.on('click mouseover', switchImage); 
// you can do a normal single "click" listener by $thumbnail.click(functionName);

function switchImage(event){
    // prevent the Default action that goes to the image link
    event.preventDefault();

    // get the <a></a> (link's) source href that just got clicked on
    // get the <a></a> (link's) source alt that just got clicked on

    // the logic here is...
    // you are taking the "href" from the <a></a> links you are clicking on
    // then applying them to the "src" of the large Image <img />

    const $src = $(this).attr('src'); // collecting the link the image, calling it the src
    const $alt = $(this).attr('alt'); // collecting the alt text of the image in this case there's nothing I didn't define an alt for the link

    $displayImage.attr('src', $src); // put the link of the images, into the source of the large image
    $displayImage.attr('alt', $alt); // put the alt of the images, into the alt of the large image

    // another way to do this is...
    /*
    $displayImage.attr({
        'src' : $src,
        'alt' : $alt
    });
    */
}


$('.colorSelection').click(function(){
    var value = $(this).val();
    // alert('your result is ' + value);
    console.log(value);
    $('#changingColor').text(value); // changes text info

    // console.log($thumbnail.prop('href'));

    if(value.toLowerCase() == 'red'){
        $displayImage.attr('src', redNoModel);

        $thumbnail.attr('src', redNoModel);
        $thumbnail.next().attr('src', redFront);
        $thumbnail.next().next().attr('src', redBack);

    }
    else if(value.toLowerCase() == 'black'){
        $displayImage.attr('src', blackNoModel);

        $thumbnail.attr('src', blackNoModel);
        $thumbnail.next().attr('src', blackFront);
        $thumbnail.next().next().attr('src', blackBack);
    }
    else if(value.toLowerCase() == 'grey'){
        $displayImage.attr('src', greyNoModel);

        $thumbnail.attr('src', greyNoModel);
        $thumbnail.next().attr('src', greyFront);
        $thumbnail.next().next().attr('src', greyBack);

    }
    else{
        console.log('You shouldn\'t be here.');
    }
    
});

$('.sizeSelection').click(function(){
    var value = $(this).val();
    console.log(value);
    $('#changingSize').text(value);
    readyToSubmit = true;
    $submitButton.text('Add to Cart');
    $submitButton.prop('disabled', false)
});

$submitButton.click(function(event){

    if(readyToSubmit == false){
        event.preventDefault();
    }
    else{
    }

});

// const colorSelection = $('.colorSelection');
// colorSelection.prop('checked', 'unchecked');

var price = 30;
var quantity = 1;

$priceHere = $('#priceHere');
$priceHere.text('$' + price);
$quantityHere = $('#quantityHere');
$quantityHere.text('#' + quantity);

$quantityButton = $('.quantityButtons');

$quantityButton.click(function(event){
    if($(this).text() == '-'){
        price -= 30;
        if(price <= 30){
            price = 30;
        }
        if(quantity > 1){
            quantity--;
        }
    }else if($(this).text() == '+'){
        price += 30;
        if(quantity >= 1){
            quantity++;
        }
    }
    $priceHere.text('$' + price);
    $quantityHere.text('#' + quantity);
});