  const button = document.querySelector('.main-button'),
        color = document.querySelector('.main-color'),
        main = document.querySelector('.main');

  const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

  button.addEventListener('click',function() {
      const randomNumber = getRandomNumber();

      main.style.backgroundColor = colors[randomNumber];
      color.textContent = colors[randomNumber];
  })


  function getRandomNumber() {
     return Math.floor(Math.random() * colors.length);
  }
