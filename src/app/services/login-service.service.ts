import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserType } from '../enum/enum';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Member } from '../model/member';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  //TODO: Add login api url here;
  url="http://192.168.2.1:1521"

  private _user:BehaviorSubject<User>; 
  user:Observable<User>;

  constructor(private http:HttpClient) { 
    this._user=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}')); 
    this.user=this._user.asObservable();
  }

  public get currentUserValue():User{
    return this._user.value;
  }

  login(username:string, password:string){
    //TODO: remove these lines after adding API
    const member1=new Member(1,"dhiraj");
    const member2=new Member(2,"vishnu");
    const member3=new Member(3,"sam");
    const userJson:User={ id: 1, username: 'admin', password: 'admin', fullname:'user', role: UserType.Admin, members:[member1,member2,member3]};
    localStorage.setItem('currentUser', JSON.stringify(userJson));


    
    return this.http.post<any>(`${this.url}/login`,{username,password})
      .pipe(map(user => {
        user={ id: 1, username: 'admin', password: 'admin', fullname:'user', role: UserType.User };
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this._user.next(user);
        }

        return user;
      }));


    
  }

  logout(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userType');
    localStorage.removeItem('currentUser');
    this._user.next(new User());
  }
}
