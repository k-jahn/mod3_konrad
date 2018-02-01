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
import { DetailAboutComponent } from './component/detail-about.component';
import { DetailEmptyComponent } from './component/detail-empty.component';
import { DetailGameComponent } from './component/detail-game.component';
import { DetailTeamComponent } from './component/detail-team.component';
import { MainComponent } from './component/main.component';
import { MainGamesComponent } from './component/main-games.component';
import { MainNewsComponent } from './component/main-news.component';
import { MainTeamsComponent } from './component/main-teams.component';
import { MenuComponent } from './component/menu.component';
import { MainSubnavComponent } from './component/main-subnav.component';
import { BadgeTeamComponent } from './component/badge-team.component';
import { BadgeGameComponent } from './component/badge-game.component';
// services
import { EventService } from './service/event.service';
import { GameService } from './service/game.service';
import { TeamService } from './service/team.service';
// modules
import { AppRoutingModule } from './app-routing.module';
import { AppTitleService } from './service/app-title.service';
import { DetailSeasonComponent } from './component/detail-season.component';
import { FavoriteService } from './service/favorite.service';
import { AuthService } from './service/auth.service';
import { CommentService } from './service/comment.service';
import { DatabaseService } from './service/database.service';
import { MainSubnavLinksService } from './service/main-subnav-links.service';

@NgModule({
  declarations: [
    AppComponent,
    BadgeTeamComponent,
    BadgeGameComponent,
    DetailAboutComponent,
    DetailEmptyComponent,
    DetailGameComponent,
    DetailTeamComponent,
    MainComponent,
    MainGamesComponent,
    MainNewsComponent,
    MainTeamsComponent,
    MenuComponent,
    MainSubnavComponent,
    DetailSeasonComponent,
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
    AppTitleService,
    FavoriteService,
    AuthService,
    CommentService,
    DatabaseService,
    MainSubnavLinksService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
