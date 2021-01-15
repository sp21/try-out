import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSComponent } from './modal-s.component';

describe('ModalSComponent', () => {
  let component: ModalSComponent;
  let fixture: ComponentFixture<ModalSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
