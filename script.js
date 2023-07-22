$(document).ready(function () {
    const textToType = "I have strong communication skills that enable me to communicate with a variety of people, as well as a strong sense of responsibility and motivation for any type of work that is assigned to me. My greatest attribute is a combination of multitasking and punctuality, which enables me to meet all deadlines despite work pressure. ";
    const typingElement = document.querySelector(".typing");
  
    function typeText(element, text, speed) {
      let currentIndex = 0;
      const maxIndex = text.length;
  
      function typeCharacter() {
        element.textContent += text[currentIndex];
        currentIndex++;
        if (currentIndex < maxIndex) {
          setTimeout(typeCharacter, speed);
        }
      }
  
      typeCharacter();
    }
  
    typeText(typingElement, textToType, 50);
  
    const textToType2 = "Lamisa Diya";
    const typingElement2 = document.querySelector(".typing2");
  
    function typeText2(element, text, speed) {
      let currentIndex = 0;
      const maxIndex = text.length;
  
      function typeCharacter2() {
        element.textContent += text[currentIndex];
        currentIndex++;
        if (currentIndex < maxIndex) {
          setTimeout(typeCharacter2, speed);
        }
      }
  
      typeCharacter2();
    }
  
    typeText2(typingElement2, textToType2, 500);
  });
  