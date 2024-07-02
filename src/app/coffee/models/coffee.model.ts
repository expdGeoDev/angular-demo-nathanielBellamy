import { Roast } from '../types/roast.type';

export interface Coffee {
	id: number;
	name: string;
	decaf: boolean;
	mgCaffeinePerServing: number;
	mlServingSize: number;
	brand: string;
	wholeBean: boolean;
	grind?: number;
	singleOrigin: boolean;
	flavorNotes: string[];
	roast: Roast;
}
