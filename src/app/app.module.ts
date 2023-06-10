import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameSetupComponent } from './components/game-setup/game-setup.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './components/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    GameSetupComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
