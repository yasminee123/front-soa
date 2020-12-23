import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AddCandidatComponent } from './components/candidat/add-candidat/add-candidat.component';
import { ListeCandidatsComponent } from './components/candidat/liste-candidats/liste-candidats.component';
import { UpdateCandidatComponent } from './components/candidat/update-candidat/update-candidat.component';

const routes: Routes = [
  {path:'candidat',
  component:ListeCandidatsComponent
  },
  
  {
    path:'add-candidat',
    component:AddCandidatComponent
  },

  {
    path:'update-candidat/:id',
    component:UpdateCandidatComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
