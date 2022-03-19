import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTournamentModalComponent } from './register-tournament-modal.component';

describe('RegisterTournamentModalComponent', () => {
  let component: RegisterTournamentModalComponent;
  let fixture: ComponentFixture<RegisterTournamentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTournamentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTournamentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
