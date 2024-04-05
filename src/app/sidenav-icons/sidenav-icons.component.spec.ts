import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavIconsComponent } from './sidenav-icons.component';

describe('SidenavIconsComponent', () => {
  let component: SidenavIconsComponent;
  let fixture: ComponentFixture<SidenavIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
