
  document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
    const backButton = document.getElementById("backButton");
    const payButton = document.getElementById("payButton");

    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validateForm()) {
        window.location.href = "confirm.html";
      }
    });

    backButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });

   

    function validateForm() {
      const nameInput = paymentForm.elements["name"];
      const cardNumberInput = paymentForm.elements["card-number"];
      const emailInput = paymentForm.elements["email"];
      const expirationDateInput = paymentForm.elements["expiration-date"];
      const ccvInput = paymentForm.elements["ccv"];

      if (nameInput.value.trim() === "") {
        alert("Please enter the name on the card.");
        return false;
      }

      const cardNumber = cardNumberInput.value.replace(/\s+/g, "");
      if (!/^\d+$/.test(cardNumber)) {
        alert("Card number should contain only numbers.");
        return false;
      }

      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        return false;
      }

      const expirationDate = expirationDateInput.value.split("/");
      const expirationMonth = parseInt(expirationDate[0], 10);
      const expirationYear = parseInt(expirationDate[1], 10);

      const currentMonth = new Date().getMonth() + 1; 

      if (
        !/^\d{2}\/\d{2}$/.test(expirationDateInput.value) ||
        expirationMonth < 1 ||
        expirationMonth > 12 ||
        expirationYear < 0 ||
        (expirationYear === new Date().getFullYear() && expirationMonth < currentMonth)
      ) {
        alert("Please enter a valid expiration date (MM/YY).");
        return false;
      }

      if (!/^\d+$/.test(ccvInput.value)) {
        alert("CCV should contain only numbers.");
        return false;
      }

      return true;
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });

  const cardNumberInput = document.querySelector('input[name="card-number"]');
  const ccvInput = document.querySelector('input[name="ccv"]');

  cardNumberInput.addEventListener("input", restrictToNumbers);
  ccvInput.addEventListener("input", restrictToNumbers);

  function restrictToNumbers(event) {
    const input = event.target;
    const regex = /\D/g; 
    input.value = input.value.replace(regex, "");
  }

