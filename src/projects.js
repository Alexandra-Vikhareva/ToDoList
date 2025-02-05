import { taskList } from "./taskList";
import storage from './storage'

const projects = (function(){

    const projectList = [];

    const addProject = (project) => {
        projectList.push(project);
        storage.saveProjects(projectList);
    } 

    const deleteProject = (project) => {
        for (let task of taskList.getTasks('project', project)) {
            taskList.delTask(task)
        };
        projectList.splice(projectList.indexOf(project), 1);
        storage.saveProjects(projectList);
        storage.saveTaskList(taskList.toDos);
    }

    return {projectList, addProject, deleteProject}

})();

export { projects, }