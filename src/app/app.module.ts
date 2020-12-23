import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCandidatsComponent } from './components/candidat/liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './components/candidat/add-candidat/add-candidat.component';
import { UpdateCandidatComponent } from './components/candidat/update-candidat/update-candidat.component';
import { ListeElecteursComponent } from './components/electeur/liste-electeurs/liste-electeurs.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCandidatsComponent,
    AddCandidatComponent,
    UpdateCandidatComponent,
    ListeElecteursComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
