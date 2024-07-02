import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRow, MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { Coffee } from '../models/coffee.model';
import { GrindRating } from '../enums/grind-rating.enum';
import { Roast } from '../types/roast.type';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
	imports: [
		ReactiveFormsModule,
		MatChipRow,
		MatIcon,
		MatChipInput,
		MatChipGrid,
		MatLabel,
		MatFormField,
		FormsModule,
		NgIf,
	],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCoffeeFormComponent {

	protected newFlavorNote: string = ""
	protected coffeeForm: FormGroup

	@Output() newCoffeeEvent = new EventEmitter<Coffee>();
	@Output() cancelEvent = new EventEmitter();

	constructor(private http: HttpClient) {

		this.coffeeForm = new FormGroup({
			name: new FormControl<string>("", [
				Validators.minLength(3),
				Validators.required
			]),
			brand: new FormControl<string>("", [
				Validators.minLength(3),
				Validators.required
			]),
			mgCaffeinePerServing: new FormControl<number>(0, [
				Validators.min(0),
				Validators.max(1000),
				Validators.required
			]),
			mlServingSize: new FormControl<number>(1, [
				Validators.min(1),
				Validators.max(1000),
				Validators.required
			]),
			decaf: new FormControl<boolean>(false),
			wholeBean: new FormControl<boolean>(false),
			grind: new FormControl<number>(0),
			roast: new FormControl<Roast | null>(null),
			singleOrigin: new FormControl<boolean>(false),
			flavorNotes: new FormArray([])
		})
	}

	get flavorNotes(): FormArray {
		return <FormArray> this.coffeeForm.get('flavorNotes')
	}

	handleSubmit() {
		if (this.coffeeForm.valid) {
			this.newCoffeeEvent.emit(this.coffeeForm.value)
			this.flavorNotes.reset()
			this.coffeeForm.reset()
		}
	}

	ngOnDestroy() {
		this.flavorNotes.reset()
		this.coffeeForm.reset()
	}

	handleCancelClick() {
		this.flavorNotes.reset()
		this.coffeeForm.reset()
		this.cancelEvent.emit()
	}

	handleResetClick() {
		this.flavorNotes.reset()
		this.coffeeForm.reset()
	}

	handleFlavorNoteInput(e: any): void {
		const note: string = e.target.value
		this.newFlavorNote = note
	}
	addFlavorNote(note: any): void {
		const value = note.trim()

		if (value.length > 2) this.flavorNotes.push(this.newFlavorNoteFormControl(value))
		this.newFlavorNote = ""
	}

	removeFlavorNote(index: number): void {
		this.flavorNotes.removeAt(index)
	}

	newFlavorNoteFormControl(note: string) {
		return new FormControl(note, [Validators.minLength(3)])
	}

	preventEnterRemove(e: any) {
		e.preventDefault()
	}

	protected readonly GrindRating = GrindRating;
	protected readonly JSON = JSON;
}
