import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ColumnMode, DatatableComponent, TableColumn } from '@swimlane/ngx-datatable';

import { Candidate } from 'src/app/modules/job-candidates/models/candidate';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() candidates: Candidate[];
  @Input() loading: boolean = false;

  public columns: TableColumn[] = [];
  public columnMode: string = ColumnMode.force;
  public pageSize: number = 5;

  private temp: Candidate[] = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor() { }

  ngOnInit(): void {
    this.columns = [
      { name: 'Candidate Name' },
      { name: 'Job Name' },
      { name: 'Skill Matched', prop: 'numberofSkillMatch' }
    ];
  }

  setTablePageSize(event: MouseEvent) {
    const val = (event.target as HTMLSelectElement).value;
    this.pageSize = parseInt(val);
  }

  updateFilter(event: KeyboardEvent) {

    if (this.temp.length == 0) {
      this.temp = [...this.candidates];
    }

    const val = (event.target as HTMLInputElement).value;
    const query = new RegExp(val, 'i');

    const temp = this.temp.filter((item: Candidate) =>
      query.test(item.candidateName));

    // update the rows
    this.candidates = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
