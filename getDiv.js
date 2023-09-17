
export default function getDiv(id, innerText, classes) {
    let div = document.createElement('div');
    div.id = id;
    div.innerText = innerText;
    for (let i = 0; i < classes.length; i++) {
        div.classList.add(classes[i]);
    }
    return div;
}
