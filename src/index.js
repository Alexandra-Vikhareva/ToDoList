import Task from './task'
import { taskList, } from './taskList'

taskList.addTask(new Task('af', 'afafga'))
const a = new Task('ahgf', 'oooooo')
taskList.addTask(a)
taskList.addTask(new Task('jdr', 'nybgtrf', 'No date', 'high'))
console.log(taskList.getTasks('priority', 'medium'))