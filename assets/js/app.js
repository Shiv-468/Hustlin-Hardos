$('.slider_1').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    slidesToShow: 7,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    varialbleWidth: true,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1062,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                slidesToScroll: 1,
                varialbleWidth: true,
                cssEase: 'linear',
                pauseOnHover: true,
            }

        },
        {
            breakpoint: 328,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slider_2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: ".left_arrow",
    nextArrow: ".right_arrow",
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1062,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 964,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 564,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
            }
        }
    ]
});
$('.slider_3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: ".left_arrow2",
    nextArrow: ".right_arrow2",
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
const counting = document.getElementById("counting");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
plus.addEventListener("click", () => {
    counting.innerHTML = +counting.innerHTML + 1;
});
minus.addEventListener("click", () => {
    if (counting.innerHTML > 1) {
        counting.innerHTML = counting.innerHTML - 1;
    }
});

var countDownDate = new Date("Apr 27, 2024 18:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", mobileMenu);
const Navlink = document.querySelectorAll(".nav-link");
Navlink.forEach(j => j.addEventListener("click", () => {
    menuicon.classList.toggle("active");
    document.body.classList.remove("overflow-hidden");
    menulist.classList.toggle("active");
}))
function mobileMenu() {
    menuicon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    menulist.classList.toggle("active");
}