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
  
      // Donuts gallery modal 
      const items = Array.from(document.querySelectorAll('.item'));
      const donutsContent = document.getElementById('donuts-modal__content');
      const modal = document.getElementById('donuts-modal');
      console.log(items)
      items.map(item => {
        item.addEventListener('click', () => {
          console.log(item.innerText)
          console.log(item.children[0].outerHTML);
          modal.style.display = 'block';
          let output = `
            <div class="donuts-modal__wrapper">
              <span id="close">&times;</span>
              <div class="donuts-modal__img">${item.children[0].outerHTML}</div>
              <div class="donuts-modal__info">
                <h1>${item.innerText}</h1>
                <p></p>
              </div>
            </div>
          `
          donutsContent.innerHTML = output;

          closeModal();
        })
      });

      function closeModal(){
        document.getElementById('close').onclick = () => modal.style.display = 'none';
        window.onclick = e => e.target == modal ? modal.style.display = 'none' : modal;
      }
});



///////// Displays Google Map /////////
function initMap() {
  // Styles a map in night mode.
  const myLatLng = new google.maps.LatLng(40.853846, -73.889586);
  const map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 20,
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

  const icon = {
    url: '../img/donut-marker.svg',
    scaledSize: new google.maps.Size(50, 50),
  }
  const marker = new google.maps.Marker({
    position: myLatLng,
    icon
  });

  marker.setMap(map)
}