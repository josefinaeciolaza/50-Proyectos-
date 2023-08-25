const panels = document.querySelectorAll('.panel') /*coloca todos lo selecionados en una lista de nodos. Comportamiento similar a un array*/

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}