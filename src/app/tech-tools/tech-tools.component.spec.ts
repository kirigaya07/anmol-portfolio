import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechToolsComponent } from './tech-tools.component';
import { TOOLS_DESCRIPTION, TOOLS_ITEMS } from '../data/tech-tools.data';

describe('TechToolsComponent', () => {
  let component: TechToolsComponent;
  let fixture: ComponentFixture<TechToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use extracted tools data', () => {
    expect(component.tools).toBe(TOOLS_DESCRIPTION);
    expect(component.items).toEqual(TOOLS_ITEMS);
  });

  it('should include at least one tools item', () => {
    expect(component.items.length).toBeGreaterThan(0);
  });
});
