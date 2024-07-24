const form = document.querySelector("form");
const input = document.querySelector("input");

const generateOTP = () => {
  return Math.floor(99991 * Math.random());
};

const insertOTP = (e) => {
  e.preventDefault();

  const otp = generateOTP().toString();

  if (otp.length === 5) {
    input.value = otp;
  }
};

form.addEventListener("submit", insertOTP);
