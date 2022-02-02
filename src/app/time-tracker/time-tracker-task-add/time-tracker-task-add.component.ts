import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeTrackerTaskStatus } from 'src/app/enum/enum';
import { Task } from 'src/app/model/task';
import { TimeTrackerTask } from 'src/app/model/time-tracker-task';
import { TimeTrackerTaskCategory } from 'src/app/model/TimeTrackerTaskCategory';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-time-tracker-task-add',
  templateUrl: './time-tracker-task-add.component.html',
  styleUrls: ['./time-tracker-task-add.component.css'],
  providers:[DatePipe]
})
export class TimeTrackerTaskAddComponent implements OnInit {

  addTaskForm:any;
  isNewTask:boolean;
  isTaskFromTodo:boolean;
  newTask=new TimeTrackerTask(-3,'','','',0,0,TimeTrackerTaskStatus.Active,0,0);
  userId:number;
  categories:TimeTrackerTaskCategory[]=[];
  currentCategory:TimeTrackerTaskCategory;
  timeError:string="";

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,formBuilder:FormBuilder,private taskService:TaskService,public datepipe: DatePipe,private dialogRef: MatDialogRef<TimeTrackerTaskAddComponent>) { 
    this.isNewTask=data['task'].id==-1;
    this.isTaskFromTodo=data['task'].id==-2;

    if(this.isTaskFromTodo)
    this.newTask.title=data['task'].title;
    else if(!this.isNewTask){   //Task is neither from todo nor is a new task....means an active task is being edited;
      this.newTask=data['task'];
    }
    this.userId=data['userId'];
    console.log("task id ",data['task'].id);

    if(!this.isNewTask){    //Editing current task

    }

    this.addTaskForm=formBuilder.group({
      taskTitle:['',[Validators.required]],
      taskCategory:['',[Validators.required]],
      taskDescription:['',[Validators.required]],
      expectedCompletionTime:['',[Validators.required]],
      priority:['',[Validators.required, Validators.pattern("^[0-9]*$")]]
    });

    
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  formatDateTime(dateVal:any) : number{
    const date=dateVal.substring(0,4)+dateVal.substring(5,7)+dateVal.substring(8,10)+dateVal.substring(11,13)+dateVal.substring(14,16);
    return date;
  }

  onClickSubmit(){
    const dateVal=this.addTaskForm.value.expectedCompletionTime;
    const date=this.formatDateTime(dateVal);
    
    const curTime=this.datepipe.transform(Date.now(),'yyyyMMddhhmm');
    console.log(curTime);
    if(date<Number(curTime))
    this.timeError="Invalid expected completion time";

    else{
      const task=new TimeTrackerTask(0,this.addTaskForm.value.taskTitle,this.addTaskForm.value.taskCategory.categoryTitle,this.addTaskForm.value.taskDescription,Date.now(),this.addTaskForm.value.expectedCompletionTime,TimeTrackerTaskStatus.Active,this.addTaskForm.value.priority,0);
      this.taskService.addTask(this.userId,task).subscribe( (data:any) => {
        //TODO: call api and show error msg if any
      });

      this.dialogRef.close({event:"success",data:{task:task,userId:this.userId}});
    }

    
  }


  getAllCategories(){
    this.taskService.getAllCategoriesById(this.userId).subscribe( (data:any) => {
      //TODO call api and store all categoruies in categories[]
    });
    
    //TODO: add all categories
    this.categories=[new TimeTrackerTaskCategory(1,'Project'),new TimeTrackerTaskCategory(2,'Assignment'),new TimeTrackerTaskCategory(3,'Self study')];
  }

  timeChange(event:any){
    const date=this.formatDateTime(event.target.value);
    const curTime=this.datepipe.transform(Date.now(),'yyyyMMddhhmm');
    if(date<Number(curTime)){
      this.timeError="Invalid expected completion time";
    }
    else
    this.timeError="";
  }

  get taskTitle(){
    return this.addTaskForm.get('taskTitle');
  }
  get taskCategory(){
    return this.addTaskForm.get('taskCategory');
  }
  get taskDescription(){
    return this.addTaskForm.get('taskDescription');
  }
  get expectedCompletionTime(){
    return this.addTaskForm.get('expectedCompletionTime');
  }
  get priority(){
    return this.addTaskForm.get('priority');
  }

}
