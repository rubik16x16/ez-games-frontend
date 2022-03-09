import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNftComponent } from './our-nft.component';

describe('OurNftComponent', () => {
  let component: OurNftComponent;
  let fixture: ComponentFixture<OurNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
