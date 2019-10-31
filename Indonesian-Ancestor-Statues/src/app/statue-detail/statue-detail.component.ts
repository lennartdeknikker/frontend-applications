import { Component, OnInit, Input } from '@angular/core';
import { Statue } from '../statue';


@Component({
  selector: 'app-statue-detail',
  templateUrl: './statue-detail.component.html',
  styleUrls: ['./statue-detail.component.scss']
})
export class StatueDetailComponent implements OnInit {

  @Input() statue: Statue;

  constructor() { }

  ngOnInit() {
  }

}
