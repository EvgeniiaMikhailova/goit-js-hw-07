const refs = {
    input: document.querySelector('#font-size-control'),
    nameLabel: document.querySelector('#text'),
}

console.log(refs.input);
console.log(refs.nameLabel);


refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    refs.nameLabel.style.fontSize = `${refs.input.value}px`;
};


