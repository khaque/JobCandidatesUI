import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';

import { JobCandidatesService } from './services/job-candidates.service';
import { JobCandidatesRoutingModule } from './job-candidates-routing.module';

@NgModule({
  declarations: [MainComponent, SearchComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    JobCandidatesRoutingModule,
    TypeaheadModule.forRoot(),
    NgxDatatableModule
  ],
  providers: [JobCandidatesService]
})
export class JobCandidatesModule { }
