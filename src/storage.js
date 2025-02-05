import Task from './task'
import { taskList, } from './taskList'

export default class Storage {

    static saveTaskList(data) {
        localStorage.setItem('taskList', JSON.stringify(data))
    }

    static saveProjects(data) {
        localStorage.setItem('projects', JSON.stringify(data))
    }

    static getTaskList() {
        const text = localStorage.getItem('taskList');
        const result = [];
        for (let el of JSON.parse(text)){
            const a = new Task();
            a.readTask(el);
            result.push(a);
        }
        return result
    }

    static getProjects(){
        return JSON.parse(localStorage.getItem('projects'))
    }

    static checkTaskList() {
        return localStorage.getItem('taskList') != null
    }

    static checkProjects() {
        return localStorage.getItem('projects') != null
    }

}