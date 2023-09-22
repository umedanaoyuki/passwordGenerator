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
       result.textContent = 'clicked';
  });


}
