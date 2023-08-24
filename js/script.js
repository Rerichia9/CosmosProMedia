// Бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list-link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Слайдер
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 10000,
    },
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});

// Маска
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);

// Форма
"use strict"

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('form');
  const popup = document.getElementById('pop-up');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        // formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      } else {
        // form.classList.remove('_sending');
        popup.classList.add('open');
      }
    }
    // } else { alert('Заполните обязательные поля')}
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('._tel')) {
        if (telTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function telTest(input) {
    const re = !/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
    return re.test(input.value);
  }

  // закрытие поп-апа
  const close = document.getElementById('close_pop-up');
  close.onclick = function () {
    form.reset();
    form.classList.remove('_sending');
    popup.classList.remove('open');
  }
});

// Плавная прокрутка
$(document).ready(function () {
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {

        window.location.hash = hash;
      });
    }
  });
});
