import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Observable, of, Subscriber } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Job } from 'src/app/modules/job-candidates/models/job';
import { JobCandidatesService } from 'src/app/modules/job-candidates/services/job-candidates.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<number>();

  public noResult: boolean = false;
  public asyncSelected: string;
  public dataSource: Observable<Job[]>;
  public typeaheadLoading: boolean;
  public jobs: Job[] = [];
  public selectedJob: any;

  constructor(private jobCandidatesService: JobCandidatesService) {
    this.dataSource = new Observable((observer: Subscriber<string>) => {
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getJobsAsObservable(token))
      );
  }

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {
    this.jobCandidatesService
      .getAllJobs()
      .subscribe(data => {
        this.jobs = [...data];
      }, error => {
        console.log('error getting jobs', error);
      });
  }

  getJobsAsObservable(token: string): Observable<Job[]> {
    const query = new RegExp(token, 'i');
    return of(
      this.jobs.filter((job: Job) =>
        query.test(job.name))
    );
  }

  searchForQualifiedCandidates() {
    this.search.emit(this.selectedJob.jobId);
  }

  // Typeahead Events
  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }

  // On select a job from the list
  onJobSelect(event: TypeaheadMatch): void {
    this.selectedJob = event.item;
  }

}
