import Task from './task'
import { taskList, } from './taskList'

export default class Storage {

    saveList(data) {
        localStorage.setItem('taskList', JSON.stringify(data))
    }

    getList() {
        const text = localStorage.getItem('taskList');
        for (let el of JSON.parse(text)){
            const a = new Task();
            a.readTask(el)
            taskList.addTask(a)
        }
        return taskList
    }
}