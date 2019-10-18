import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatueDetailComponent } from './statue-detail.component';

describe('StatueDetailComponent', () => {
  let component: StatueDetailComponent;
  let fixture: ComponentFixture<StatueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
