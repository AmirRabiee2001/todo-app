export class UI{
    static displayTasks(projectName){
        document.getElementById('task-display').innerHTML = ''
        projectName.todos.forEach((task)=> UI.addTaskToList(task))
    }
    static displayProjects(projects){
        projects.forEach((project) => UI.addProjectToList(project))
    }
    static addTaskToList(task){
        const taskList = document.getElementById('task-display')
        const newTask = document.createElement('div')
        newTask.classList.add('task')
        if(task.isDone === true){
            newTask.classList.add('done')
        }
        switch(task.priority){
            case 'high':
                newTask.classList.add('high')
                break;
            case 'medium':
                newTask.classList.add('medium')
                break;
            case 'low':
                newTask.classList.add('low')
                break;
        }
        newTask.innerHTML = `
            <div class="task-head">
                <i class="fa fa-check-square check-box"></i>
                <i class="fa fa-square check-box"></i>
                <span class="task-name">${task.name}</span>
            </div>
            <div class="task-control" id="${task.id}">
                <span class="task-date">${task.date}</span>
                <i class="fa fa-pen"></i>
                <i class="fa fa-times remove"></i>
            </div>
        `
        taskList.appendChild(newTask)
    }
    static addProjectToList(project){
        const projectList = document.getElementById('projects')
        const newProject = document.createElement('li')
        newProject.classList.add('project-nav')
        newProject.id = project.id
        newProject.innerHTML = `<div class="project-nav-name"><span class="stat-mark">></span>${project.name}</div><i class="fa fa-times"></i>`
        projectList.appendChild(newProject)
    }
    static removeTask(el){
        el.parentElement.parentElement.remove()
    }
    static removeProject(el){
        el.parentElement.remove()
    }
    static checkTask(el){
        el.parentElement.parentElement.classList.toggle('done')
    }
    static toggleProject(el){
        const projectNavs = document.querySelectorAll('.project-nav')
        projectNavs.forEach((nav) =>{
            if(nav.classList.contains('active')){
                nav.classList.remove('active')
            }
        })
        el.parentElement.classList.add('active')
    }
    static clearFields(){
        document.getElementById('project-name').value = ''
        document.getElementById('task-name').value = ''
        document.getElementById('task-date').value = ''
    }
    static showAllProjects(filter){

    }
    static filterProject(currentProject, filter){

    }
}