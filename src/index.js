import storage from './storage'
import Task from './task'
import { taskList, } from './taskList'
import './style.css'
const { format } = require("date-fns");

function createCard(task) {

    const card = document.createElement('div');
    const checkbox = document.createElement('div');
    const title = document.createElement('div');
    const btn = document.createElement('button');
    const date = document.createElement('div');
    const del = document.createElement('span');

    card.className = 'task';
    checkbox.className = 'checkbox';
    title.className = 'title';
    btn.className = 'details';
    date.className = task.dueDate;
    del.className = 'material-symbols-outlined';
    title.textContent = task.title;
    btn.textContent = 'details';
    del.textContent = 'delete';
    date.textContent = format(task.dueDate, 'MMM dd')

    card.append(checkbox, title, btn, date, del);
    del.addEventListener('click', (e) => 
        {
            const del = e.target.parentElement;
            for (let index in taskList.toDos){
                if (compareTasks(taskList.toDos[index], del)){
                    taskList.toDos.splice(index, 1);
                    break
                }
            }
            del.remove();
        })

    checkbox.addEventListener('click', (e) => {
        const check = e.target.parentElement;
        for (let index in taskList.toDos){
            if (compareTasks(taskList.toDos[index], check)){
                taskList.toDos[index].done == true 
                    ? taskList.toDos[index].done = false 
                    : taskList.toDos[index].done = true
                break
            }
        }
        const classes = check.classList;
        classes.toggle('completeTask')
    })
    return card
}

function drawCards(lst){

    const cards = document.querySelector('#cards');

    while(cards.firstChild){
        cards.removeChild(cards.firstChild)
    };

    for (let el of lst){
        const a = createCard(el);
        cards.prepend(a);
    }
}

function compareTasks(task, cardNodes) {
    let card = cardNodes.childNodes;
    return (task.title == card[1].textContent )
}

taskList.addTask(new Task('afki', 'LKJDVNUHlojdn', new Date(2025, 1, 1)));
taskList.addTask(new Task('iuytfr', 'Ln', new Date(2025, 1, 16)));
taskList.addTask(new Task('ppppppp', 'Llkjhgfn', new Date(2025, 8, 11)));

drawCards(taskList.toDos)

