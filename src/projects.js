import { taskList } from "./taskList";
const projects = (function(){
    const projectList = ['study', 'housework'];

    const addProject = (project) => {projectList.push(project)} 

    const deleteProject = (project) => {
        for (let task of taskList.getTasks('project', project)) {
            taskList.delTask(task)
        };
        projectList.splice(projectList.indexOf(project), 1);
    }
    return {projectList, addProject, deleteProject}
})();

export { projects, }