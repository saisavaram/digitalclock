let is24Hour = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = '';

  if (!is24Hour) {
    session = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert 0 to 12
  }

  // Format with leading zeros
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  const timeStr = `${hours}:${minutes}:${seconds} ${!is24Hour ? session : ''}`;
  document.getElementById('clock').textContent = timeStr;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Toggle 12/24 hour format
document.getElementById('toggleBtn').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggleBtn').textContent = is24Hour
    ? 'Switch to 12-Hour Format'
    : 'Switch to 24-Hour Format';
  updateClock();
});
