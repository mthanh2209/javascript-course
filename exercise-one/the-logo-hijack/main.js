const logoGoogle = document.querySelector('img[alt="Google"]');
const buttonGoogle = document.querySelector('input[value="Tìm trên Google"]');

logoGoogle.removeAttribute("srcset");
logoGoogle.src =
  "https://dequency.io/wp-content/uploads/2022/07/a929b8f0-dd65-11e9-bffe-b90463fd5188.png";

buttonGoogle.value = "Yahooo!";
