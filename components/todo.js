const Todo = () => {
    let allTask = [];
    //on selectionne le form et on ecoute les evenements
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // on selection l'input et on vide les espaces 
        const str = document.querySelector('input').value.trim();
        if(str !== ' '){
            addTask(str);
            document.querySelector('input').value = '';
        }
    });

    const addTask = (str) => {
        if(!str){
            alert('add a task please !');
        } else {
            const todo = {
                str,
                id : Date.now()
            }
            showList(todo);
        }
    }

    const showList = (todo) => {
        const container = document.querySelector('.container');
        const items = document.createElement('div');
        items.classList.add('items');
        items.setAttribute('data-key', todo.id);
        container.appendChild(items);  

        const checked = document.createElement('input');
        items.appendChild(checked);

        const item = document.createElement('div');
        checked.setAttribute('type', 'checkbox');
        checked.addEventListener('click', taskDone);
        item.classList.add('item');
        item.textContent = todo.str;
        items.appendChild(item);

        const trash = document.createElement('button');
        trash.addEventListener('click', deleteTask);
        trash.classList.add('btn');
        trash.textContent = 'delete';
        item.appendChild(trash);

        allTask.push(items);
    }


    const taskDone = (e) => {
        e.target.parentNode.classList.toggle('endTask');
    }

    const deleteTask = e => {
        console.log(e);
        allTask.forEach(el => {
            if(e.target.parentNode.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
                el.remove();
            }
        });
    }
}

export default Todo;