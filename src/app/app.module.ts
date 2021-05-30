import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ChooseDateComponent } from './addNewBirthdayParty/choose-date/choose-date.component';
import { ChoosePackComponent } from './addNewBirthdayParty/choose-pack-room/choose-pack.component';
import { ChooseBirthdayPersonComponent } from './addNewBirthdayParty/choose-birthday-person/choose-birthday-person.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { FullDateComponent } from './Alerts/full-date/full-date.component';
import { OKComponent } from './Alerts/ok/ok.component';
import { CulinaryWorkshopsComponent } from './addNewBirthdayParty/culinary-workshops/culinary-workshops.component';
import { WorkshopInfoComponent } from './addNewBirthdayParty/workshop-info/workshop-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseDateComponent,
    ChoosePackComponent,
    ChooseBirthdayPersonComponent,
    FullDateComponent,
    OKComponent,
    CulinaryWorkshopsComponent,
    WorkshopInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    FullDateComponent,
    OKComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
