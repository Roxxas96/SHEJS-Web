import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatsComponent } from './debats.component';

describe('DebatsComponent', () => {
  let component: DebatsComponent;
  let fixture: ComponentFixture<DebatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
