const modal = document.getElementById('modal-aboutme')
const btn = document.getElementById('about-me')
const close = document.getElementById('close')

btn.onclick = function() {
    modal.style.display = 'block'
}

close.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}