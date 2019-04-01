import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyWrapperComponentComponent } from './formly-wrapper-component.component';

describe('FormlyWrapperComponentComponent', () => {
  let component: FormlyWrapperComponentComponent;
  let fixture: ComponentFixture<FormlyWrapperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyWrapperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
