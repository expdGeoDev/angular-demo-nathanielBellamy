import { Component, Input } from '@angular/core';
import { Coffee } from '../models/coffee.model';
import { GrindRating } from '../enums/grind-rating.enum';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent {

	@Input() list: Coffee[] = [];


	protected readonly GrindRating = GrindRating;
}
