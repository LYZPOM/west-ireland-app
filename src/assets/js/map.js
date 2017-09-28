window.onload = function(){
     var mapSection = document.getElementById('map');
     if(mapSection!=null){
       initMap();
     }
     initNavBar();
};

function initNavBar(){
  $(".mdl-layout__drawer-button" ).click(function() {
    $(".mdl-layout__drawer-button").attr("aria-expanded",true);
    $(".mdl-layout__drawer").attr("aria-hidden",false);
    $(".mdl-layout__drawer").addClass("is-visible");
    $(".mdl-layout__obfuscator").addClass("is-visible");
  });

  $(document).mouseup(function(e)
  {
      var container = $(".mdl-layout__drawer");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
        $(".mdl-layout__drawer-button").attr("aria-expanded",false);
        $(".mdl-layout__drawer").attr("aria-hidden",true);
        $(".mdl-layout__drawer").removeClass("is-visible");
        $(".mdl-layout__obfuscator").removeClass("is-visible");
      }
  });
}

function initMap() {
        var myLatlng = {lat: 53.72387639999999, lng: -9.00173559999996};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var locations = [
          ['Beach louisburg, Old Head, Ireland', 53.7758737, -9.769869900000003],
          ['Carrownisky, Co. Mayo, Ireland', 54.286937, -9.368621]
        ];

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }

      }
