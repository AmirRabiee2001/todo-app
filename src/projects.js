import { task } from "./tasks"


export class project {
    constructor(name){
        this.name = name
        this.todos = []
        this.id = project.genID() 
    }
    static genID(){
        return (Math.floor(Math.random() * 10000) + 10000).toString()
    }
}