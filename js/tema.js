$(document).ready(function(){
  
  $('btn-dark').click(function(e){
    e.preventDefault()

    $('body').removeClass('original')
    $('body').removeClass('light')
    $('body').addClass('dark')
    $('p').addClass('text-white')
    $('p').removeClass('text-dark')
    $('h3').addClass('text-white')
    $("h3").removeClass('text-dark')
    $("h4").addClass('text-white')
    $("h4").removeClass('text-dark')
  })


  $('btn-light').click(function(e){
    e.preventDefault()

    $('body').removeClass('original')
    $('body').removeClass('dark')
    $('body').addClass('light')
    $('p').addClass('text-white')
    $('p').removeClass('text-dark')
    $('h3').addClass('text-white')
    $("h3").removeClass('text-dark')
    $("h4").addClass('text-white')
    $("h4").removeClass('text-dark')
  })

  $('.btn-primary').click(function(e){
    e.preventDefault()

    $('body').removeClass('light')
    $('body').removeClass('dark')
    $('body').addClass('original')
    $('p').addClass('text-white')
    $('p').removeClass('text-dark')
    $('h3').addClass('text-white')
    $('h3').removeClass('text-dark')
    $('h4').addClass('text-white')
    $('h4').removeClass('text-dark')
  })
})