import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Candidate } from '../models/candidate';
import { Job, JobResponse } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobCandidatesService {

  private apiBase = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    const url = `${this.apiBase}/jobs`;
    return this.http
      .get<JobResponse>(url)
      .pipe(
        map(resp => resp.result)
      );
  }

  getQualifiedCandidates(jobId: number): Observable<Candidate[]> {
    const url = `${this.apiBase}/qualifiedcandidates/${jobId}`;
    return this.http
      .get<Candidate[]>(url);
  }

}
