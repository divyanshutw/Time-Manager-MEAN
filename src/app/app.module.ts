import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { TimeAnalyzerComponent } from './time-analyzer/time-analyzer.component';
import { TodosComponent } from './todos/todos.component';

//Reactive Forms
import {ReactiveFormsModule} from "@angular/forms"

//Template driven form
import { FormsModule } from '@angular/forms';

//Material
import{MatListModule} from '@angular/material/list';
import{MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import { MatDialogModule  } from '@angular/material/dialog';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component'


import { HttpClientModule } from '@angular/common/http';

import { EqualValidator } from './login/equal-validator';
import { TimeTrackerTaskAddComponent } from './time-tracker/time-tracker-task-add/time-tracker-task-add.component';
import { TimeTrackerTaskListComponent } from './time-tracker/time-tracker-task-list/time-tracker-task-list.component';
import { TimeTrackerCategoryAddComponent } from './time-tracker/time-tracker-category-add/time-tracker-category-add.component';
import { DashboardComponent } from './time-analyzer/dashboard/dashboard.component';

//For charts
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashComponent } from './time-analyzer/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './time-analyzer/card/card.component';
import { EfficiencyChartComponent } from './time-analyzer/charts/efficiency-chart/efficiency-chart.component';
import { TotalHoursChartComponent } from './time-analyzer/charts/total-hours-chart/total-hours-chart.component';
import { TotalTasksChartComponent } from './time-analyzer/charts/total-tasks-chart/total-tasks-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TimeTrackerComponent,
    TimeAnalyzerComponent,
    TodosComponent,
    TaskListComponent,
    TaskAddComponent,
    EqualValidator,
    TimeTrackerTaskAddComponent,
    TimeTrackerTaskListComponent,
    TimeTrackerCategoryAddComponent,
    DashboardComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    EfficiencyChartComponent,
    TotalHoursChartComponent,
    TotalTasksChartComponent
  ],
  entryComponents:[TimeTrackerCategoryAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    NgChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
