import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { ABOUT_ME, EDUCATION, WORK_EXPERIENCE } from '../data/about.data';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind static about data', () => {
    expect(component.aboutme).toBe(ABOUT_ME);
    expect(component.work).toEqual(WORK_EXPERIENCE);
    expect(component.education).toEqual(EDUCATION);
  });

  it('should expose work entries', () => {
    expect(component.work.length).toBeGreaterThan(0);
  });
});
