$('.slider_1').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    autoplay:true,
    slidesToShow: 7,
    autoplaySpeed:0,
    slidesToScroll: 1,
    varialbleWidth:true,
    cssEase:'linear',
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1062,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 328,
            settings: {
                slidesToShow: 2,
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
    prevArrow:".left_arrow",
    nextArrow:".right_arrow",
    autoplay:false,
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
            breakpoint:964,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
            }
        },
        {
            breakpoint:564,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
});
$('.slider_3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow:".left_arrow2",
    nextArrow:".right_arrow2",
    autoplay:false,
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
const accordion = document.querySelectorAll(".accordion-item")
accordion.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
        var isactive = document.querySelector(".accordion");
        accordion.forEach(e => {
            e.classList.remove("active")
        })
        if (!isactive) {
            e.classList.toggle("active")

        }

    })

})