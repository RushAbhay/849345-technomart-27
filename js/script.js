/* popup-authorization */
var authLink = document.querySelector(".login-link");
var authPopup = document.querySelector(".modal-authorization");
var authClose = document.querySelector(".button-close");
var authForm = authPopup.querySelector("form");
var authLogin = document.querySelector("[name=username]");

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
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", authLogin.value);
    }
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

var isStorageSupport = true;
var storage = "";

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

  if (storageName || storageEmail) {
    fbName.value = storageName;
    fbEmail.value =storageEmail;
    fbTextarea.focus();
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
