const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

inputEl.addEventListener('input', (event) => {
    if (Number(inputEl.getAttribute('data-length')) === event.target.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.replace('invalid', 'valid');
    } else {
         inputEl.classList.replace('valid', 'invalid');
    };
});
