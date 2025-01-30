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
    date.textContent = format(task.dueDate, 'MMM dd');

    if (task.done == true) card.classList.add('completeTask');
    card.classList.add(task.priority);

    card.append(checkbox, title, btn, date, del);
    del.addEventListener('click', (e) => {
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

    btn.addEventListener('click', (e) => {
        console.log(e.target.parentElement.classList);
        drawForm(taskList.toDos[0]);
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

function drawForm(info) {
    const form = document.createElement('form'),
        title = document.createElement('input'),
        titleDiv = document.createElement('div'),
        doneDiv = document.createElement('div'),
        dateDiv = document.createElement('div'),
        priorityDiv = document.createElement('div'),
        lableTitle = document.createElement('label'),
        done = document.createElement('input'),
        labelDone = document.createElement('label'),
        date = document.createElement('input'),
        labelDate = document.createElement('label'),
        priority = document.createElement('select'),
        labelPriority = document.createElement('label'),
        content = document.querySelector('#content');

    title.type = 'text';
    title.id = 'title';
    title.value = info.title;
    lableTitle.setAttribute('for', 'title');
    lableTitle.textContent = 'title: ';
    titleDiv.append(lableTitle, title);

    done.type = 'checkbox';
    done.id = 'done';
    if (info.done == true) done.checked = true;
    labelDone.setAttribute('for', 'done');
    labelDone.textContent = 'done: ';
    doneDiv.append(labelDone, done);
    
    date.type = 'date';
    date.id = 'dueDate';
    date.value = format(info.dueDate, 'yyyy-MM-dd');
    labelDate.setAttribute('for', 'dueDate');
    labelDate.textContent = 'deadline: '
    dateDiv.append(labelDate, date);
    
    priority.id = 'priority';
    for (let el of ['low', 'middle', 'high']){
        addOption(priority, el, el);
    }
    priority.value = info.priority;
    labelPriority.setAttribute('for', 'priority');
    labelPriority.textContent = 'priority: ';
    priorityDiv.append(labelPriority, priority);

    form.append(titleDiv, doneDiv, dateDiv, priorityDiv);
    form.className = 'form';
    content.append(form);
}

function addOption(select, text, value){
    const newOption = new Option(text, value);
    select.options[select.options.length] = newOption;
}

taskList.addTask(new Task('afki', new Date(2025, 1, 1), 'low', 'home', true));
taskList.addTask(new Task('iuytfr', new Date(2025, 1, 16), 'medium', 'home'));
taskList.addTask(new Task('ppppppp', new Date(2025, 8, 11), 'high', 'home'));

drawCards(taskList.toDos)

