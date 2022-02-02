import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../enum/enum';
import {Task} from 'src/app/model/task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks:any;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(task:Task){
    if(task.status == TaskStatus.Active){
      task.status=TaskStatus.Done;
      //TODO: Mark as done
    }
    else{
      task.status=TaskStatus.Active;
      //TODO: Unmark
    }
  }

  deleteTask(task:Task){
    let index=this.tasks.findIndex((item:Task) => item['id'] == task.id);
    this.tasks.splice(index,1);
  }

}
