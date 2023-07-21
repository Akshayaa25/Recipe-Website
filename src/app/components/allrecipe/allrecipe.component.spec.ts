import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrecipeComponent } from './allrecipe.component';

describe('AllrecipeComponent', () => {
  let component: AllrecipeComponent;
  let fixture: ComponentFixture<AllrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllrecipeComponent]
    });
    fixture = TestBed.createComponent(AllrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
