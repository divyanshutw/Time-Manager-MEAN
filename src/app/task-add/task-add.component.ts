import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TimeTrackerTaskStatus } from '../enum/enum';
import { TimeTrackerTask } from '../model/time-tracker-task';
import { TimeTrackerTaskAddComponent } from '../time-tracker/time-tracker-task-add/time-tracker-task-add.component';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() addTaskEventEmitter = new EventEmitter();
  taskForm:FormGroup;
  constructor(private formBuilder:FormBuilder,public addTaskDialog:MatDialog) { }

  ngOnInit(): void {
    this.taskForm=this.formBuilder.group({
      taskTitle:["",[Validators.required]]
    });
  }
  onKeyPress($event:any){
    if(this.taskForm.valid){
      //TODO: call addTodo api
      this.addTaskEventEmitter.emit(this.taskForm.value);
      this.taskForm.patchValue({
        taskTitle:''
      });
    }
  }

  onClickAdd(){
    if(this.taskForm.valid){
      //TODO: call addTodo api
      this.addTaskEventEmitter.emit(this.taskForm.value);
      this.taskForm.patchValue({
        taskTitle:''
      });
    }
  }

  onClickAddAsTask(){
    if(this.taskForm.valid){
      //TODO: call addTodo api
      const parsedJson=JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let dialogRef=this.addTaskDialog.open(TimeTrackerTaskAddComponent,{data: {task:new TimeTrackerTask(-2,this.taskForm.value.taskTitle,'','',0,0,TimeTrackerTaskStatus.Active,0,0),
      userId:parsedJson['id']}
    });
      this.addTaskEventEmitter.emit(this.taskForm.value);
      this.taskForm.patchValue({
        taskTitle:''
      });
      console.log(this.taskForm.value)

      
    }
    
  }

  get taskTitle(){
    return this.taskForm.get('taskTitle');
  }

}
