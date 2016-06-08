import { Injectable } from '@angular/core';

import { Wines } from '../../../data/mock-wines';

@Injectable()
export class WineService {
	getWines() {
		return Promise.resolve(Wines);
	}

	getWineslowly() {
		return new Promise<Wine[]>(resolve =>
			setTimeout(() => resolve(Wines), 2000) // 2 seconds
		);
	}

	getWine(id: number) {
		return this.getWines()
			.then(wines => wines.filter(wine => wine.id === id)[0]);
	}
}