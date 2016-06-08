import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import Wine from '../shared/types/wine';
import { WineService } from '../shared/services/wine.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/modules/dashboard/dashboard.component.html',
  styleUrls: ['app/modules/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	wines: Wine[] = [];
	constructor(private router: Router, private wineService: WineService) { }
	ngOnInit() {
		this.wineService.getWines()
			.then(wines => this.wines = wines.slice(1, 5));
	}
	gotoDetail(wine: Wine) {
		let link = ['WineDetail', { id: wine.id }];
	  this.router.navigate(link);
	}
}