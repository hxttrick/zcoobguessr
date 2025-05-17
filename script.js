async function onSecret(event) {
    document.querySelector('div.secret').classList.add('slideUp')
    event.target.parentNode.remove()
}