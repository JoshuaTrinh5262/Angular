import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddOneButtonComponent } from 'src/app/components/add-one-button/add-one-button.component';
import { HeroDetailComponent } from 'src/app/components/hero-detail/hero-detail.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { SquadsComponent } from './components/squads/squads.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'add-one-button', component: AddOneButtonComponent },
  { path: 'hero-detail/:id', component: HeroDetailComponent },
  { path: 'hero-list', component: HeroesComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'squads', component: SquadsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: MainComponent },
  { path: '**', component: PageNotFoundComponent},
  { path: 'page-not-found', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
