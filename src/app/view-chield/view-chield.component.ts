import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-chield',
  templateUrl: './view-chield.component.html',
  styleUrls: ['./view-chield.component.scss']
})
export class ViewChieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('dobInput') dateOfBirth:ElementRef;
  @ViewChild('ageInput') age:ElementRef;

  calculateAge () {
let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = (currentYear-birthYear);
  this.age.nativeElement.value = age;
}

}
