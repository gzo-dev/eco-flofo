// Get Current Year
// function getCurrentYear() {
//     var d = new Date();
//     var year = d.getFullYear();
//     document.querySelector("#displayDateYear").innerText = year;
// }
// getCurrentYear()

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

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// model
$(document).ready(function () {
    $(".overlay-text").mouseenter(function () {
        // Hiển thị nội dung modal khi di chuột vào chữ
        $("#myModal img");
    });
});

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

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