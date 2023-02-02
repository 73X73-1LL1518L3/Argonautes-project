import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgonauteListComponent } from './argonaute-list.component';

describe('ArgonauteListComponent', () => {
  let component: ArgonauteListComponent;
  let fixture: ComponentFixture<ArgonauteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgonauteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgonauteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
