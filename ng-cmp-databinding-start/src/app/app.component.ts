import { Component, OnInit } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Test Server', content: 'This is test server content' }];
  elementName: string

  onServerAdded(event: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: 'server',
        name: event.serverName,
        content: event.serverContent
      }
    )
  }

  onBlueprintAdded(event: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: 'blueprint',
        name: event.serverName,
        content: event.serverContent
      }
    )
  }

  changeName() {
    this.elementName = "Random"
  }
}
