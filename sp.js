

function getSpDiv(i){
            // Create a new div element for each equation
            let div = document.createElement('div');
            div.classList.add("flex");
            div.classList.add("justify-centre");
            div.classList.add("w-full");
            div.classList.add("p-0");
            div.classList.add("m-1");
            div.classList.add("gap-1");
            // div.classList.add("min-height-class");
            div.classList.add("rounded-md");
            div.id = 'wrapperDiv' + (i + 1);
            return div;
}
