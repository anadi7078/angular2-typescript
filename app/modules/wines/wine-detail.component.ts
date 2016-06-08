import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import Wine from '../shared/types/wine';
import { WineService } from '../shared/services/wine.service';

@Component({
	selector: 'my-wine-detail',
	templateUrl: 'app/modules/wines/wine-detail.component.html',
	styleUrls: ['app/modules/wines/wine-detail.component.css']
})

export class WineDetailComponent implements OnInit {
	wine: Wine;
	constructor(
		private wineService: WineService,
		private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.wineService.getWine(id)
			.then(wine => this.wine = wine);
	}

	goBack() {
		window.history.back();
	}
}