import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCustomer;

  customers: Customer[] = [
    {  customerNo: 1, name: 'Dipro', address: '127/3 East Ulon Rampura', city: 'Rampura', country: 'Bangladesh'},
    {  customerNo: 2, name: 'Rahim', address: '127/2 East Ulon Rampura', city: 'Rampura', country: 'Bangladesh'},
    {  customerNo: 3, name: 'Atiq', address: '127/1 East Ulon Rampura', city: 'Rampura', country: 'Bangladesh'},
  ];


}
