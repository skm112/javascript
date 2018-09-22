



//-------------------------------------------------------------
var ul=document.getElementById('list')
var li;

var inputField=document.getElementById('input')
inputField.addEventListener('keypress',enterKey)

var addBtn= document.getElementById('add')
addBtn.addEventListener('click',addItem);

var removeBtn=document.getElementById('remove')
removeBtn.addEventListener('click',removeItem);

var reveryBtn=document.getElementById('revery')
reveryBtn.addEventListener('click',removeAll);
//------------------------------------------------------------



//-------------------------------------------------------------
function enterKey(e){
    var key =e.which || keyCode;
    if (key === 13) { 
        addItem();
    }
}

function addItem() {
    let input=document.getElementById('input')
    let item=input.value
    let textnode=document.createTextNode(item)

    if (item==='') {
        return false
    } else {
        // create li
        li = document.createElement('li')
        
        //create checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')
        //create label
        var label=document.createElement('label')
        label.setAttribute('for','item')//optional
        // add these elements in webpage
        //ul.appendChild(label)
        li.appendChild(checkbox)
        li.appendChild(label)
        label.appendChild(textnode)
        ul.insertBefore(li,ul.childNodes[0])
        
        setTimeout(() => {
            li.className='visual'
            }, 2);


    }
    input.value='';
}

function removeItem() {
li=ul.children
for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
    }   
}    
}

function removeAll() {   
li=ul.children;
    for (let index = li.length-1; index>=0; index--) {
        const element = li[index];
        ul.removeChild(element)
    }
}
//-------------------------------------------------------------





















//-----------------------------------------------------------------------
// var h= document.createElement('h1')
// var myValue=document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)
//------------------------------------------------------------------------

//-----------------------------------------------------------------
// var val=5
// while (val>0) {
//     console.log(val);
//     val--;
    
// }
// -----------------------------------------------------------------------------------
