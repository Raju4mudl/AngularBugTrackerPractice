import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { FormsModule } from '@angular/forms';
// import { Interface } from '@angular/Interface';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
