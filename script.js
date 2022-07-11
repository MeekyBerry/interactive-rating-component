const BUTTON = document.getElementById('btn');
const CONTAINER_BOX = document.querySelector('.container');
const SECOND_CONTAINER_BOX = document.querySelector('.second-container');
const NUMBERS = document.querySelectorAll('.number');
const CONFIRMATION_MSG = document.querySelector('.confirmation-message');

const NumberSelected = () => {
    NUMBERS.forEach((selected) => {
        let digit = selected.textContent;

        selected.addEventListener('click', (e) => {
            selected.style.backgroundColor = 'hsl(0, 0%, 100%)';
            CONFIRMATION_MSG.textContent = `You selected ${digit} out of 5`;
        })
    })
}

NumberSelected()


BUTTON.addEventListener('click', (e) => {
    CONTAINER_BOX.classList.toggle('hidden')
    SECOND_CONTAINER_BOX.classList.toggle('hidden')
});