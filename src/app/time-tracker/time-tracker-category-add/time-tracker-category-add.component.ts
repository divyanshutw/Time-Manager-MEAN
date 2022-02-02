import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/model/member';
import { FormBuilder,Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-time-tracker-category-add',
  templateUrl: './time-tracker-category-add.component.html',
  styleUrls: ['./time-tracker-category-add.component.css']
})
export class TimeTrackerCategoryAddComponent implements OnInit {

  addCategoryForm:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:Member, formBuilder:FormBuilder,private taskService:TaskService) { 
    this.addCategoryForm=formBuilder.group({
      category:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get category(){
    return this.addCategoryForm.get('category');
  }

  onClickSubmit(){
    console.log("close called;")
    this.taskService.addCategory(this.data.id,this.addCategoryForm.value.category).subscribe((data:any) => {
      //TODO: call api and show error msg if any
    })
  }
}
