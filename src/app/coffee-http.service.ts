import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee/models/coffee.model';

@Injectable({
	providedIn: 'root',
})
export class CoffeeHttpService {
	baseUrl = 'http://localhost:8000';
	constructor(private client: HttpClient) {}

	getAllBeans(): Observable<Coffee[]> {
		return this.client.get<Coffee[]>(`${this.baseUrl}/coffee`);
	}
}
