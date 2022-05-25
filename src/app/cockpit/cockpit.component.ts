import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  serverElement = [{
    type: 'server',
    name: 'Test Server',
    content: 'Some Content'
  }];
  serverName = 'Test Server';
  serverContent = 'Some Content';


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
