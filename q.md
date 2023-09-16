add to addBtnsDiv(i) function

add 4  buttons to the div and add an event handler to each div

MoveUpBtn : move the eqs item at index i one step up if it is not the top item
MoveDownBtn :move the eqs item at index i one step down if it is not the last item
DeleteBtn :delete the eqs item at index i
Add: get an item from newItem function and add it under the index i in eqs 


  let eqs = [
{time:0,code: "\\frac{1}{\\sqrt{2}}" },
{time:0,code: "E=mc^2" },
{time:0,code: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}" },
{time:0,code: "\\int_{0}^{\\pi} \\sin(x) dx = 2" },
{time:0,code: "\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1" },
{time:0,code: "\\sqrt{a^2 + b^2}" },
{time:0,code: "F = G\\frac{m_1m_2}{r^2}" },
{time:0,code: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}" },
{time:0,code: "\\frac{d}{dx}e^x = e^x" },
{time:0,code: "\\vec{F} = m\\vec{a}" },
];

 function action(){
 // Create and render the equations dynamically
 let mathDiv = document.getElementById('mathDiv')
    while(mathDiv.firstChild){
    mathDiv.removeChild(mathDiv.firstChild);
    }
        for (let i = 0; i < eqs.length; i++) {
        const wrapperDiv = addWrapperDiv();
            
            const indexDiv = addIndexDiv(i);
            wrapperDiv.appendChild(indexDiv);            
            
            const timeDiv = addTimeDiv(i);
            wrapperDiv.appendChild(timeDiv);            

            const eqDiv = addEqDiv(i);
            wrapperDiv.appendChild(eqDiv);            
            
            const ta = addTextarea(i);
            wrapperDiv.appendChild(ta);            
            
            mathDiv.appendChild(wrapperDiv);            
        }
 }

function addBtnsDiv(i){
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
function addWrapperDiv(i){
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

function addEqDiv(i){
            // Create a new div element for each equation
            let div = document.createElement('div');
            div.classList.add("bg-stone-900");
            div.classList.add("w-5/12");
            div.classList.add("p-2");
            div.classList.add("m-0");
            div.classList.add("min-height-class");
            div.classList.add("rounded-md");
            div.id = 'eqDiv' + (i + 1);
            katex.render(eqs[i].code, div);
            return div;
}

function addTimeDiv(i){
  let div = document.createElement('input');
            div.classList.add("bg-red-900");
            div.classList.add("w-1/12");
            div.classList.add("p-0");
            div.classList.add("m-0");
            div.classList.add("rounded-md");
            div.id = 'timeDiv' + (i + 1);
            div.value = eqs[i].time;
            return div;
}
function addIndexDiv(i){
  let div = document.createElement('span');
            div.classList.add("bg-stone-900");
            div.classList.add("w-1/12");
            div.classList.add("p-0");
            div.classList.add("m-0");
            div.classList.add("rounded-md");
            div.id = 'equationIndex' + (i + 1);
            div.innerText = i+1;
            return div;
}

function addTextarea(i){
  let div = document.createElement('textarea');
  div.classList.add("bg-gray-900");
  div.classList.add("text-white");
  div.classList.add("w-5/12");
  div.classList.add("p-2");
  div.classList.add("m-0");
  div.classList.add("rounded-md");
  div.id = 'ta' + (i + 1);
  div.innerText = eqs[i].code;
  
  div.addEventListener('input', function() {
    eqs[i].code = this.value;
    let eqDiv = document.getElementById('eqDiv' + (i + 1));
    eqDiv.innerHTML = ''; // Clear the div
    katex.render(eqs[i].code, eqDiv); // Re-render with the new code

  });

  return div;
}

function newItem(){
    return {time:0,code: "" }
}


document.getElementById('addBtn').addEventListener('click',function(){
    eqs.push({code:"E=mc^2"});
action();
});

document.getElementById('saveBtn').addEventListener('click',function(){
    console.log("eqs",eqs);
});
//==This is for the first time only
action();
