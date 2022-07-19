import { Component, OnInit } from '@angular/core';



class Student{
  id:string;
  name:string;
  bookList: Array<Book>|null;
  constructor(id: string, name: string, bookList: Array<Book>|null) {
    this.id = id;
    this.name = name;
    this.bookList = bookList;
  }
}

class Book{
  id:string;
  name:string;
  studentId:string;
  constructor(id: string, name: string, studentId: string) {
    this.id = id;
    this.name = name;
    this.studentId = studentId;
  }
}

const studentList:Array<Student> = [
  new Student('1','name 1',null),
  new Student('2','name 2',null),
  new Student('3','name 3',null)
]
const bookList:Array<Book> = [
  new Book('1','book 1','1'),
  new Book('2','book 2','1'),
  new Book('3','book 3','1'),
  new Book('4','book 4','1'),
  new Book('4','book 4','2'),
  new Book('5','book 5','2'),
  new Book('6','book 6','2')
]



@Component({
  selector: 'app-student-book-problem',
  templateUrl: './student-book-problem.component.html',
  styleUrls: ['./student-book-problem.component.scss']
})
export class StudentBookProblemComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.findStudentBookList(studentList,bookList);

  }


  findStudentBookList (studentList: Array<Student>, bookList: Array<Book>) {
    for(let i=0; i < studentList.length; i++) {
      for(let j=0; j < bookList.length; j++ ){
        let tempArray:Array<Book> = [];
        if(studentList[i].id == bookList[j].studentId){
          tempArray.push(bookList[j])
        }
        studentList[i].bookList = tempArray;
        //console.log(studentList)
      }
    }


  }






}
