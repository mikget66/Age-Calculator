let userInput = document.getElementById('date');
const calcBtn = document.querySelector('.calc');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result')

//so user cannot select future date

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust if the current month or day is before the birth month or day
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}


calcBtn.addEventListener('click', calculateAge);
