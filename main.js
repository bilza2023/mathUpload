import createElement from "./createElement.js";
import getSP from "./sp.js";
  let eqs = [
{time:0,code: "\\frac{1}{\\sqrt{2}}",
sp: [
{ code: "\\frac{1}{\\sqrt{2}}" , type:'code' }

] }
];

 function action(){
 // Create and render the equations dynamically
 let mathDiv = document.getElementById('mathDiv')
    while(mathDiv.firstChild){
    mathDiv.removeChild(mathDiv.firstChild);
    }
        for (let i = 0; i < eqs.length; i++) {
        const wrapperDiv = createElement('div' ,`wrapperDiv' + ${i + 1}`,"",["flex","justify-centre","w-full","p-0","m-1","gap-1","rounded-md"]);
            
            const indexDiv = createElement('span' ,`equationIndex' + ${i + 1}`,`${i+1}`,["bg-stone-900","w-1/12","p-0","m-0","rounded-md"]);
            wrapperDiv.appendChild(indexDiv);            
            
            const timeDiv = createElement('input' ,`timeDiv' + ${i + 1}`,eqs[i].time,["bg-gray-900","w-1/12","p-0","m-0"]);
            wrapperDiv.appendChild(timeDiv);            

            const ta = addTextarea(i);
            wrapperDiv.appendChild(ta); 
            
            const eqDiv = createElement('div' ,`eqDiv' + ${i + 1}`,eqs[i].time,["bg-stone-900","w-5/12","text-center","fontSize-1.75em","p-2","m-0","min-height-class","rounded-md"]);
                  katex.render(eqs[i].code, eqDiv);

            wrapperDiv.appendChild(eqDiv);                       
            
            mathDiv.appendChild(wrapperDiv);            

            const btnsDiv = addBtnsDiv(i);
            mathDiv.appendChild(btnsDiv);  
            /////SP
            const spDiv =  getSP(i,eqs[i]);
            mathDiv.appendChild(spDiv);          
        }
}

function addBtnsDiv(i) {
  // Create a new div element for buttons
let div = createElement('div' ,`btnsDiv' + ${i + 1}`,'',["flex",
"justify-start","bg-stone-500","w-full","p-1","m-1","mb-3","gap-1"]);

let addBtn = createElement('button' ,'','Add',["bg-green-900","text-white",
"p-1","text-xs","rounded-md"]);

  addBtn.addEventListener('click', function () {
    const newItemData = newItem();
    eqs.splice(i + 1, 0, newItemData);
    action();
  });

  // Create MoveUpBtn
  const moveUpBtn = createElement('button' ,'','Move Up',["bg-gray-600","text-white","p-1","text-xs","rounded-md"]);
  moveUpBtn.addEventListener('click', function () {
    if (i > 0) {
      // Swap the equations
      const temp = eqs[i];
      eqs[i] = eqs[i - 1];
      eqs[i - 1] = temp;
      action();
    }
  });

  // Create MoveDownBtn
  const moveDownBtn = createElement('button' ,'','Move Down',["bg-gray-600","text-white","p-1","text-xs","rounded-md"]);
  moveDownBtn.addEventListener('click', function () {
    if (i < eqs.length - 1) {
      // Swap the equations
      const temp = eqs[i];
      eqs[i] = eqs[i + 1];
      eqs[i + 1] = temp;
      action();
    }
  });
  // Create DeleteBtn
  const deleteBtn = createElement('button' ,'','Del',["bg-red-800","text-white","p-1","text-xs","rounded-md"]);
  deleteBtn.addEventListener('click', function () {
    eqs.splice(i, 1);
    action();
  });
  // Append buttons to the div
  div.appendChild(addBtn);
  div.appendChild(moveUpBtn);
  div.appendChild(moveDownBtn);
  div.appendChild(deleteBtn);

  return div;
}

function addTextarea(i){
let div = createElement('textarea' ,`ta' + ${i + 1}`,eqs[i].code,["bg-gray-900","text-white","w-5/12","p-2","m-0","rounded-md"]);
  
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

document.getElementById('saveBtn').addEventListener('click',async function(){
    // debugger;
        const question = {};   
              question.board = 'Punjab';
              question.class = 9;
              question.chapter = 4;
              question.exercise = "4.4";
              question.questionNo = 1;
              question.part = "i";
              question.finalized = false;
              question.free = true;
              question.eqs = [];
              
              question.filename = `${question.board.toLowerCase()}_cl_${question.class}_ch_${question.chapter}_ex_${question.exercise}_q_${question.questionNo}_pt_${question.part}`;

        let time = 0; 

    for (let i = 0; i < eqs.length; i++) {

        const n = {};
        n.step = i+1;
        n.code = eqs[i].code;
        n.time = time;
                time +=2;
      question.eqs.push(n);
    }
    console.log("question",JSON.stringify(question));

     // Upload data using fetch
    try {
        const response = await fetch('http://localhost/uploadMath', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            console.log('Data uploaded successfully');
        }
        } catch (error) {
            console.error('Error:', error);
        }
});
//==This is for the first time only
action();
