// library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DetailGameComponent } from './component/detail-game.component';
import { DetailTeamComponent } from './component/detail-team.component';
import { DetailEmptyComponent } from './component/detail-empty.component';
import { DetailAboutComponent } from './component/detail-about.component';
import { DetailSeasonComponent } from './component/detail-season.component';
import { DetailSettingsComponent } from './component/detail-settings.component';

// route definitions ----------------------------------------
const routes: Routes = [
  { path: '', component: DetailEmptyComponent },
  { path: 'about', component: DetailAboutComponent},
  { path: 'season', component: DetailSeasonComponent},
  { path: 'game/:id', component: DetailGameComponent },
  { path: 'team/:id', component: DetailTeamComponent },
  { path: 'settings', component: DetailSettingsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
// ------------------------------------------------------------------


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
