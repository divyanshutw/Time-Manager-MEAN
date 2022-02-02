import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  map(({ matches }) => {
    if (matches) {
      return {        //For mobile
        columns: 3,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },    //a chart will span 3 cols and 2 rows
        table: { cols: 1, rows: 4 },
      };
    }

    return {        //For desktop
      columns: 4,
      miniCard: { cols: 1, rows: 1 },
      chart: { cols: 2, rows: 2 },
      table: { cols: 4, rows: 4 },
    };
  })
);


  @Input() member:Member;
  constructor(private breakpointObserver: BreakpointObserver) {}
}