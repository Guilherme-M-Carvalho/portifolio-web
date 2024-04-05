import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCodeComponent } from './tree-code.component';

describe('TreeCodeComponent', () => {
  let component: TreeCodeComponent;
  let fixture: ComponentFixture<TreeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
