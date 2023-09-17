export default function createElement(type, id, text, classes) {
    let element = document.createElement(type);
    element.id = id;
    for (let i = 0; i < classes.length; i++) {
        element.classList.add(classes[i]);
    }
    if (type === 'input' || type === 'textarea') {
        element.value = text;
    } else {
        element.innerText = text;
    }
    return element;
}
