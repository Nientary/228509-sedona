var reviewForm = document.querySelector(".form--review");
var username = reviewForm.querySelector("#username");
var firstName = reviewForm.querySelector("#first-name");
var phone = reviewForm.querySelector("#tel-number");
var mail = reviewForm.querySelector("#email");

var success = document.querySelector(".popup--success");
var failure = document.querySelector(".popup--failure");
var successClose = success.querySelector(".btn");
var failureClose = failure.querySelector(".btn");

username.removeAttribute("required");
firstName.removeAttribute("required");
phone.removeAttribute("required");
mail.removeAttribute("required");

reviewForm.addEventListener("submit", function(event) {
  if (!username.value || !firstName.value || !phone.value || !mail.value) {
    event.preventDefault();
    failure.classList.add("popup--shown");
  }
  if (!username.value) {
    username.classList.add("text-field__input--invalid");
  }
  if (!firstName.value) {
    firstName.classList.add("text-field__input--invalid");
  }
  if (!phone.value) {
    phone.classList.add("text-field__input--invalid");
  }
  if (!mail.value) {
    mail.classList.add("text-field__input--invalid");
  }
  if (username.value && firstName.value && phone.value && mail.value) {
    success.classList.add("popup--shown");
  }
});

username.addEventListener("keydown", function(event) {
  if(username.value) {
    if(username.classList.contains("text-field__input--invalid")) {
      username.classList.remove("text-field__input--invalid");
    }
  }
});

firstName.addEventListener("keydown", function(event) {
  if(firstName.value) {
    if(firstName.classList.contains("text-field__input--invalid")) {
      firstName.classList.remove("text-field__input--invalid");
    }
  }
});

phone.addEventListener("keydown", function(event) {
  if(phone.value) {
    if(phone.classList.contains("text-field__input--invalid")) {
      phone.classList.remove("text-field__input--invalid");
    }
  }
});

mail.addEventListener("keydown", function(event) {
  if(mail.value) {
    if(mail.classList.contains("text-field__input--invalid")) {
      mail.classList.remove("text-field__input--invalid");
    }
  }
});

successClose.addEventListener("click", function(event) {
  event.preventDefault();
  success.classList.remove("popup--shown");
});

failureClose.addEventListener("click", function(event) {
  event.preventDefault();
  failure.classList.remove("popup--shown");
});
