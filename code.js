$(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open')
            })
       $('.call').on('click', () => {
     $('.phone').toggleClass('show')
    $('.call').toggleClass('button-active')
  })  
