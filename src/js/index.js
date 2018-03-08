$(() => {
  let showContent = () => {
    setTimeout(() => {
      $(".transform-wrapper").velocity({ translateY: "-100%" }, { duration: 1500, easing: [ .23, 1, .32, 1 ]});
      $("nav").css('opacity', '1').velocity({ translateY: "-10%"}, { duration: 1500, easing: [ .23, 1, .32, 1 ]});
    }, 300);
  };
  
  
  
  
      // Start vivus animation
      $('#donutStudioLogo').css('opacity', '1');
  
      new Vivus('donutStudioLogo', {
        type: 'async',
        duration: 55,
        start: 'autostart'
      }, showContent);
  
      
      // Display wether we're open or close
      const d = new Date();
      let weekday = d.getDay();
      let hours = d.getHours();
  
      // Between 10.00 - 21.00 From Monday to Friday
      if(hours >= 10 && hours < 22 && weekday > 0 && weekday < 6){
        $('p#date').text("We're open now");
      // Between 11.00 - 21.00 Saturday
      } else if(hours >= 11 && hours < 22 && weekday == 6){
        $('p#date').text("We're open now");
      // Between 11.00 - 19.00 Sunday
      } else if(hours >= 11 && hours < 20 && weekday == 0){
        $('p#date').text("We're open now");
      } else {
        $('p#date').text("We're closed now").addClass('disabled');
      }
      
  
      // Show shadow of header when scroll
      $(window).scroll(() => {
        const scroll = $(window).scrollTop();
        scroll > 0 ? $('nav').addClass('shadow') : $('nav').removeClass('shadow');
      });


      // Navigation Scroll
      $('.nav-link').click(function (e) {
        const id = $(this).attr('href');
        const offset = 70;
        const target = $(id).offset().top - offset;
        $('html, body').animate({
          scrollTop: target
        }, 500);
        e.preventDefault();
      });

      // Close nav when link is clicked
      $(".navbar-nav li a").click(function() {
        if (!$(this).parent().hasClass('dropdown'))
          $(".navbar-collapse").collapse('hide');
      });
  

      
});


