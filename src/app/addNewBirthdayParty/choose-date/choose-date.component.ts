import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {BirthdayParty} from '../../../models/birthdayParty';
import {MatDialog} from '@angular/material';
import {FullDateComponent} from '../../Alerts/full-date/full-date.component';
import {BirthdayPartyService} from '../../../services/birthday-party.service';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../models/client';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.css']
})
export class ChooseDateComponent implements OnInit {

  setDateForm: FormGroup;
  year: number;
  month: number;
  day: number;
  beginingHour: number;
  newBirthdayParty: BirthdayParty;
  loggedClient: Client;

  constructor(public dialog: MatDialog, private birthdayPartyService: BirthdayPartyService, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientById(1).subscribe(client => {
      this.loggedClient = client;
    });
  }

  openDialog(): void {
      const dialogRef = this.dialog.open(FullDateComponent, {
        width: '250px',
      });

   /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/
  }

  add(addAlpacaForm: NgForm) { // TODO check date i przekazac dalej newBirthdayParty
    /*
    this.birthdayPartyService.checkDate(new Date(this.year, this.month.valueOf() - 1, this.day, this.beginingHour)).subscribe(result => {
      if (result) {
        console.log('MOZESZ ROBIC URO');
      } else {
        console.log('MOZESZ ROBIC URO');
      }
    })*/
    // tslint:disable-next-line:max-line-length
    this.newBirthdayParty = {date: new Date(this.year, this.month.valueOf() - 1, this.day, this.beginingHour), client: this.loggedClient, state: 'planned', childrenNumber: 6, coordinatorMark: null, parentsMark: null, culinaryWorkshop: null } as BirthdayParty;
    console.log(this.newBirthdayParty.date);
    this.birthdayPartyService.newParty = this.newBirthdayParty;
  }

  cancel(dateForm: NgForm) {

  }
}
