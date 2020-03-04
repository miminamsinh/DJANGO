

// On Click
// $('h1').click(function(){
//   console.log("There was a click!");
// })
//
// $('li').click(function(){
//     console.log("any li was clicked")
// })

// //Using this keyword
// $('h1').click(function(){
//     $(this).text('I was changed')
// })

//KEYPRESS
$('input').eq(0).keypress(function(){
    $('h3').toggleClass('turnBlue')
})

$('input').eq(0).keypress(function(event){
    if (event.which === 13){
        $('h3').toggleClass('turnBlue')
    }
})

//Double Click
$('h1').on('dblclick', function(){
    $(this).toggleClass('turnBlue')
})

//Mouse Enter
$('h1').on("mouseenter", function(){
    $(this).toggleClass('turnBlue')
})

//Animation Example
$('input').eq(1).on('click', function(){
    $('.container').fadeOut(3000)
})