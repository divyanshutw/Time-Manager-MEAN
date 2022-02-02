import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  time:any;
  hours:number;
  msg:string;
  link:string;
  name:string;

  ngOnInit(): void {
    this.getCurrentDate();
  }

  constructor(){
    const parsedJson=JSON.parse(localStorage.getItem('currentUser')|| '{}');
    this.name=parsedJson['fullname'];
  }

  
  getCurrentDate() {
    setInterval(() => {
      this.decide();
      this.time = new Date(); 
    }, 1000);
  }

  
  decide() {
    this.hours = new Date().getHours(); 
    if (this.hours < 10) {
      this.msg = "Good Morning";
      this.link = "wwww.google.com" 
    } 
    else if (this.hours < 16) {
      this.msg = "Good Afternoon";
      this.link = "wwww.tokopedia.com"
    } 
    else if (this.hours < 19) {
      this.msg = "Good Evening"
    } 
    else if (this.hours < 24) { 
      this.msg = "Good Night"
      this.link = "wwww.sprout.co.id"
    } 
    else if (this.hours < 6) {
      this.msg = "Sleep lah" 
      this.link = "www.mangabat.com" 
    }
  }
}

