import { environment } from './../environments/environment';

// Dependencies =====================================================
// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ng.material
import { MatTabsModule } from '@angular/material/tabs';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// App =========================================================================
// components
import { AppComponent } from './component/app.component';
import { HomeComponent } from './component/home.component';
import { GamesComponent } from './component/games.component';
import { TeamsComponent } from './component/teams.component';
// services
import { EventService } from './service/event.service';
import { GameService } from './service/game.service';
import { TeamService } from './service/team.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    TeamsComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
  ],
  providers: [
    EventService,
    GameService,
    TeamService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
