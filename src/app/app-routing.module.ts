import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActeursComponent } from './components/acteurs/acteurs.component';
import { DebatsComponent } from './components/debats/debats.component';
import { DetailsComponent } from './components/details/details.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { JournalComponent } from './components/journal/journal.component';
import { SourcesComponent } from './components/sources/sources.component';

const routes: Routes = [
  {
    path: 'intro',
    component: HomeComponent,
  },
  { path: 'histoire', component: HistoireComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'acteurs', component: ActeursComponent },
  { path: 'debats', component: DebatsComponent },
  { path: 'donnees', component: InterviewsComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'journal', component: JournalComponent },
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: '**', redirectTo: 'intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
