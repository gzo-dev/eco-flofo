
$(document).ready(function () {
    $(".submit-search-pc").click(function () {
      if ($("#qr_search").val() != "")
        $('#searchformtab').submit(); return false;
    });
  });
    $(document).ready(function () {
      $(".search-icon").click(function () {
        $(".search-pc").stop().slideToggle("fast");
        return false;
      });
    });
//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// model


//btn

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm1').style.display = 'block';
    document.getElementById('myForm2').style.display = 'none';
  });

document.getElementById('showFormBtn1').addEventListener('click', function () {
    toggleForm('myForm1');
    hideForm('myForm2');
});

document.getElementById('showFormBtn2').addEventListener('click', function () {
    toggleForm('myForm2');
    hideForm('myForm1');
});

function toggleForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}

function hideForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = 'none';
}

//ádasd

