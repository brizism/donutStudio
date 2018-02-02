let showContent = () => {
  setTimeout(() => {
    $(".transform-wrapper").velocity({ translateY: "-100%" }, { duration: 1500, easing: [ .23, 1, .32, 1 ]});
    $("nav").css('opacity', '1').velocity({ translateY: "-10%"}, { duration: 1500, easing: [ .23, 1, .32, 1 ]});
  }, 300);
};

let docReady = () => {

  // Start animation
  $('#donutStudioLogo').css('opacity', '1');

  new Vivus('donutStudioLogo', {
    type: 'async',
    duration: 55,
    start: 'autostart'
  }, showContent);


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
    




};

$(window).scroll(() => {
  const scroll = $(window).scrollTop();
  scroll > 0 ? $('nav').addClass('shadow') : $('nav').removeClass('shadow');
});

docReady();