export default function bug(bug){
    if(bug != undefined){
        this.id=bug.id;
        this.name=bug.name;
        this.details=bug.details;
        this.steps=bug.steps;
        this.priority=bug.priority;
        this.assinged=bug.assinged;
        this.creator=bug.creator;
        this.time=bug.time;
    }
}