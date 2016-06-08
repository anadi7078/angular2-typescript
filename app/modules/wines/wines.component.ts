import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import Wine from '../shared/types/wine';
import { WineDetailComponent } from './wine-detail.component';
import { WineService } from '../shared/services/wine.service';

@Component({
    selector: 'my-wines',
    templateUrl: 'app/modules/wines/wines.component.html',
    styleUrls: ['app/modules/wines/wines.component.css'],
	directives: [WineDetailComponent]
})

export class WinesComponent implements OnInit {
	title = 'Wines';
	selectedWine: Wine;
	public wines: Wine[];

    constructor(private router: Router, private wineService: WineService) { }

	ngOnInit() {
		this.getWines();
	}

	onSelect(wine: Wine) {
        this.selectedWine = wine;
    }

	getWines() {
		this.wineService.getWines().then(wines => this.wines = wines);
	}

	gotoDetail() {
		this.router.navigate(['WineDetail', { id: this.selectedWine.id }]);
	}
}


