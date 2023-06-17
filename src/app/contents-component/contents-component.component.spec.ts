import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsComponentComponent } from './contents-component.component';

describe('ContentsComponentComponent', () => {
  let component: ContentsComponentComponent;
  let fixture: ComponentFixture<ContentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
