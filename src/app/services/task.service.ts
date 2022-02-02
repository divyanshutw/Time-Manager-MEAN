import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { TimeTrackerTask } from '../model/time-tracker-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url="";

  constructor(private http:HttpClient) {} 

  public getAllCategoriesById(userId:number){
    //TODO:
    return this.http.get(this.url);
  }

  public addCategory(userId:any,categoryTitle:string){
    //TODO:
    return this.http.get(this.url);
  }

  public getAllTasksById(userId:any){
    //TODO:
    return this.http.get(this.url);
  }

  public addTask(userId:number,task:TimeTrackerTask){
    //TODO:
    return this.http.get(this.url);
  }

  public deleteTask(userId:number,taskId:number)
  {
    //TODO:
    return this.http.get(this.url);
  }  

  public editTask(userId:number,task:TimeTrackerTask)
  {
    //TODO:
    return this.http.get(this.url);
  }
  public endTask(userId:number,task:TimeTrackerTask)
  {
    //TODO:
    return this.http.get(this.url);
  }
  
}
