import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locations-map',
  templateUrl: './locations-map.component.html',
  styleUrls: ['./locations-map.component.scss']
})
export class LocationsMapComponent implements OnInit {

  @Input("locationsList") locations: object;
  @Input("statuesList") statues: object;

  selectedLocation;

  constructor() { }

  ngOnInit() {
  }

  onSelect(location): void{
    this.selectedLocation = location;
  }

}
