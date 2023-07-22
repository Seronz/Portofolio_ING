function Toggle() {
  document.querySelector(".Wrapper-Header-Nav").classList.toggle("active");
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const clockElement = document.getElementById("Hour");
  clockElement.innerHTML = timeString;
}

function updateDate() {
  const now = new Date();

  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const dateString = now.toLocaleDateString("id-ID", dateOptions);

  const dateElement = document.getElementById("Day");
  dateElement.innerHTML = dateString;
}

setInterval(() => {
  updateClock();
  updateDate();
}, 1000);

// Panggil fungsi updateClock dan updateDate untuk menampilkan jam dan tanggal saat halaman dimuat
updateClock();
updateDate();

function Technology() {
  document.querySelector("#Technology-Icon").classList.toggle("active");
}
