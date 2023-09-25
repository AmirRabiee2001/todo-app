import './styles/main.css'
import { UI } from './UI'
import { task } from './tasks'
import { project } from './projects'
import { storage } from './localStorage'

const panelToggle = document.getElementById('panel-toggle')
const sidePanel = document.getElementById('side-panel')
var currentProject = undefined
var filter = undefined
const projects = storage.getProjects()

// Get Current date

function currentDate(){
    const date = new Date()
    let currentDay = String(date.getDate()).padStart(2, '0')
    let currentMonth = String(date.getMonth()+1).padStart(2, '0')
    let currentYear = date.getFullYear()
    return `${currentYear}-${currentMonth}-${currentDay}`
}

// Home
// Display Today Projects
document.getElementById('home-today').addEventListener('click', (e)=>{
    filter = 'today'
    if(currentProject === undefined){
        UI.showAllProjects(filter)
    }
    else{
        UI.filterProject(currentProject, filter)
    }
})


// Panel toggle
panelToggle.addEventListener('click', ()=>{
    sidePanel.classList.toggle('active')
})


// Add Todo function
function addTodo(name, date, priority){
    const newTodo = new task(name,date,priority)
    currentProject.todos.push(newTodo)
}

// Get selected priority
const priorityBtns = document.querySelectorAll('.priority')
var priority = undefined

priorityBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        priority = e.target.id
    })
})

// Add task form
document.getElementById('new-task-form').addEventListener('submit', (e) =>{
    e.preventDefault()

    // Get Form Values
    const taskName = document.getElementById('task-name').value
    const taskDate = document.getElementById('task-date').value
    if(taskName === '' || taskDate === '' || priority === undefined){
        alert('please fill all the fields')
    }
    else if(currentProject === undefined){
        alert('Please select a project')
    }
    else{
        addTodo(taskName, taskDate, priority)
        addTaskBtn.classList.remove('open')
        UI.addTaskToList(currentProject.todos[(currentProject.todos).length - 1])
        storage.updateProjects(projects)
        UI.clearFields()
    }
})

// Add Project Form
document.getElementById('new-project-form').addEventListener('submit', (e) => {
    e.preventDefault()
    // Get form values
    const projectName = document.getElementById('project-name').value
    if(projectName === ''){
        alert('please fill all the fields')
    }
    else{
        const newProject = new project(projectName)
        projects.push(newProject)
        UI.addProjectToList(newProject)
        storage.updateProjects(projects)
        addProjectBtn.classList.remove('open')
        UI.clearFields()
    }

})

// Toggle add task form 
const addTaskBtn = document.getElementById('add-task-btn')
addTaskBtn.addEventListener('click', (e)=>{
    addTaskBtn.classList.add('open')
    if(e.target.classList.contains('close')){
        addTaskBtn.classList.remove('open')
    }
})
// Toggle new project form
const addProjectBtn = document.getElementById('add-project-btn')
addProjectBtn.addEventListener('click', (e)=>{
    addProjectBtn.classList.add('open')
})


// Toggle active project
const projectList = document.getElementById('projects')
projectList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('project-nav-name')){
        UI.toggleProject(e.target)
        projects.forEach((project)=>{
            if(`>${project.name}` === e.target.textContent){
                currentProject = project
                console.log(currentProject)
                UI.displayTasks(currentProject)
            }
        })
    }
})

// Remove task event
function removeTask(el){
    const taskID = el.parentElement.id
    for(let i=0; i<((currentProject.todos).length); i++){
        if((currentProject.todos[i].id) === taskID){
            (currentProject.todos).splice(i, 1)
            storage.updateProjects(projects)
        }
    }
}

// Remove project event
function removeProject(el){
    const projectID = el.parentElement.id
    for(let i=0; i<((projects).length); i++){
        if(projects[i].id === projectID){
            projects.splice(i, 1)
            document.getElementById('task-display').innerHTML=''
            storage.updateProjects(projects)
        }
    }
}
// Check task event
function checkTask(el){
    const taskID = el.parentElement.nextElementSibling.id
    for(let i=0; i<((currentProject.todos).length); i++){
        if((currentProject.todos[i].id) === taskID){
            if(currentProject.todos[i].isDone === true){
                currentProject.todos[i].isDone =false
            }
            else{
                currentProject.todos[i].isDone = true
            }
            storage.updateProjects(projects)
        }
    }
}

// Load Projects
document.addEventListener('DOMContentLoaded', UI.displayProjects(projects))

// Task control
const taskList = document.getElementById('task-display')
taskList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('remove')){
        UI.removeTask(e.target)
        removeTask(e.target)
    }
    if(e.target.classList.contains('check-box')){
        UI.checkTask(e.target)
        checkTask(e.target)
    }
})

// Project control
projectList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-times')){
        removeProject(e.target)
        UI.removeProject(e.target)
    }
})