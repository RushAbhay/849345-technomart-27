// проверяем на какой мы странице, в каталоге это все не нужно
if (!document.querySelector(".inner-page")) {

  /* popup-authorization */
  var authLink = document.querySelector(".login-link");
  var authPopup = document.querySelector(".modal-authorization");
  var authClose = authPopup.querySelector(".button-close");
  var authForm = authPopup.querySelector("form");
  var authLogin = authPopup.querySelector("[name=username]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  authLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    authPopup.classList.add("modal-show");

    if (storage) {
      authLogin.value = storage;
    } else {
      authLogin.focus();
    }
  });

  authClose.addEventListener("click", function(evt){
    evt.preventDefault();
    authPopup.classList.remove("modal-show");
    authPopup.classList.remove("modal-error");
  });

  authForm.addEventListener("submit", function(evt){
    if (!authLogin.value) {
      evt.preventDefault();
      authPopup.classList.remove("modal-error");
      authPopup.offsetWidth = authPopup.offsetWidth;
      authPopup.classList.add("modal-error");
    } else if (isStorageSupport) {
      localStorage.setItem("login", authLogin.value);
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (authPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        authPopup.classList.remove("modal-show");
        authPopup.classList.remove("modal-error");
      }
    }
  });

  /* popup-map */

  var mapLink = document.querySelector(".about-company-map");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".button-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });

  /* popup-feedback */

  var fbLink = document.querySelector(".about-company-button");
  var fbPopup = document.querySelector(".modal-feedback");
  var fbClose = fbPopup.querySelector(".button-close");
  var fbForm = fbPopup.querySelector("form");
  var fbName = fbForm.querySelector("[name=your_name]");
  var fbEmail = fbForm.querySelector("[name=your_email]");
  var fbTextarea = fbForm.querySelector("[name=comment-field]");

  try {
    storageName = localStorage.getItem("Name");
  } catch (err) {
    isStorageSupport = false;
  }
  try {
    storageEmail = localStorage.getItem("Email");
  } catch (err) {
    isStorageSupport = false;
  }

  fbLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    fbPopup.classList.add("modal-show");

    if (storageName) {
      fbName.value = storageName;
      if (storageEmail) {
        fbEmail.value =storageEmail;
        fbTextarea.focus();
      } else {
        fbEmail.focus();
      }
    } else {
      fbName.focus();
    }

  });

  fbClose.addEventListener("click", function(evt){
    evt.preventDefault();
    fbPopup.classList.remove("modal-show");
    fbPopup.classList.remove("modal-error");
  });

  fbForm.addEventListener("submit", function(evt){
    if (!fbName.value || !fbEmail.value) {
      evt.preventDefault();
      fbPopup.classList.remove("modal-error");
      fbPopup.offsetWidth = fbPopup.offsetWidth;
      fbPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("Name", fbName.value);
        localStorage.setItem("Email", fbEmail.value);
      }
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (fbPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        fbPopup.classList.remove("modal-show");
        fbPopup.classList.remove("modal-error");
      }
    }
  });

  /* main-slider */

  var slider = document.querySelector(".main-slider");
  var controlLeft = slider.querySelector(".main-slider-control-l");
  var controlRight = slider.querySelector(".main-slider-control-r");
  var slideItem = slider.querySelectorAll(".main-slider-item");
  var radio1 = slider.querySelector(".slider-radio-1");
  var radio2 = slider.querySelector(".slider-radio-2");

  var cnt = slideItem.length-1;

  controlLeft.addEventListener("click", function(evt){
    evt.preventDefault();


    if (cnt > 0) {
      cnt = cnt - 1;
      for (var i = 0; i < slideItem.length; i++){
        slideItem[i].classList.remove("slide-show");
      }
      slideItem[cnt].classList.add("slide-show");
    } else {
      slideItem[cnt].classList.remove("slide-error");
      slideItem[cnt].offsetWidth = slideItem[cnt].offsetWidth;
      slideItem[cnt].classList.add("slide-error");
    }

    radio2.classList.remove("active");
    radio1.classList.add("active");
  });

  controlRight.addEventListener("click", function(evt){
    evt.preventDefault();

    if (cnt < slideItem.length-1) {
      cnt = cnt + 1;
      for (var i = 0; i < slideItem.length; i++){
        slideItem[i].classList.remove("slide-show");
      }
      slideItem[cnt].classList.add("slide-show");
    } else {
      slideItem[cnt].classList.remove("slide-error");
      slideItem[cnt].offsetWidth = slideItem[cnt].offsetWidth;
      slideItem[cnt].classList.add("slide-error");
    }

    radio1.classList.remove("active");
    radio2.classList.add("active");
  });

  radio1.addEventListener("click", function(evt){
    evt.preventDefault();
    slideItem[1].classList.remove("slide-show");
    slideItem[0].classList.add("slide-show");
    radio2.classList.remove("active");
    radio1.classList.add("active");
  });

  radio2.addEventListener("click", function(evt){
    evt.preventDefault();
    slideItem[0].classList.remove("slide-show");
    slideItem[1].classList.add("slide-show");
    radio1.classList.remove("active");
    radio2.classList.add("active");
  });

  // Скрипт листания слайдов влево и вправо учитывает любое количество слайдов.
  // ПО хорошему, насколько я понял, radio надо рисовать столько, сколько у нас слайдов с помощью js, но согласно ТЗ, в верстке должны быть отрисованы кнопки до написания скриптов.

  /* services-slider */

  var servicesSlider = document.querySelector(".services-slider");
  var servicesControl = servicesSlider.querySelectorAll(".services-control-item");
  var buttonDelivery = servicesSlider.querySelector(".button-delivery");
  var buttonGuarantee = servicesSlider.querySelector(".button-guarantee");
  var buttonCredit = servicesSlider.querySelector(".button-credit");
  var servicesSlides = servicesSlider.querySelectorAll(".services-slides li");

  buttonDelivery.addEventListener("click", function(evt){
    evt.preventDefault();
    for (var i = 0; i < servicesControl.length; i++){
      servicesControl[i].classList.remove("services-control-item-active");
    }
    for (var i = 0; i < servicesSlides.length; i++){
      servicesSlides[i].classList.remove("services-slide-show");
    }
    servicesControl[0].classList.add("services-control-item-active");
    servicesSlides[0].classList.add("services-slide-show");
  });

  buttonGuarantee.addEventListener("click", function(evt){
    evt.preventDefault();
    for (var i = 0; i < servicesControl.length; i++){
      servicesControl[i].classList.remove("services-control-item-active");
    }
    for (var i = 0; i < servicesSlides.length; i++){
      servicesSlides[i].classList.remove("services-slide-show");
    }
    servicesControl[1].classList.add("services-control-item-active");
    servicesSlides[1].classList.add("services-slide-show");
  });

  buttonCredit.addEventListener("click", function(evt){
    evt.preventDefault();
    for (var i = 0; i < servicesControl.length; i++){
      servicesControl[i].classList.remove("services-control-item-active");
    }
    for (var i = 0; i < servicesSlides.length; i++){
      servicesSlides[i].classList.remove("services-slide-show");
    }
    servicesControl[2].classList.add("services-control-item-active");
    servicesSlides[2].classList.add("services-slide-show");
  });
}

