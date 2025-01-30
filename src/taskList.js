const taskList = (function(){
    const toDos = [];

    const addTask = (task) => toDos.unshift(task);

    const delTask = (task) => toDos.splice(toDos.indexOf(task), 1);

    const getTasks = (property, value) => toDos.filter(item => item[property] == value)

    return {toDos, addTask, delTask, getTasks}
})();

export { taskList, }