console.log("garantia loaded!");

const formElement = document.querySelector("form");

const submitHandler = function (event) {
  event.preventDefault();
  window.print();
};

formElement.addEventListener("submit", submitHandler);
