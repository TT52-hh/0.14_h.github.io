function updateClock() {
  const now = new Date();

  const date = now.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });

  document.getElementById("clock").innerText = date;
}

updateClock();
setInterval(updateClock, 1000);
