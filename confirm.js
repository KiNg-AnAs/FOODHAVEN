document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backButton");
    const confirmButton = document.getElementById("confirmButton");

    backButton.addEventListener("click", function () {
      window.location.href = "payment.html";
    });

    confirmButton.addEventListener("click", function () {
    
      const confirmationMessage = `Booking Confirmed!\n\nThank you for choosing FOOD HAVEN for your dining experience! Your reservation has been successfully booked.\n\nYou will receive a confirmation email shortly with all the details of your reservation, including date, time, number of guests, and any special requests you may have made.\n\nWe look forward to serving you and creating a memorable dining experience. Should you have any questions or need to make any changes, please don't hesitate to contact us.\n\nBon appétit and see you soon!`;

      alert(confirmationMessage);

      
      window.location.href = "index.html";
    });
  });