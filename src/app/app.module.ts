import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ActeursComponent } from './components/acteurs/acteurs.component';
import { DebatsComponent } from './components/debats/debats.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { DetailsComponent } from './components/details/details.component';
import { SourcesComponent } from './components/sources/sources.component';
import { JournalComponent } from './components/journal/journal.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent, ActeursComponent, DebatsComponent, InterviewsComponent, HistoireComponent, DetailsComponent, SourcesComponent, JournalComponent],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
