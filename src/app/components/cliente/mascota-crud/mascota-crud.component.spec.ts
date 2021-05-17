import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaCrudComponent } from './mascota-crud.component';

describe('MascotaCrudComponent', () => {
  let component: MascotaCrudComponent;
  let fixture: ComponentFixture<MascotaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
