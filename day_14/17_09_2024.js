let interruptor = document.getElementById('interruptor');
let body = document.querySelector('body');

interruptor.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');

  interruptor.classList.toggle('light');
  interruptor.classList.toggle('dark');

})
