let selectedRating = null

const numberSelected = document.querySelectorAll('.number')
const btnSelected = document.getElementById('btn')

numberSelected.forEach((number) => {
    number.addEventListener('click', () => {
        numberSelected.forEach(n => n.classList.remove('ativo'));

        number.classList.add('ativo');

        selectedRating = number.textContent;
    })
})

btnSelected.addEventListener('click', () => {
    if(selectedRating) {
        document.getElementById('rating-selected').textContent = selectedRating;

        document.querySelector('.container-rating').classList.add('hidden')

        document.querySelector('.container-thanks').classList.remove('hidden')
    } else {
        alert('Por favor, selecione uma nota antes de enviar')
    }
})