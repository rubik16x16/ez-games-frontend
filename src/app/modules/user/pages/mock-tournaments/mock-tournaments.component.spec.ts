import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockTournamentsComponent } from './mock-tournaments.component';

describe('MockTournamentsComponent', () => {
  let component: MockTournamentsComponent;
  let fixture: ComponentFixture<MockTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockTournamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
