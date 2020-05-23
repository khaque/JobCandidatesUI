import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/modules/job-candidates/models/candidate';
import { JobCandidatesService } from 'src/app/modules/job-candidates/services/job-candidates.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public candidates: Candidate[] = [];
  public loadingCandidates: boolean = false;
  public showTable: boolean = false;

  constructor(private jobCandidatesService: JobCandidatesService) { }

  ngOnInit(): void { }

  searchForQualifiedCandidates(jobId: number) {
    this.showTable = this.loadingCandidates = true;
    this.jobCandidatesService
      .getQualifiedCandidates(jobId)
      .subscribe(data => {
        this.candidates = [...data];
        this.loadingCandidates = false;
      }, error => {
        console.log('error getting qualified candidates', error);
        this.loadingCandidates = false;
      })
  }

}
