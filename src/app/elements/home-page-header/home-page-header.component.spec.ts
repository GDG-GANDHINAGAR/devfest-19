import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeaderComponent } from './home-page-header.component';

describe('HomePageHeaderComponent', () => {
  let component: HomePageHeaderComponent;
  let fixture: ComponentFixture<HomePageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
