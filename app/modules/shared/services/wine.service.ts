import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Wines } from '../../../data/mock-wines';

@Injectable()
export class WineService {

	constructor(private http: Http) { }

	getWines(): Promise<Wine[]> {
		return this.http.get('app/data/wines.json')
			.toPromise()
			.then(response => response.json().wines)
			.catch(this.handleError);
	}

	getWine(id: number) {
		return this.getWines()
			.then(wines => wines.filter(wine => wine.id === id)[0]);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}