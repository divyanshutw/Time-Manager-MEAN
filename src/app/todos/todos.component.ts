import { Component, OnInit } from '@angular/core';
import {Task} from 'src/app/model/task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  ngOnInit(): void {
  }

  tasks:Task[];
  constructor() {
    this.tasks=[];
  }


  addTaskEventEmitter($event:any){
    this.tasks.push(new Task($event.taskTitle));
    console.log("tasks",this.tasks);
  }
}
