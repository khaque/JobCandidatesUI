import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobCandidatesModule } from 'src/app/modules/job-candidates/job-candidates.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => JobCandidatesModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
