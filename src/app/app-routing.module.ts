// library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainComponent } from './component/main.component';
import { GameDetailComponent } from './component/game-detail.component';
import { TeamDetailComponent } from './component/team-detail.component';
import { HomeComponent } from './component/home.component';
import { GamesComponent } from './component/games.component';
import { TeamsComponent } from './component/teams.component';

// route definitions ----------------------------------------
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'team/:id', component: TeamDetailComponent },
];
// ------------------------------------------------------------------


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
