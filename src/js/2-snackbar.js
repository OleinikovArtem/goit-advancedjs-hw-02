import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

// Функція, яка створює проміс
function createPromise(delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

// Обробка сабміту форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = parseInt(form.delay.value);
  const state = form.state.value === 'fulfilled';

  // Виклик створеного промісу
  createPromise(delay, state)
    .then((delay) => {
      // Успішний результат
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      // Відхилений результат
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
