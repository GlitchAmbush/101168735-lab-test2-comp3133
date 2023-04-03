import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiondetailsComponent } from './missiondetails.component';

describe('MissiondetailsComponent', () => {
  let component: MissiondetailsComponent;
  let fixture: ComponentFixture<MissiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissiondetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
