const toggle = document.querySelectorAll('.faq-toggle')

toggle.forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
        toggleButton.parentNode.classList.toggle('active')
    })
    
})