import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeContainerComponent } from './coffee-container.component';

describe('CoffeeContainerComponent', () => {
  let component: CoffeeContainerComponent;
  let fixture: ComponentFixture<CoffeeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
