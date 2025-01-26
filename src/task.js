export default class Task {
    constructor(title, description, dueDate = 'No date', priority = 'low', project = 'home', done = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.done = done;
    }
}