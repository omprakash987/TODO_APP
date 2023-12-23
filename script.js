const todoInput = document.getElementById('search');
const listInput = document.getElementById('inputlist');

const button = document.getElementById('btn');

button.addEventListener('click',function(){
    const todotext = todoInput.value;

    if(todotext.trim()!=''){
        const listitems = document.createElement('li');
        listitems.innerHTML = ` <input type="checkbox"> <span>${todotext}</span>

        <button onclick="removeTodo(this)">Remove</button>`

        listInput.appendChild(listitems);
        console.log("element attached");
todoInput.value = '';


    }
});


function removeTodo(button){
 const   listitems = button.parentElement;

    listInput.removeChild(listitems);

}




