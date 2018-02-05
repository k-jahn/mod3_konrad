import { environment } from './../environments/environment';

// Stock Dependencies =====================================================
// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ng.material
import { MatSelectModule } from '@angular/material/select';
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
import { DetailSettingsComponent } from './component/detail-settings.component';
import { MainComponent } from './component/main.component';
import { MainGamesComponent } from './component/main-games.component';
import { MainNewsComponent } from './component/main-news.component';
import { MainTeamsComponent } from './component/main-teams.component';
import { MenuComponent } from './component/menu.component';
import { BadgeTeamComponent } from './component/badge-team.component';
import { BadgeGameComponent } from './component/badge-game.component';
import { DetailSeasonComponent } from './component/detail-season.component';
// services
import { AppTitleService } from './service/app-title.service';
import { AuthService } from './service/auth.service';
import { PublicDataService } from './service/public-data.service';
import { UserDataService } from './service/user-data.service';
// modules
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BadgeTeamComponent,
    BadgeGameComponent,
    DetailAboutComponent,
    DetailEmptyComponent,
    DetailGameComponent,
    DetailSeasonComponent,
    DetailSettingsComponent,
    DetailTeamComponent,
    MainComponent,
    MainGamesComponent,
    MainNewsComponent,
    MainTeamsComponent,
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
    MatSelectModule,
    MatTabsModule,
  ],
  providers: [
    AppTitleService,
    AuthService,
    PublicDataService,
    UserDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
