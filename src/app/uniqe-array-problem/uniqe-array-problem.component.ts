import {Component, OnInit} from '@angular/core';

class Student {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class StudentWithBook {
  studentId: string;
  studentName: string;
  bookId: string;
  bookName: string;

  constructor(studentId: string, studentName: string, bookId: string, bookName: string) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.bookId = bookId;
    this.bookName = bookName;
  }
}


const StudentWithBookArray: Array<StudentWithBook> = [
  new StudentWithBook('1', 'student 1', '1', 'book 1'),
  new StudentWithBook('1', 'student 1', '2', 'book 2'),
  new StudentWithBook('1', 'student 1', '3', 'book 3'),
  new StudentWithBook('2', 'student 2', '3', 'book 3'),
  new StudentWithBook('2', 'student 2', '4', 'book 4'),
  new StudentWithBook('3', 'student 3', '3', 'book 3'),
]

const StudentArray: Array<Student> = [
  {id: '1', name: 'student 1'},
  {id: '2', name: 'student 2'}
]


@Component({
  selector: 'app-uniqe-array-problem',
  templateUrl: './uniqe-array-problem.component.html',
  styleUrls: ['./uniqe-array-problem.component.scss']
})
export class UniqeArrayProblemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    this.findUniqueArray(StudentWithBookArray);

  }

  findUniqueArray(studentWithBookList: Array<StudentWithBook>) {
    const resultList:Array<Student> = [];

    for (let i = 0; i < studentWithBookList.length; i++) {

      if(!this.isObjInArray(resultList,studentWithBookList[i].studentId)){
        resultList.push(new Student(studentWithBookList[i].studentId, studentWithBookList[i].studentName))
      }
    }
    console.log(resultList)
  }

  isObjInArray(resultList:Array<Student>, val:string ):boolean{
    for (let j = 0; j < resultList.length; j++) {
      if(resultList[j].id === val){
        return true;
      }
    }
    return false;
  }


}
