import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserType } from './enum/enum';
import { AuthGuard } from './helpers/auth.gaurd';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TimeAnalyzerComponent } from './time-analyzer/time-analyzer.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"todos", component:TodosComponent},
  //Define rules like which component can be accessed by which type of user.
  // {path:"time-tracker", component:TimeTrackerComponent, canActivate:[AuthGuard], data:{roles:[UserType.Admin]}},
  // {path:"time-analyzer",component:TimeAnalyzerComponent, canActivate:[AuthGuard], data:{ roles:[UserType.Admin] }},
  {path:"time-tracker", component:TimeTrackerComponent},
  {path:"time-analyzer", component:TimeAnalyzerComponent},
  {path:'**',redirectTo:''}       //Placed at last.This is used to display the Page not found error message, when the URL does not match any routes.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
