import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPicksComponent } from './editor-picks.component';

describe('EditorPicksComponent', () => {
  let component: EditorPicksComponent;
  let fixture: ComponentFixture<EditorPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
