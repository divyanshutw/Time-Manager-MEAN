import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserType } from '../enum/enum';
import { Member } from '../model/member';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isAdmin:boolean;
  memberArr:Member[];
  currentMemberId:number;
  currentMemberName:string;
  currentMember:Member;

  constructor(private breakpointObserver: BreakpointObserver) {
    const parsedJson=JSON.parse(localStorage.getItem('currentUser')|| '{}');

    this.isAdmin=parsedJson['role'] == UserType.Admin;
    this.currentMemberId=parsedJson['id'];
    this.currentMemberName=parsedJson['fullname'];
    // this.showMemberData(this.currentMemberId,this.currentMemberName);

    if(this.isAdmin){
      const member=new Member(parsedJson['id'],'My tasks');
      this.memberArr=parsedJson['members'];
      this.memberArr.unshift(member);
    }
  }

  

}
