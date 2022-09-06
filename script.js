


/* Бургер меню */

let burger = document.querySelector('.menu_burger__open')
let menuBurger = document.querySelector('.menu_burger')
let btmClose = document.querySelector('.menu_burger__close')

burger.addEventListener('click', function () {
  menuBurger.classList.add('menu_burger__open')
  burger.classList.add('buttom_open')
  btmClose.classList.add('buttom_close')
});

btmClose.addEventListener('click', function () {
  menuBurger.classList.remove('menu_burger__open')
  burger.classList.remove('buttom_open')
  btmClose.classList.remove('buttom_close')
});


/* Языки */

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: null,
  position: 'auto',
  editItems: true,
  placeholder: true,
  itemSelectText: '',
  shouldSort: false,

  addItemText: (value) => {
    return `Press Enter to add <b>"${value}"</b>`;
  },

  maxItemText: (maxItemCount) => {
    return `Only ${maxItemCount} values can be added`;
  },


});


/* Акардион в услугах */

$(".accordion").accordion({

  heightStyle: "content",
  active: true,
  animate: 500,
  collapsible: true,


});

/* Корзина включение  счётчика товаров */

// Объект "Корзина"
let cart = {
  items: [],
  total_sum: 0,
}


// Добавление объекта в корзину
function addItemToCart(item) {
  let is_exists_in_cart = false

  cart.items.forEach(function (cart_item, key) {
    if (cart_item.id == item.id) {
      is_exists_in_cart = true
      cart.items[key].quantity++;
    }
  })

  if (!is_exists_in_cart) {
    item.quantity = 1;
    cart.items.push(item)
  }

  countCartTotal()
}


// Удаление объекта (товара) из корзины
function removeItemFromCart(item_id) {
  cart.items.forEach(function (cart_item, key) {
    if (cart_item.id == item_id) {
      cart.items[key].quantity--;
    }
  })

  countCartTotal()
}

// Пересчет стоимости корзины и общего кол-ва товаров
function countCartTotal() {
  total_sum = 0
  total_quantity = 0

  cart.items.forEach(function (cart_item) {
    total_quantity += cart_item.quantity
    total_sum += cart_item.price * cart_item.quantity
  })

  cart.total_sum = total_sum

  document.querySelector('.basket_product_quantity__number').textContent = total_quantity
  document.querySelector('.basket_product_sum__number').textContent = total_sum    

  if(total_sum === 0) {
    basketBlock.classList.remove('basket_visible')
  }
 }


let basketBlock = document.querySelector('.basket_vis')

