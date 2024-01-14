document.addEventListener("DOMContentLoaded", function () {
  const seatContainer = document.getElementById("seat-container");

  function toggleSeat() {
    if (this.dataset.status === "empty") {
      this.classList.toggle("selected");    
    }
  }

  function updateQuota() {
    const remainingSeats = maxSeats - selectedSeats;
    quotaElement.textContent = `Quota: ${remainingSeats} seat${
      remainingSeats !== 1 ? "s" : ""
    } remaining`;
  }

  const seats = document.querySelectorAll(".seat");
  seats.forEach((seat) => {
    seat.addEventListener("click", toggleSeat);
  });

  seats[1].classList.add("occupied");
  seats[2].classList.add("occupied");
  seats[5].classList.add("occupied");
  seats[9].classList.add("occupied");
  seats[10].classList.add("occupied");
  seats[11].classList.add("occupied");
  seats[30].classList.add("occupied");
  seats[31].classList.add("occupied");
});
