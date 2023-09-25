export class task {
    constructor(name, date, priority){
        this.name = name
        this.date = date
        this.isDone = false
        this.priority = priority
        this.id = task.genID()
    }
    static genID(){
        return (Math.floor(Math.random() * 10000) + 10000).toString()
    }
    static markDone(){
        this.isDone = true
    }
}