document.addEventListener('DOMContentLoaded', function () {


  /* Обработка клика на кнопку +Корзина */
  let basketUps = document.querySelectorAll('.servises_price_btn')
  basketUps.forEach(function (basketUp) {
    basketUp.addEventListener("click", function () {
      let item = this.closest('li.servises_card_item')
      let btmСounter = item.querySelector('.servises_price_number')

     //let basketCard = document.querySelector('.basket_cards')
      

      addItemToCart({
        id: item.dataset.id,
        text: item.dataset.text,
        price: item.dataset.price,
      })

    
      basketBlock.classList.add('basket_visible')
      basketUp.classList.add('servises_price__close')
      btmСounter.classList.add('servises_price_number__open')

      //let basketCards1 = document.getElementById('5')
    })

  })
 

   /*Открытие блоков в корзине  */

    let basketCard = document.getElementById('1')
    basketCard.addEventListener('click', (basketUp) => {
    let basketCards1 = document.getElementById('5')
    basketCards1.classList.add('basket_card_open')
  })

  let basketCard2 = document.getElementById('2')
  basketCard2.addEventListener('click', (basketUp) => {
  let basketCards2 = document.getElementById('6')
  basketCards2.classList.add('basket_card_open')
  })

  let basketCard3 = document.getElementById('3')
  basketCard3.addEventListener('click', (basketUp) => {
  let basketCards3 = document.getElementById('7')
  basketCards3.classList.add('basket_card_open')
  })

  let basketCard4 = document.getElementById('4')
  basketCard4.addEventListener('click', (basketUp) => {
  let basketCards4 = document.getElementById('8')
  basketCards4.classList.add('basket_card_open')
  })


  
  /* Обработка клика на кнопку + */
  let plusBtns = document.querySelectorAll('.servises_price_btn_plus')
  plusBtns.forEach(function (plusBtn) {
    plusBtn.addEventListener('click', function () {
      let item = this.closest('li.servises_card_item')

      addItemToCart({
        id: item.dataset.id,
        text: item.dataset.text,
        price: item.dataset.price,
      })

      let lot = item.querySelector('.servises_price_lot');
      lot.textContent = parseInt(lot.textContent) + 1;
    });
  });


  /* Обработка клика на кнопку - */
  let minusBtns = document.querySelectorAll('.servises_price_btn_minus')
  minusBtns.forEach(function (minusBtn) {
    minusBtn.addEventListener('click', function () {
      let item = this.closest('li.servises_card_item')
      let basketUp = item.querySelector('.servises_price_btn')
      let btmСounter = item.querySelector('.servises_price_number')

      let basketCards1 = document.getElementById('5')
      let basketCards2 = document.getElementById('6')
      let basketCards3 = document.getElementById('7')
      let basketCards4 = document.getElementById('8')

      removeItemFromCart(item.dataset.id)

      let lot = item.querySelector('.servises_price_lot');

      if (parseInt(lot.textContent) - 1 > 0) {
        lot.textContent = parseInt(lot.textContent) - 1;
      } else {
        basketUp.classList.remove('servises_price__close')
        btmСounter.classList.remove('servises_price_number__open')
        
        basketCards1.classList.remove('basket_card_open')
        basketCards2.classList.remove('basket_card_open')
        basketCards3.classList.remove('basket_card_open')
        basketCards4.classList.remove('basket_card_open')

      }
    });
  });

/*   Обработчик кнопок в корзине  */

    /* Обработка клика на кнопку + */
    let plusBtnsBasket = document.querySelectorAll('.basket_card_btn_plus')
    plusBtnsBasket.forEach(function (plusBtn) {
      plusBtn.addEventListener('click', function () {
        let item = this.closest('li.basket_cards')
        //let sumPrice = item.querySelector('.basket_product__sum')
  
          addItemToCart({
          id: item.dataset.id,
          text: item.dataset.text,
          price: item.dataset.price,
        })
  
        let lot = item.querySelector('.basket_card_lot');
        lot.textContent = parseInt(lot.textContent) + 1;
        
      });
    });
  
  
    /* Обработка клика на кнопку - */
    let minusBtnsBasket = document.querySelectorAll('.basket_card_btn_minus')
    minusBtnsBasket.forEach(function (minusBtn) {
      minusBtn.addEventListener('click', function () {
        let item = this.closest('li.basket_cards')

        let item1 = document.getElementById('1')
        let basketUp1 = item1.querySelector('.servises_price_btn')
        let btmСounter1 = item1.querySelector('.servises_price_number')

        let item2 = document.getElementById('2')
        let basketUp2 = item2.querySelector('.servises_price_btn')
        let btmСounter2 = item2.querySelector('.servises_price_number')

        let item3 = document.getElementById('3')
        let basketUp3 = item3.querySelector('.servises_price_btn')
        let btmСounter3 = item3.querySelector('.servises_price_number')

        let item4 = document.getElementById('4')
        let basketUp4 = item4.querySelector('.servises_price_btn')
        let btmСounter4 = item4.querySelector('.servises_price_number')

  
         removeItemFromCart(item1.dataset.id)
         removeItemFromCart(item2.dataset.id)
         removeItemFromCart(item3.dataset.id)
         removeItemFromCart(item4.dataset.id)
          
  
        let lot = item.querySelector('.basket_card_lot');
  
        if (parseInt(lot.textContent) - 1 > 0) {
          lot.textContent = parseInt(lot.textContent) - 1;
        } else {
    
          item.classList.remove('basket_card_open')

          basketUp1.classList.remove('servises_price__close')
          btmСounter1.classList.remove('servises_price_number__open')

          basketUp2.classList.remove('servises_price__close')
          btmСounter2.classList.remove('servises_price_number__open')

          basketUp3.classList.remove('servises_price__close')
          btmСounter3.classList.remove('servises_price_number__open')

          basketUp4.classList.remove('servises_price__close')
          btmСounter4.classList.remove('servises_price_number__open')
  
        }
      });
    });
  
  

});







/* *************************************************************************** */






/* Кнопки для карточек корзины на главной */


let basketBtn = document.querySelector('.basket_btn')
let basketMenu = document.querySelector('.basket')

basketBtn.addEventListener('click', function () {
  basketMenu.classList.toggle('basket_open')
  basketBtn.classList.toggle('basket_btn_svg__open')

});

