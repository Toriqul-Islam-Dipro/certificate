import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqeArrayProblemComponent } from './uniqe-array-problem.component';

describe('UniqeArrayProblemComponent', () => {
  let component: UniqeArrayProblemComponent;
  let fixture: ComponentFixture<UniqeArrayProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqeArrayProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqeArrayProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
