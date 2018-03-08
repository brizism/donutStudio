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




function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.85398676514279, lng: -73.88977247004469},
    zoom: 18,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffeb3b"
          },
          {
            "saturation": 15
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
}