import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

  newserverName = '';
  newserverContent = '';



  constructor() { }

  ngOnInit(): void {
  }

  onAddBlueServer() {
    this.serverCreated.emit({serverName: this.newserverName, serverContent: this.newserverContent});
  }


  onAddServer() {
    this.serverCreated.emit({serverName: this.newserverName, serverContent: this.newserverContent});
  }

}
