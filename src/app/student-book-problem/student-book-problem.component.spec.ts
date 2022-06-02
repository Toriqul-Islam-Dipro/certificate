import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookProblemComponent } from './student-book-problem.component';

describe('StudentBookProblemComponent', () => {
  let component: StudentBookProblemComponent;
  let fixture: ComponentFixture<StudentBookProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBookProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBookProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
