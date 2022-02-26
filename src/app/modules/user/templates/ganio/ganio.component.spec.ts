import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanioComponent } from './ganio.component';

describe('GanioComponent', () => {
  let component: GanioComponent;
  let fixture: ComponentFixture<GanioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
