import { TimeTrackerTaskStatus } from "../enum/enum";

export class TimeTrackerTask{
    id:number;
    title:string;
    category:string;
    description:string;
    startTime:number;
    endTime:number;
    expectedCompletionTime:number;
    status:TimeTrackerTaskStatus;
    priority:number;
    efficiency:number;
    
    constructor(id:number,title:string,category:string,description:string,startTime:number,expectedCompletionTime:number,status:TimeTrackerTaskStatus,priority:number,efficieny:number){
        this.id=id;
        this.title=title;
        this.category=category;
        this.description=description;
        this.startTime=startTime;
        this.expectedCompletionTime=expectedCompletionTime;
        this.status=status;
        this.priority=priority;
        this.efficiency=efficieny;
    }
}