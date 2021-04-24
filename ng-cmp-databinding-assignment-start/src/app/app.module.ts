import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenNumDisplayComponent } from './even-num-display/even-num-display.component';
import { OddNumDisplayComponent } from './odd-num-display/odd-num-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenNumDisplayComponent,
    OddNumDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
