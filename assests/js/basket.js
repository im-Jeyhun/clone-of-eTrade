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


$('#user-btns').click(function (e) {
    e.preventDefault();

    $('.login-side').toggleClass('login-side-open')
})

function GetProduct() {
    let products = JSON.parse(localStorage.getItem('products'));

    let item = ''

    products.forEach(pr => {
        let count = 1;

        let currentAmount = pr.Price;
        let chanedAmount = '';
        let total;
        for (let i = 1; i < currentAmount.length; i++) {
            chanedAmount += currentAmount[i]
        }


        item += `
        <tr id="${pr.Id}">
            <th scope="row"><a href="" class="delete-product"><i class="fa-solid fa-x"></i></a></th>
            <td id="td-img"> <img src=${pr.Image} alt=""></td>
            <td>${pr.Name}</td>
            <td>${pr.Price}</td>
            <td>  <div class="product-count">
            <button type="button" class="button-count encread" >-</button>
            <input class="number-product" value="${pr.Count}">
            <button class="button-count decread">+</button>
             </div></td>
            <td class="total">${pr.Price}</td>
            </tr>
            `
        count++;
    });
    // <td><i class="fa-solid fa-trash-can remove"></i></td>

    document.getElementById('table-body').innerHTML = item
}
GetProduct();



let decreadbtns = document.getElementsByClassName('decread');

for (let decreadbtn of decreadbtns) {

    decreadbtn.onclick = function (e) {

        let producCounter = this.previousElementSibling;

        let a = parseInt(producCounter.value);
        a++;
        producCounter.value = a;

        let products = JSON.parse(localStorage.getItem('products'));

        let productId = this.parentElement.parentElement.parentElement.id;
        let productSumma = this.parentElement.parentElement.nextElementSibling;


        console.log(productId);

        products.forEach(product => {
            if (product.Id === productId) {
                product.Count = a;
            }
            let productprice = product.Price;


            let changedprice = '';

            for (let i = 1; i < productprice.length; i++) {

                changedprice += productprice[i];
            }

            let summa = parseInt(changedprice) * a;

            productSumma.innerHTML = `$ ${summa}`;
        })

        localStorage.setItem('products', JSON.stringify(products));

        Summary()
    }
}

let encreadbtns = document.getElementsByClassName('encread');

console.log(encreadbtns);

for (let encreadbtn of encreadbtns) {
    encreadbtn.onclick = function () {

        let producCounter = this.nextElementSibling;



        let b = parseInt(producCounter.value);


        if (b < 2) {

            b = 1;
        } else {
            b--;
        }
        producCounter.value = b;

        let summa;


        let products = JSON.parse(localStorage.getItem('products'));

        let productId = this.parentElement.parentElement.parentElement.id;

        let productSumma = this.parentElement.parentElement.nextElementSibling;



        products.forEach(product => {
            if (product.Id === productId) {
                product.Count = b;
            }

            let productprice = product.Price;


            let changedprice = '';

            for (let i = 1; i < productprice.length; i++) {

                changedprice += productprice[i];
            }

            summa = parseInt(changedprice) * b;

            productSumma.innerHTML = `$ ${summa}`;

        })

        localStorage.setItem('products', JSON.stringify(products));
        Summary()
    }
}

let deletebtns = document.querySelectorAll('.delete-product');

console.log(deletebtns);

deletebtns.forEach(deletebtn => {
    
    
    deletebtn.onclick = function (e) {
        let products = JSON.parse(localStorage.getItem('products'));
        let newproducts = [];
        e.preventDefault();
        let deletedProduct = this.parentElement.parentElement;
        console.log(deletedProduct.id);

        for (let i = 0; i < products.length; i++) {

            if (deletedProduct.id != products[i].Id) {

                newproducts.push(products[i]);
                

            } else {
                continue;
            }
        }


        Summary();
        $(deletedProduct).hide();

        localStorage.setItem('products', JSON.stringify(newproducts))
        CountProduct();
    }
})

let inputs = document.querySelectorAll(".number-product");

for (let input of inputs) {
    input.onchange = function (e) {

        let b = parseInt(this.value);

        let summa;

        let products = JSON.parse(localStorage.getItem('products'));

        let productId = this.parentElement.parentElement.parentElement.id;

        let productSumma = this.parentElement.parentElement.nextElementSibling;



        products.forEach(product => {
            if (product.Id === productId) {
                product.Count = b;
            }

            let productprice = product.Price;


            let changedprice = '';

            for (let i = 1; i < productprice.length; i++) {

                changedprice += productprice[i];
            }

            summa = parseInt(changedprice) * b;

            productSumma.innerHTML = `$ ${summa}`;

        })

        localStorage.setItem('products', JSON.stringify(products));
        Summary();
    }

}



function CountProduct() {

    let products = JSON.parse(localStorage.getItem('products'))
    document.getElementById('product-counter').innerHTML = products.length
}

CountProduct();


function AutoSum() {
    let producCounter = document.querySelectorAll('.number-product');


    for (let product of producCounter) {

        let productPrice = product.parentElement.parentElement.previousElementSibling.innerHTML;
        let productTotal = product.parentElement.parentElement.nextElementSibling
        console.log(productTotal);
        let newprice = "";
        for (let i = 1; i < productPrice.length; i++) {
            newprice += productPrice[i];
        }

        let summa;

        summa = newprice * product.value;
        productTotal.innerHTML=`$ ${summa}`

    }

    Summary()


}
AutoSum();

$("#remove-all").click(function(e){
    e.preventDefault();

    let products = JSON.parse(localStorage.getItem('products'));

    let newarr = [];
    products = newarrw;

    localStorage.setItem("products",JSON.stringify(newarr))


})

function Summary() {
    let sumofproduct = document.getElementById("total-price");
    let producttotalprice = document.querySelectorAll(".total");
    let tax = document.getElementById('tax').innerHTML;
    let taxarea = document.getElementById('total-w-tax');
    let newtax = "";
    for(let i = tax.length-2; i>-1;i--){
        newtax+=tax[i];
    }
    
    let count = 0;

    
    
    producttotalprice.forEach(prprice => {
        let price = prprice.innerText;
        let newprice = "";
        
        for(let i = 2 ; i<price.length;i++){
            
            newprice+=price[i];
        }
        count+=+newprice;
        sumofproduct.innerHTML=`$ ${count}`;
        
    })
    taxarea.innerHTML = "$" + (parseInt(newtax) + count);
    console.log(producttotalprice);
    console.log(sumofproduct);
    console.log(count);
}
Summary();


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