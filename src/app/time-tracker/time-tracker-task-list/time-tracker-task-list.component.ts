import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


import { TimeTrackerTaskStatus } from 'src/app/enum/enum';
import { Member } from 'src/app/model/member';
import { TimeTrackerTask } from 'src/app/model/time-tracker-task';
import { TimeTrackerTaskCategory } from 'src/app/model/TimeTrackerTaskCategory';
import { TaskService } from 'src/app/services/task.service';
import { TimeTrackerCategoryAddComponent } from '../time-tracker-category-add/time-tracker-category-add.component';
import { TimeTrackerTaskAddComponent } from '../time-tracker-task-add/time-tracker-task-add.component';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-time-tracker-task-list',
  templateUrl: './time-tracker-task-list.component.html',
  styleUrls: ['./time-tracker-task-list.component.css']
})
export class TimeTrackerTaskListComponent implements OnInit {

  @Input() member:Member;

  activeTasksDataSource!:MatTableDataSource<any>;
  completedTasksDataSource!:MatTableDataSource<any>;
  activeTasksDisplayedColumns:string[]=['id','title','category','description','startTime','endTime','expectedCompletionTime','status','priority','efficiency','edit','delete'];

  completedTasksDisplayedColumns:string[]=['id','title','category','description','startTime','endTime','expectedCompletionTime','status','priority','efficiency','delete'];

  allTasks:TimeTrackerTask[]=[];
  categories:TimeTrackerTaskCategory[]=[];
  activeTasks:TimeTrackerTask[]=[];
  completedTasks:TimeTrackerTask[]=[];

