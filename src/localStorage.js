
export class storage {
    static updateProjects(projects){
        localStorage.removeItem('projects')
        localStorage.setItem('projects', JSON.stringify(projects))
        
    }
    static getProjects(){
        let projects
        if(localStorage.getItem('projects') === null) {
            projects = []
        }
        else{
            projects = JSON.parse(localStorage.getItem('projects'))
        }
        return projects
    }
}