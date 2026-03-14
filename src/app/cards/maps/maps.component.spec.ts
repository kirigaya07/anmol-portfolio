import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsComponent } from './maps.component';

describe('MapsComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loaded state on map load', () => {
    component.onMapLoad();
    expect(component.mapLoaded).toBeTrue();
    expect(component.mapFailed).toBeFalse();
  });

  it('should set failed state on map error', () => {
    component.onMapError();
    expect(component.mapLoaded).toBeFalse();
    expect(component.mapFailed).toBeTrue();
  });
});
