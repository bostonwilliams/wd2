  $(document).ready(function() {
      $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
      });
    
    $('.phone').toggle();
    
        $('.call').on('click', () => {
        $('.phone').slideToggle('fast')              
              });
    });
