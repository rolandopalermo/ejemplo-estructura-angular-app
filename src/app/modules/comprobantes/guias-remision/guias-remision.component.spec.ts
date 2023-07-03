import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasRemisionComponent } from './guias-remision.component';

describe('GuiasRemisionComponent', () => {
  let component: GuiasRemisionComponent;
  let fixture: ComponentFixture<GuiasRemisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasRemisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasRemisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
