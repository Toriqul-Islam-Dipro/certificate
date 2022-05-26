import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {


// server: boolean = false;
// serverBlue: boolean = false;

  courses = [
    {id: 1001, name: 'Angular Basic', author: 'Ashraful Alam', duration: 48, type: 'Premium', price: '100.00', rating: 4.5, image: 'assets/images/angular.png', description: 'In this course you will learn the fundamental of Angular. This Course is purely designed for the begginers'},
    {id: 1002, name: 'React Basic', author: 'Asif Sadmine', duration: 55, type: 'Premium', price: '120.00', rating: 4.7, image: 'assets/images/react.png', description: 'In this course you will learn the fundamental of Angular. This Course is purely designed for the begginers'},
    {id: 1003, name: 'Vue Basic', author: 'Tamim Shahriar', duration: 35, type: 'Free', price: '0.00', rating: 3.5, image: 'assets/images/vue.png', description: 'In this course you will learn the fundamental of Angular. This Course is purely designed for the begginers'},
  ]

closeNotification: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  // onCloseNotification () {
  //   this.closeNotification = true;
  //
  // }




}
