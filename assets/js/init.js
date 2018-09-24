$(document).ready(function () {
  serviceLoader();
});


//setTimeout(function() { mainLoader(); }, 1000);

$(function () {

  setTimeout(function () {
    $("#subTitle").hide();
    $("#starterLogoContainer").addClass("topLeft");
    $("#starterLogo").addClass("rotate");
  }, 500);
  setTimeout(function () {
    $("#subTitle").hide();
    $("#starterLogoBackground").addClass("small");
  }, 500);

  setTimeout(function () {
    $("#starterLogoBackground").addClass("fade");
  }, 800);
  setTimeout(function () {
    $("#starterLogoBackground").hide();
    $("#starterLogoContainer").hide();

  }, 1100);
});


function atmeretezes() {

  if (window.pageYOffset > 10) {
    $('header').addClass("sticky");
    $('logo').addClass("stick");
  }
  else {
    $('header').removeClass("sticky");
    $('logo').removeClass("stick");
  };
};


function visszahozas() {
  $(document).ready(function () {
    $(document).mousemove(function (event) {
      var pos = event.clientY;
      if (pos < 92) {
        $('header').removeClass("sticky");
      };
    });
  });
};

window.addEventListener('scroll', atmeretezes);
window.addEventListener('mousemove', visszahozas);

/*MAP*/

function initMap() {
  var center = { lat: 47.441490, lng: 19.041790 }
  var scarystyle = [
    { "featureType": "all", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
    { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "gamma": 0.01 }, { "lightness": 20 }] },
    { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "saturation": -31 }, { "lightness": -33 }, { "weight": 2 }, { "gamma": 0.8 }] },
    { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": 30 }, { "saturation": 30 }] },
    { "featureType": "poi", "elementType": "geometry", "stylers": [{ "saturation": 20 }] },
    { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "lightness": 20 }, { "saturation": -20 }] },
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 10 }, { "saturation": -30 }] },
    { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "saturation": 25 }, { "lightness": 25 }] },
    { "featureType": "water", "elementType": "all", "stylers": [{ "lightness": -20 }] }
  ]
  var nightstyle = [
    { "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] },
    { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] },
    { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] },
    { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] },
    { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] },
    { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] },
    { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] },
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] },
    { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] },
    { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] },
    { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] },
    { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] },
    { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] },
    { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] },
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] },
    { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] },
    { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] },
    { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
  ]

  var clearstyle = [
    { "featureType": "administrative", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, 
    { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, 
    { "featureType": "landscape.man_made", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "landscape.natural", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, 
    { "featureType": "poi.attraction", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.business", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.business", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" },  { "color": "#8f8f8f" } ] }, 
    { "featureType": "poi.government", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.medical", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.park", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.place_of_worship", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.school", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, 
    { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, 
    { "featureType": "road.highway.controlled_access", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, 
    { "featureType": "road.local", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "transit.line", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "transit.station", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, 
    { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#b4d4e1" }, { "visibility": "on" } ] } 
  ]


  var bimxstyle = [
    { featureType: 'poi', stylers: [{ visibility: "off" }] },
    { featureType: 'road', stylers: [{ color: "#ffffff" }] },
    { featureType: 'road', elementType: "labels.text.fill", stylers: [{ color: "#c4c4c4" }] },
    { featureType: 'landscape', stylers: [{ color: "#efefef" }] }
  ]
  var mapOptions = {
    center: new google.maps.LatLng(center),
    zoom: 16,
    mapTypeId: 'roadmap',
    styles: clearstyle

  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: center,
    map: map,
    icon: '/images/bimxmarker.png',
  });

}


/*SERVICES*/

function serviceLoader() {
  $(".serviceMenuItem").click(function (e) {
    var displayID = $(this).data('target');
    $('.serviceContainer').hide();
    $("#" + displayID + ".serviceContainer").css("display", "block");
    $('.serviceMenuItem').css("opacity", "0.6");
    $(this).css("opacity", "1");
  });

  var locationHashChanged = function () {
    if (window.location.hash !== '') {
      var a = $('a[href="' + window.location.hash + '"]');
      if (a.length && a.data('target')) {
        a.click();
      }
    }
  };

  window.onhashchange = locationHashChanged;
  window.setTimeout(locationHashChanged, 1);
}

/*--------------------*/

function showMenu() {
  if($('#mainMenu').css('display') === 'flex')
{
    $('#mainMenu').css("display", "none");
}
else
{
  $('#mainMenu').css("display", "flex");
  $('#menuBackground').css("display", "block");
}
}

function hideMenu() {
  $('#mainMenu').css("display", "none");
  $('#menuBackground').css("display", "none");
}

/*export function hideOnClickOutside() {
  const outsideClickListener = (event) => {
    if (!$(event.target).closest("#mainMenu").length) {
      if ($("#mainMenu").is(':visible')) {
        $("#mainMenu").hide()
        removeClickListener()
      }
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}*/