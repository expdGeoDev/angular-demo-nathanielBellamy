import { Component } from '@angular/core';
import { CoffeeListComponent } from '../coffee-list/coffee-list.component';
import { AddCoffeeFormComponent } from '../add-coffee-form/add-coffee-form.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Coffee } from '../models/coffee.model';
import { CoffeeService } from '../services/coffee.service';
import { Observable, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-coffee-container',
  standalone: true,
	imports: [
		CoffeeListComponent,
		AddCoffeeFormComponent,
		NgIf,
		AsyncPipe,
	],
	providers: [
		CoffeeService
	],
  templateUrl: './coffee-container.component.html',
  styleUrl: './coffee-container.component.css'
})
export class CoffeeContainerComponent {
	private coffeeList: Coffee[] = []
	protected coffeeList$: Observable<Coffee[]>
	constructor(private coffeeService: CoffeeService) {
		this.coffeeList$ = coffeeService.getAll()
		this.coffeeList$.subscribe(coffeeList => this.coffeeList = coffeeList)
	}

	protected addingNewCoffee: boolean = false

	saveCoffee(newCoffee: Coffee) {
		this.addingNewCoffee = false
		this.coffeeService.create(newCoffee).pipe(
			take(1),
			switchMap(() => {
				this.coffeeList$ = this.coffeeService.getAll().pipe(take(1))
				this.coffeeList$.subscribe(coffeeList => this.coffeeList = coffeeList)
				return this.coffeeList$
			}),
			tap(coffeeList => this.coffeeList = coffeeList),
		).subscribe()
	}

	handleAddCoffeeClick() {
		this.addingNewCoffee = true;
	}

	cancelAddCoffee() {
		this.addingNewCoffee = false;
	}
}
