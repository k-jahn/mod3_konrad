// library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './component/home.component';
import { GamesComponent } from './component/games.component';
import { TeamsComponent } from './component/teams.component';

// route definitions ----------------------------------------
const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'teams', component: TeamsComponent }
];
// ------------------------------------------------------------------


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
