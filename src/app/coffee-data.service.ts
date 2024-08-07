import { Injectable } from '@angular/core';
import { coffeeData } from '../data/coffee-data';
import { Coffee } from './coffee/models/coffee.model';

@Injectable({
	providedIn: 'root',
})
export class CoffeeDataService {
	coffeeData: Coffee[];
	constructor() {
		this.coffeeData = coffeeData;
	}

	getAllBeans(): Coffee[] {
		return this.coffeeData;
	}

	findById(id: number): Coffee | undefined {
		return this.coffeeData.find((coffee) => coffee.id === id);
	}

	findByBrand(brandName: string): Coffee[] | undefined {
		return this.coffeeData.filter((coffee) => coffee.brand === brandName);
	}
}
