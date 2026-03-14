import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingProfilesComponent } from './coding-profiles.component';

describe('CodingProfilesComponent', () => {
  let component: CodingProfilesComponent;
  let fixture: ComponentFixture<CodingProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingProfilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
