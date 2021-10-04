  const button = document.querySelector('.main-button'),
        color = document.querySelector('.main-color'),
        main = document.querySelector('.main');

        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        button.addEventListener('click', function() {
          hexColor = '#';
          for(let i = 0; i < 6; i++) {
            hexColor +=  hex[getRandomNumber()]; 
          }

          main.style.backgroundColor = hexColor;
          color.textContent = hexColor;
        })



        function getRandomNumber() {
          return Math.floor(Math.random() * hex.length)
        }