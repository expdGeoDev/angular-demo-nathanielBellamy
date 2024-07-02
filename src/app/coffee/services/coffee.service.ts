import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Coffee } from '../models/coffee.model';

@Injectable()
export class CoffeeService {
	private baseUrl = 'http://localhost:8000';
	constructor(private http: HttpClient) { }

	getAll(): Observable<Coffee[]> {
		return this.http.get<Coffee[]>(this.baseUrl + "/coffee")
	}

	create(newCoffee: Coffee): Observable<Coffee> {
		return this.http.post<Coffee>(this.baseUrl + "/coffee", newCoffee)
	}

}
