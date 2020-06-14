import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketOverviewComponent } from './rocket-overview.component';

describe('RocketOverviewComponent', () => {
  let component: RocketOverviewComponent;
  let fixture: ComponentFixture<RocketOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
