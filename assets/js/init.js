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
    languageHU();
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
  var mapOptions = {
    center: new google.maps.LatLng(center),
    zoom: 16,
    mapTypeId: 'roadmap'
  }
  var markerOptions = {
    position: center,
    map: map
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({ position: center, map: map })


  //EZEK MIÉRT NEM MŰKÖDNEK?????
  //var marker = new google.maps.Marker(markerOptions)
  //var map = new google.maps.Map($('#map'), mapOptions);
}

/*LANGUAGE SELECTOR*/

function languageEN() {
  console.log("EN")
  $(".HU").addClass("noDisplay");
  $(".EN").removeClass("noDisplay");
}

function languageHU() {
  console.log("HU")
  $(".EN").addClass("noDisplay");
  $(".HU").removeClass("noDisplay");
}



/*SERVICES*/

function serviceLoader() {
  /*beruházók*/
  $(function () {
    $(".serviceMenuItem").click(function (e) {
      var displayID = $(this).data('target');
      $('.serviceContainer').hide();
      $("#" + displayID + ".serviceContainer").css("display", "block");
    });
  });
}
