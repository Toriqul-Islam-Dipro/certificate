import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

serverElement = [{
  type: 'server',
  name: 'Test Server',
  content: 'Some Content'
}];
serverName = 'Test Server';
serverContent = 'Some Content';

// server: boolean = false;
// serverBlue: boolean = false;



  constructor() { }

  ngOnInit(): void {

  }

  addBlueServer() {

    this.serverElement.push({
      type: 'serverBlue',
      name: this.serverName,
      content: this.serverContent
    });
  }


  addServer() {

    this.serverElement.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    });

    console.log(this.serverElement)
  }


}
