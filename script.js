function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function changeSize() {
    if (window.innerWidth >= 650) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}