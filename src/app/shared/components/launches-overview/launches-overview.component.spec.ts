import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesOverviewComponent } from './launches-overview.component';

describe('LaunchesOverviewComponent', () => {
  let component: LaunchesOverviewComponent;
  let fixture: ComponentFixture<LaunchesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
