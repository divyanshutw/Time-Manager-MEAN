import { Component, OnInit } from '@angular/core';
import { UserType } from '../enum/enum';
import { Member } from '../model/member';

@Component({
  selector: 'app-time-analyzer',
  templateUrl: './time-analyzer.component.html',
  styleUrls: ['./time-analyzer.component.css']
})
export class TimeAnalyzerComponent implements OnInit {

  isAdmin:boolean;
  memberArr:Member[];
  currentMemberId:number;
  currentMemberName:string;
  currentMember:Member;
    showSidebar:boolean=true;


  constructor() { 
    const parsedJson=JSON.parse(localStorage.getItem('currentUser')|| '{}');

    this.isAdmin=parsedJson['role'] == UserType.Admin;
    this.currentMemberId=parsedJson['id'];
    this.currentMemberName=parsedJson['fullname'];
    this.showMemberData(this.currentMemberId,this.currentMemberName);

    if(this.isAdmin){
      const member=new Member(parsedJson['id'],'My tasks');
      this.memberArr=parsedJson['members'];
      this.memberArr.unshift(member);
    }
  }

  toggleSidebar(){
    this.showSidebar=!this.showSidebar;
  }

  showMemberData(memberId:number,memberName:string){
    this.currentMemberId=memberId;
    this.currentMemberName=memberName;
    this.currentMember=new Member(this.currentMemberId,this.currentMemberName);
  }

  ngOnInit(): void {
  }

}
