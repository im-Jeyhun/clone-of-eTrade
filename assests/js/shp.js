function AutoClose() {
    $(".f-dropmenu").hide();
    $(".s-dropmenu").hide();

}
AutoClose();

$(".f-dropdown").click(function () {
    $('.f-dropmenu').slideToggle('1000');
    $(".s-dropmenu").hide();

})
$(".s-dropdown").click(function () {
    $('.s-dropmenu').slideToggle('1000');
    $(".f-dropmenu").hide();

})  

$(".header-bottom-slider").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<span class ="next"><i class="fa-solid fa-arrow-right"></i></span>',
    prevArrow: '<span class ="prew"><i class="fa-solid fa-arrow-left"></i></span>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('#user-btns').click(function (e) {
    e.preventDefault();

    $('.login-side').toggleClass('login-side-open')
})

function CloseSubMenu() {
    let sortsubmenus = document.getElementsByClassName('sort-submenu');

    for (sortsubmenu of sortsubmenus) {

        $(sortsubmenu).hide();
    }

}

CloseSubMenu();

let sortbtns = document.getElementsByClassName("sort-texts");

for (let sortbtn of sortbtns) {

    let icon = sortbtn.children[1];

    sortbtn.addEventListener('click', function (e) {

        if(icon.className ==='fa-solid fa-plus'){

            icon.className="fa-solid fa-minus"
        }
        else{
            icon.className="fa-solid fa-plus"

        }
        let qonsu = this.nextElementSibling;
        $(qonsu).slideToggle();
    })
}


let sizebtns =  document.querySelectorAll('.sort-a');

console.log(sizebtns);

for(let sizebtn of sizebtns){


    sizebtn.addEventListener('click',function (e) {
        e.preventDefault();
        if(this.style.backgroundColor=='white'){

            this.style.backgroundColor = "#3577f0";
            this.style.color = 'white';
        }
        else{
            this.style.backgroundColor = "white";
            this.style.color = '#777777';


        }
    })
}


function CountProduct(){

    let products = JSON.parse(localStorage.getItem('products'))
    document.getElementById('product-counter').innerHTML = products.length
  }

CountProduct();


$("#nav-burger").click(function () {
    console.log("salam");
  
    document.querySelector('.slidermenu-phone').classList.add('open-slider-phone-menu')
    
  })
  
  $("#close-slide-phone").click(function(e){
    e.preventDefault();
    
    document.querySelector('.slidermenu-phone').classList.remove('open-slider-phone-menu')
  
  })
  
  $(".slp-menu-down").hide();
  
  $('.slp-menu-up').click(function(e){
    
    e.preventDefault();
    
    let closed = this.nextElementSibling;
  
   $(closed).slideToggle();
  
  })

  var btn = $('#button-upp');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});