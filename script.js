
function goToLMS() {
  // Simulated LMS redirect
  window.location.href = "https://your-lms-platform.com";
}

function sendSupport(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const issue = document.getElementById('issue').value;
  const ticketNumber = Math.floor(Math.random() * 100000);
  document.getElementById('ticketStatus').innerText =
    `Thank you, ${name}. Your ticket (#${ticketNumber}) has been submitted. We'll email you at ${email}.`;
}
