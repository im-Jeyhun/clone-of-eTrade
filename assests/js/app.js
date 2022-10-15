function AutoClose() {
    $(".f-dropmenu").hide();
    $(".s-dropmenu").hide();

}
AutoClose();
$(() => {


    $(".f-dropdown").click(function () {
        $('.f-dropmenu').slideToggle('1000');
        $(".s-dropmenu").hide();

    })
    $(".s-dropdown").click(function () {
        $('.s-dropmenu').slideToggle('1000');
        $(".f-dropmenu").hide();

    })
    $('#user-btns').click(function (e) {
        e.preventDefault();

        $('.login-side').toggleClass('login-side-open')
    })



})

$('.fs-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
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
  $('.bs-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
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
  $('.categories-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
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
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.mp-slider').slick({
    rows:2,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
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
          rows:7,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.feed-slider').slick({
    
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
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

  $('.wd-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
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


  let number = 1;

  let flasBoxes = document.querySelectorAll('.fs-box')

  flasBoxes.forEach(box => {
    box.setAttribute('id',`${number}`)
    number++;
    console.log(box);
    
  });

  let bestBoxes = document.querySelectorAll('.bs-box');

  bestBoxes.forEach(bsbox => {
    bsbox.setAttribute('id',`${number}`)
    number++;
    console.log(bsbox);
  })

  console.log(number);
  if(localStorage.getItem('products')===null){

    localStorage.setItem('products',JSON.stringify([]));
  }

  $('.fs-box .shop-area .add-cart').click(function(e){
    e.preventDefault();
    let productid = this.parentElement.parentElement.id;
    let productimage = this.parentElement.previousElementSibling.previousElementSibling.children[0].children[0].src;
    let productName = this.parentElement.previousElementSibling.children[0].innerHTML;
    let productPrice = this.parentElement.previousElementSibling.children[1].children[0].innerHTML;

    let products = JSON.parse(localStorage.getItem('products'))

    let existProduct = products.find(product => product.Id === productid);


    if(existProduct === undefined){
      products.push({
        Id:productid,
        Image:productimage,
        Name:productName,
        Price:productPrice,
        Count:1
  
  
      })
    }
    else{
      existProduct.Count +=1;
      document.getElementById('already-added').children[0].innerHTML=`${productName} adli mehsul artiq elave olunub. Mehsulun sayi: ${existProduct.Count}`
      
      document.getElementById('already-added').style.opacity='1';
      setTimeout(() => {
        document.getElementById('already-added').style.opacity='0';
          
        }, 2000);
    
        CountProduct();
    }

    document.getElementById('added-toaster').style.opacity='1';

    localStorage.setItem('products',JSON.stringify(products))

    setTimeout(() => {
    document.getElementById('added-toaster').style.opacity='0';
      
    }, 2000);

    CountProduct();
  
  })
  
  function CountProduct(){

    let products = JSON.parse(localStorage.getItem('products'))
    document.getElementById('product-counter').innerHTML = products.length
  }

CountProduct();



$('.main-slider').slick({
  dots: true,
  fade:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
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


$('.slick-dots li button').click(function(){

  AOS.init();
})

AOS.init();


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