const toggle = document.getElementById('menu-toggle')

window.onclick = function(event) {
    if (event.target == toggle) {
        toggle.display = 'none'
    }
}