import Task from './task'
import { taskList, } from './taskList'


taskList.addTask(new Task('af', 'afafga'))
const a = new Task('ahgf', 'oooooo')
taskList.addTask(a)
taskList.addTask(new Task('jdr', 'nybgtrf', 'No date', 'high'))

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