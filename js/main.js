// exam1
document.addEventListener('DOMContentLoaded', function () {
  const numb1Input = document.querySelector('.numb1');
  const numb2Input = document.querySelector('.numb2');
  const operatorButtons = document.querySelectorAll('.btn');
  const submitButton = document.querySelector('.submit');
  const resultElement = document.querySelector('.value');

  // Attach click event listeners to operator buttons
  operatorButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Remove 'clicked' class from all buttons
      operatorButtons.forEach((btn) => btn.classList.remove('clicked'));

      // Add 'clicked' class to the clicked button
      this.classList.add('clicked');
    });
  });

  // Attach click event listener to submit button
  submitButton.addEventListener('click', function () {
    const numb1 = parseInt(numb1Input.value) || 0;
    const numb2 = parseInt(numb2Input.value) || 0;

    let operator;

    // Determine the selected operator
    operatorButtons.forEach((button) => {
      if (button.classList.contains('clicked')) {
        operator = button.textContent;
      }
    });

    // Perform the calculation based on the operator
    switch (operator) {
      case '+':
        resultElement.textContent = numb1 + numb2;
        break;
      case '-':
        resultElement.textContent = numb1 - numb2;
        break;
      case '*':
        resultElement.textContent = numb1 * numb2;
        break;
      case '/':
        resultElement.textContent = numb1 / numb2;
        break;
      default:
        resultElement.textContent = 'Invalid operator';
    }
  });
});
// exam2
// check validate
function checkValidate() {
  const name = document.querySelector('.name');
  const age = document.querySelector('.age');
  const error = document.querySelector('.error');
  const info = document.querySelector('.information');
  const btnSubmitExam2 = document.querySelector('.submitExam2');
  btnSubmitExam2.addEventListener('click', () => {
    if (name?.value == '' || isNaN(age?.value)) {
      error.classList.add('active');
    } else {
      info.innerHTML = 'tên:' + name?.value + '     tuổi:' + age?.value;
      error.classList.remove('active');
    }
  });
}
checkValidate();
// exam3
function checkValidateForm() {
  const name = document.querySelector('#name');
  const gender = document.querySelector('#gender');
  const dob = document.querySelector('#dob');
  const password = document.querySelector('#password');
  const confirm_password = document.querySelector('#confirm_password');
  const email = document.querySelector('#email');
  const print = document.querySelector('.print');
  const error = document.querySelector('.errors');
  const btnExam3 = document.querySelector('.submitExam3');
  btnExam3.addEventListener('click', () => {
    let emailfilter = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    if (
      name?.value == '' &&
      dob?.value == '' &&
      password?.value == '' &&
      email?.value == ''
    ) {
      error.classList.add('active');
      error.innerHTML = 'thông tin không hợp lệ, vui lòng kiểm tra lại!!!';
      alert('thông tin không hợp lệ, vui lòng kiểm tra lại!!');
    } else {
      if (emailfilter.test(email?.value)) {
        alert('Đăng kí thành công!!!');
        error.classList.remove('active');
        print.innerHTML = 'Đăng kí thành công!!!!';
      } else {
        error.classList.add('active');
        error.innerHTML = 'Email không hợp lệ!!!';
        alert('Email không hợp lệ!!!');
      }
    }
  });
}
checkValidateForm();
// exam3
