  import { Component }       from '@angular/core';
  import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
  import { Title }     from '@angular/platform-browser';

  import { WineService }  from '../shared/services/wine.service';
  import { DashboardComponent } from '../dashboard/dashboard.component';
  import { WinesComponent } from '../wines/wines.component';
  import { WineDetailComponent } from '../wines/wine-detail.component';
  @Component({
    selector: 'my-app',
    template: `
      <h1>{{header}}</h1>
       <nav>
        <a [routerLink]="['Dashboard']" (click)="setTitle( 'Dashboard' )">Dashboard</a>
        <a [routerLink]="['Wines']" (click)="setTitle( 'Wines' )">Wines</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/modules/core/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS,
      WineService
    ]
  })

  @RouteConfig([
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true
    },
    {
      path: '/wines',
      name: 'Wines',
      component: WinesComponent
    },
    {
      path: '/detail/:id',
      name: 'WineDetail',
      component: WineDetailComponent
    }
  ])

  export class AppComponent {
    public constructor(private titleService: Title ) { }
     public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
     }
    header = 'Cellar Master';
  }