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
       const seed = letters + letters.toUpperCase();

       for (let i = 0; i < slider.value; i++ ){
        password += seed[Math.floor(Math.random() * 52)];
       }

       console.log(password);
       result.textContent = password;
      // result.textContent = letters[25];
  });


}
