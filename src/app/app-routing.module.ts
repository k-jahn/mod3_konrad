// library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainComponent } from './component/main.component';
import { DetailGameComponent } from './component/detail-game.component';
import { DetailTeamComponent } from './component/detail-team.component';
import { DetailEmptyComponent } from './component/detail-empty.component';
import { DetailAboutComponent } from './component/detail-about.component';

// route definitions ----------------------------------------
const routes: Routes = [
  { path: '', component: DetailEmptyComponent },
  { path: 'about', component: DetailAboutComponent},
  { path: 'game/:id', component: DetailGameComponent },
  { path: 'team/:id', component: DetailTeamComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
// ------------------------------------------------------------------


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
