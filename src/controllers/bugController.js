import bugModel from "../models/bugModel"

export function retrieveBugs (){
    let data = [];
    data.push(new bugModel({
        id:1,
        name:"Crash on load",
        details:"Crashes after a few seconds",
        steps:"Open app and it will crash",
        version:"v1.2",
        assigned:"Yoni Tubul",
        creator: "Jack Ma",
        priority: 1,
        time:"22:22",
    }));
    

    data.push(new bugModel({
        id:2,
        name:"Crash on startup",
        details:"Crashes straight up",
        steps:"Open app and it will crash",
        version:"v1.2",
        assigned:"Yoni Tubul",
        creator: "Jack Ma",
        priority: 2,
        time:"22:22",
    }));

    return data.sort((a,b) => {return a.priority-b.priority});
}
