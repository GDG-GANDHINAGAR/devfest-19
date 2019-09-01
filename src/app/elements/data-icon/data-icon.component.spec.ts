import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIconComponent } from './data-icon.component';

describe('DataIconComponent', () => {
  let component: DataIconComponent;
  let fixture: ComponentFixture<DataIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
