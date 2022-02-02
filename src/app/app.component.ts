import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';  
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TimeManager';

  isUserLoggedIn:boolean;
  showLoginComponent:boolean=false;
  showHomeComponent:boolean=true;

  constructor(private router: Router,private loginService:LoginServiceService){
    //TODO: In todos and other components, get user details 
    if(localStorage.getItem('jwtToken')){
      this.loginUser();
    }
    else{
      this.isUserLoggedIn=false;
    }
  }

  ngOnInit(){

    
  }

  onClickLoginLogout($event:Event){
    if(this.isUserLoggedIn){
      //TODO: Logout code
      this.loginService.logout();
      this.showLoginComponent=false;
      this.isUserLoggedIn=false;
      // this.router.navigate(['/login']);

    }
    else{
      this.showLoginComponent=true;
    }
  }

  onLoginSuccess(){
    this.isUserLoggedIn=true;
    this.showLoginComponent=false;
    this.showHomeComponent=false;
  }

  onClickCloseLogin($event:any){
    this.showLoginComponent=false;
  }
  loginUser(){
    this.isUserLoggedIn=true;
    this.showLoginComponent=false;
    this.router.navigate(['/home']);
  }

}
