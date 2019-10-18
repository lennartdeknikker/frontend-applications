import { Component, OnInit } from '@angular/core';
import { Statue } from '../statue';
import { STATUES } from '../mock-statues';

@Component({
  selector: 'app-statue-list',
  templateUrl: './statue-list.component.html',
  styleUrls: ['./statue-list.component.scss']
})
export class StatueListComponent implements OnInit {

  statues = STATUES;
  selectedStatue: Statue = STATUES[0];

  constructor() { }

  ngOnInit() {
  }

  onSelect(statue: Statue): void {
    this.selectedStatue = statue;
  }

}
