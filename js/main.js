let menu = document.querySelector('.menu');
let btn = document.querySelector('.btn-block__nav');
let burger = document.querySelector('.burger-block');

burger.addEventListener('click', f1);
burger.addEventListener('click', f2);


function f1() {
   if (menu.style.display === 'block') {
      menu.style.display = 'none';
   } else {
      menu.style.display = 'block';
   }
}
function f2() {
   if (btn.style.display === 'block') {
      btn.style.display = 'none';
   } else {
      btn.style.display = 'block';
   }
}


burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})