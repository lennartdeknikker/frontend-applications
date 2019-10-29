import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatueDetailComponent } from './statue-detail/statue-detail.component';
import { StatueListComponent } from './statue-list/statue-list.component';
import { LocationsMapComponent } from './locations-map/locations-map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StatueDetailComponent,
    StatueListComponent,
    LocationsMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
