$(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
      });
      $('.toggleMain').click(function() {
    $(this).addClass('shadow')
    $(this).removeClass('shadow')
      });       
    });
