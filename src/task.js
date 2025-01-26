export default class Task {
    constructor(title, description, dueDate = 'No date', priority = 'low', project = 'home', done = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.done = done;
    }

    readTask(obj){
        this.title = obj.title;
        this.description = obj.description;
        this.dueDate = obj.dueDate;
        this.priority = obj.priority;
        this.project = obj.project;
        this.done = obj.done;
    }
}