import createElement from "./createElement.js";


export default function getSP(i,eq){

const mainDiv = createElement("div",`sp_${i}`,'',['w-full','bg-stone-600','text-center','rounded-md','justify-center']);
const toolbar = createElement("div",`sptoolbar_${i}`,'',['w-8/12','mx-auto']);

const addCodeBtn = createElement("button",`spCodeBtn_${i}`,'Code',['bg-green-800','m-1','p-1','text-xs','rounded-md']);

const addTextBtn = createElement("button",`spTextBtn_${i}`,'Text',['bg-yellow-900','m-1','p-1','text-xs','rounded-md']);

const addTableBtn = createElement("button",`spTableBtn_${i}`,'Table',['bg-green-700','m-1','p-1','text-xs','rounded-md']);


toolbar.appendChild(addCodeBtn);
toolbar.appendChild(addTextBtn);
toolbar.appendChild(addTableBtn);
mainDiv.appendChild(toolbar);

    for (let j = 0; j < eq.sp.length; j++) {
        const spItem = eq.sp[j];
        if (spItem.type == 'code'){
            const spCodeDiv = createElement("div",`spCode_${j}`,'',['bg-stone-500', 'rounded-md','w-8/12','mx-auto']);
            katex.render(spItem.code, spCodeDiv);
            mainDiv.appendChild(spCodeDiv);
        }
    }

return mainDiv;



}//getSP