/* cart-buy */

var buttonBuy = document.querySelectorAll(".button-buy");
var addCartPopup = document.querySelector(".modal-add-cart");
var addCartClose = addCartPopup.querySelector(".button-close");
var linkCart = document.querySelector(".link-cart");
var cartCount = document.querySelector(".link-cart span");

var defaultCount = 0;

//Обнуляем локальное хранилище чтобы проверить что все работает корректно
//localStorage.clear();

try {
  storage = Number(localStorage.getItem("cartCount"));
} catch (err) {
  isStorageSupport = false;
}


if (storage){
  linkCart.classList.add("full");
  cartCount.innerHTML = storage;
  cartCount.dataset.count = storage;
}

for (var i = 0; i < buttonBuy.length; i++){
  buttonBuy[i].addEventListener("click", function(evt){
    evt.preventDefault();
    addCartPopup.classList.add("modal-show");

    defaultCount +=1;

    if (isStorageSupport) {
      localStorage.setItem("cartCount", storage + defaultCount);
    }

    linkCart.classList.add("full");
    cartCount.innerHTML = storage + defaultCount;
    cartCount.dataset.count = storage + defaultCount;

  });
}

addCartClose.addEventListener("click", function(evt){
  evt.preventDefault();
  addCartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (addCartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      addCartPopup.classList.remove("modal-show");
    }
  }
});
