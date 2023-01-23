$('.multiple-items').slick({
    draggable: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    responsive: [
        {
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});


let btn = document.querySelector('.m-block');
let rowNone = document.querySelector('.row_none');

btn.addEventListener('click', () => {
    rowNone.style.display = 'flex';
        btn.style.display = 'none';
});

