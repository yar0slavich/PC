const btnOpen = document.querySelectorAll('#modelOpen')
const btnClose = document.querySelector('#modelClose')
const modal = document.querySelector('#modal')

btnOpen.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})

btnClose.addEventListener('click', () => {
    modal.classList.add('hidden')
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.add('hidden')
    }
})