var list = document.getElementById('todos-list');
var addBtn = document.getElementById('todo-add-btn');
var addInput = document.getElementById('todo-input');

function createToDo(){
    var text= addInput.value;

    if (text ===""){
        return;
    }

    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = text;

    var remove = document.createElement('span');
    remove.classList.add('remove');
    remove.innerHTML = "&cross";

    li.appendChild('checkbox');
    li.appendChild('paragraph');
    li.appendChild('remove');
    list.appendChild('li');

    addInput.value = '';
}

list.addEventListener('click', function (event) {

    switch(event.target.tagName) {
        case 'p':
        showEditInput();
        break;
    case 'SPAN':
        removeTodo();
        break;
    }
});

list.addEventListener ('change', function (event) {
if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox'){
    toggleComplete();
}

});

addBtn.addEventListener('click', createToDo);

addInput.addEventListener('keypress', function (event){
if ( event.key === "Enter"){
    createToDo();
}
});