'use strict'
{

  const slider = document.getElementById('slider');

  slider.addEventListener('input', () => {
      const passwordLength = document.getElementById('password-length');
      passwordLength.textContent = slider.value;
  });


  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
       const result = document.querySelector('#result');
       const letters = 'abcdefghijklmnopqrstuvwxyz';
       let password = '';

       for (let i = 0; i < 8; i++ ){
        password += letters[Math.floor(Math.random() * 26)];
       }

       console.log(password);
       result.textContent = password;
      // result.textContent = letters[25];
  });


}