  @ViewChild('paginator') paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private taskService:TaskService, public addCategoryDialog:MatDialog,public addTaskDialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllCategoriesById(this.member.id);
    this.getAllTasksById(this.member.id);
  }

  public getAllCategoriesById(memberId:number){
    this.taskService.getAllCategoriesById(this.member.id).subscribe((data:any) => {
      //TODO: fetch categories from API and save in this.categories and parse json
      this.categories=data;
    });

    //Dummy data
    const category1=new TimeTrackerTaskCategory(1,'category1');
    const category2=new TimeTrackerTaskCategory(2,'category2');
    this.categories=[category1,category2];
  }

  public getAllTasksById(memberId:number){
    this.taskService.getAllCategoriesById(this.member.id).subscribe( (data:any) => {
      //TODO: fetch allTasks from API and save in this.allTasks and parse json
      this.allTasks=data;

      this.segregateTasks();
      this.matInit();

    });


    //Dummy data
      const task1=new TimeTrackerTask(1,'task1','desc1','category1',Date.now(),Date.now(),
      TimeTrackerTaskStatus.Active,2,40);
      task1.endTime=Date.now();
      const task2=new TimeTrackerTask(2,'task1','desc1','category1',Date.now(),Date.now(),TimeTrackerTaskStatus.Active,2,80);
      const task3=new TimeTrackerTask(3,'task1','desc1','category1',Date.now(),Date.now(),TimeTrackerTaskStatus.Done,2,80);
      task3.endTime=Date.now();
      const task4=new TimeTrackerTask(4,'task1','desc1','category1',Date.now(),Date.now(),TimeTrackerTaskStatus.Delayed,2,80);
      const task5=new TimeTrackerTask(5,'task1','desc1','category1',Date.now(),Date.now(),TimeTrackerTaskStatus.Delayed,2,80);
      this.allTasks=[task1,task2,task3,task4,task5];

      this.segregateTasks();
      this.matInit();

  }

  segregateTasks(){
    var j=0;var k=0;
    for (var i in this.allTasks){
      if(this.allTasks[i].status===TimeTrackerTaskStatus.Active)
        this.activeTasks[j++]=this.allTasks[i];
      else
        this.completedTasks[k++]=this.allTasks[i];
      console.log(this.allTasks[i].id);
    }
  }

  matInit(){
    this.completedTasksDataSource=new MatTableDataSource(this.completedTasks);
    this.activeTasksDataSource=new MatTableDataSource(this.activeTasks);
    
  }

  filterData($event:any){
    this.completedTasksDataSource.filter=$event.target.value;
  }

  ngAfterViewInit(){
    this.completedTasksDataSource.paginator=this.paginator;
    this.completedTasksDataSource.sort=this.sort;
  }

  endTask(task:TimeTrackerTask){
    console.log('end task called ',task.id);
    task.endTime=Date.now();
    task.status=TimeTrackerTaskStatus.Done;
    this.taskService.endTask(this.member.id,task).subscribe((data:any) => {
      if(true)    //Task edit successful
      {
        this.activeTasks.forEach((element,index)=>{
          if(element.id==task.id) 
          delete this.activeTasks[index];
        });
        this.completedTasks.push(task);
      }
    })

    //TODO: delete below code
    this.activeTasks.forEach((element,index)=>{
          if(element.id==task.id) 
          this.activeTasks.splice(index,1);
        });
    this.completedTasks.unshift(task);

    console.log("no. of active tasks ",this.activeTasks.length);
    console.log("no. of completed tasks ",this.completedTasks.length);

    this.activeTasksDataSource=new MatTableDataSource(this.activeTasks);
    this.completedTasksDataSource=new MatTableDataSource(this.completedTasks);

  }

  editActiveTask(task:TimeTrackerTask){
    //TODO: edit task
    console.log(task.title);
    let dialogRef=this.addTaskDialog.open(TimeTrackerTaskAddComponent,{data: {task:new TimeTrackerTask(task.id,task.title,task.category,task.description,task.startTime,task.expectedCompletionTime,task.status,task.priority,task.efficiency),
    userId:this.member.id}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result.event)
      console.log(result+" "+result.data+" "+result.event);

      this.activeTasks.unshift(result.data.task);
      this.activeTasksDataSource=new MatTableDataSource(this.activeTasks);

    })
  }

  deleteActiveTask(task:TimeTrackerTask){
    console.log('delete active task called ',task.id);

    this.taskService.deleteTask(this.member.id,task.id).subscribe((data:any) => {
      if(true)    //Task deletion successful
      {
        this.activeTasks.forEach((element,index)=>{
          if(element.id==task.id) 
          this.activeTasks.splice(index,1);
        })
      }
    })

    //TODO: delete below code
    this.activeTasks.forEach((element,index)=>{
          if(element.id==task.id) 
          this.activeTasks.splice(index,1);
    })

    this.activeTasksDataSource=new MatTableDataSource(this.activeTasks);
  }

  deleteCompletedTask(task:TimeTrackerTask){
    console.log('delete completed task called ',task.id);

    this.taskService.deleteTask(this.member.id,task.id).subscribe((data:any) => {
      if(true)    //Task deletion successful
      {
        this.completedTasks.forEach((element,index)=>{
          if(element.id==task.id) 
          this.completedTasks.splice(index,1);
        })
      }
    })

    //TODO: delete below code
    this.completedTasks.forEach((element,index)=>{
          if(element.id==task.id) 
          this.completedTasks.splice(index,1);
    })

    this.completedTasksDataSource=new MatTableDataSource(this.completedTasks);

  }


  onClickAddCategory(){
    let dialogRef=this.addCategoryDialog.open(TimeTrackerCategoryAddComponent,{data: this.member});

    dialogRef.afterClosed().subscribe( result=> {
      console.log("result of closeing dialog ",result);
    });
  }

  onClickAddTask(){
    let dialogRef=this.addTaskDialog.open(TimeTrackerTaskAddComponent,{data: {task:new TimeTrackerTask(-1,'','','',0,0,TimeTrackerTaskStatus.Active,0,0),
    userId:this.member.id}
  });

    dialogRef.afterClosed().subscribe((result) => {
      if(result.event)
      console.log(result+" "+result.data+" "+result.event);

      this.activeTasks.unshift(result.data.task);
      this.activeTasksDataSource=new MatTableDataSource(this.activeTasks);

    })
  }
}
