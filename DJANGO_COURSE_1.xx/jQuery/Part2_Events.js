// jQuery makes it easy to interact with the DOM!

// List of all possible events!
// https://api.jquery.com/category/events/

//////////////
// CLICKS ///
////////////

// On Click
$('h1').click(function(){
  console.log("There was a click!");
})

// Click on multiple elements
$('li').click(function() {
  console.log("Click on any li !");
})

// Using This with jQuery
$('h3').click(function() {
  $(this).text("I was changed!");
})

/////////////////
// KEYPRESS ////
///////////////
// Using This with jQuery

//grab all input tags, index to get the first one and then toggle the header when a key is pressed
$('input').eq(0).keypress(function() {
  $('h3').toggleClass("turnRed");
})

// We can use this event object, that has a ton of information!
//Returns an event object with identifiers
$('input').eq(0).keypress(function(event) {
  console.log(event);
})

// Each Keyboard Key has a Keycode, for example Enter is 13, "which" is the identifier for the keycode
$('input').eq(0).keypress(function(event) {
  if(event.which === 13){
    $('h3').toggleClass("turnRed");
  }
})

////////////
// ON() ///
//////////

// on() basically works like addEventListener()
$('h1').on("dblclick",function() {
  $('h1').addClass('turnBlue');
})

$('li').on('mouseenter',function() {
  $(this).toggleClass('turnRed');
})

/////////////////////////////
// EFFECTS and ANIMATIONS //
///////////////////////////

// http://api.jquery.com/category/effects/

$('input').eq(1).val("FADE OUT EVERYTHING");

$('input').eq(1).on("click",function(){
  $(".container").fadeOut(3000) ;
})


$('input').eq(1).on("click",function(){
  $(".container").slideUp(1000) ;
})
