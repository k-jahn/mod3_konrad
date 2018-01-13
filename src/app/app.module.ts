import { environment } from './../environments/environment';

// Stock Dependencies =====================================================
// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ng.material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// App Dependencies =========================================================================
// components
import { AppComponent } from './component/app.component';
import { GameDetailComponent } from './component/game-detail.component';
import { GamesComponent } from './component/games.component';
import { HomeComponent } from './component/home.component';
import { MainComponent } from './component/main.component';
import { TeamDetailComponent } from './component/team-detail.component';
import { TeamsComponent } from './component/teams.component';
// services
import { EventService } from './service/event.service';
import { GameService } from './service/game.service';
import { TeamService } from './service/team.service';
// modules
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './component/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailComponent,
    GamesComponent,
    HomeComponent,
    MainComponent,
    TeamDetailComponent,
    TeamsComponent,
    MenuComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  providers: [
    EventService,
    GameService,
    TeamService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
