import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() all: number = 0;
 @Input() free: number = 0;
 @Input() premium: number = 0;

 selectedRadioButton: string = 'All'

 @Output() filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>()

  onRadioButtonChange(){
   this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
  }

}
