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
    pauseOnHover: true
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
});