'use strict'
{

  const showPassword = () => {
    const result = document.querySelector('#result');
       const numbersCheckbox = document.querySelector('#numbers-checkbox');
       const symbolsCheckbox = document.querySelector('#symbols-checkbox');
       const numbers = '0123456789';
       const symbols = '!#&@?%()';
       const letters = 'abcdefghijklmnopqrstuvwxyz';
       let password = '';
       let seed = letters + letters.toUpperCase();

      if (numbersCheckbox.checked) {
          seed += numbers;
      }

      if (symbolsCheckbox.checked) {
        seed += symbols;
      }


       for (let i = 0; i < slider.value; i++ ){
        password += seed[Math.floor(Math.random() * seed.length)];
       }

       console.log(password);
       result.textContent = password;
      // result.textContent = letters[25];
  };

  const slider = document.getElementById('slider');

  slider.addEventListener('input', () => {
      const passwordLength = document.getElementById('password-length');
      passwordLength.textContent = slider.value;
  });


  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
       showPassword();
  });

  showPassword();

}
