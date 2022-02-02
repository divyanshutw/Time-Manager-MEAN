import {TaskStatus} from 'src/app/enum/enum';
import {Guid} from 'guid-typescript';

export class Task{
    title:string;
    status: TaskStatus;
    id;
    constructor(title:string){
        this.title=title;
        this.status=TaskStatus.Active;
        this.id=Guid.create();
    }
}