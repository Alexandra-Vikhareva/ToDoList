const { format } = require("date-fns");
export default class Task {
    constructor(title, dueDate = 'No date', priority = 'low', project = 'home', done = false) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.done = done;
    }

    readTask(obj){
        this.title = obj.title;
        this.dueDate = obj.dueDate;
        this.priority = obj.priority;
        this.project = obj.project;
        this.done = obj.done;
    }

    info() {
        return `${this.title}, ${this.date()}, ${this.priority}, ${this.done}`
    }

    date() {
        if (this.dueDate == 'No date') 
            {return this.dueDate}
            else {return format(this.dueDate, 'MMM dd')}
    }
}