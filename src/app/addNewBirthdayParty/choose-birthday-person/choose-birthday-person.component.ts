import { Component, OnInit } from '@angular/core';
import {FullDateComponent} from '../../Alerts/full-date/full-date.component';
import {MatDialog} from '@angular/material';
import {OKComponent} from '../../Alerts/ok/ok.component';
import {BirthdayPartyService} from '../../../services/birthday-party.service';
import {BirthdayParty} from '../../../models/birthdayParty';
import {BirthdayPerson} from '../../../models/birthdayPerson';
import {NgForm} from '@angular/forms';
import {BirthdayPersonService} from '../../../services/birthday-person.service';

@Component({
  selector: 'app-choose-birthday-person',
  templateUrl: './choose-birthday-person.component.html',
  styleUrls: ['./choose-birthday-person.component.css']
})
export class ChooseBirthdayPersonComponent implements OnInit {

  newBirthdayParty: BirthdayParty;
  newBirthdayPerson: BirthdayPerson;
  birthdayPersonList: BirthdayPerson[];
  year: number;
  month: number;
  day: number;
  addFlag = false;
  chooseFlag = false;

  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, private birthdayPartyService: BirthdayPartyService, private  birthdayPersonService: BirthdayPersonService) {
  }

  ngOnInit() {
    this.newBirthdayParty = this.birthdayPartyService.newParty;
    this.birthdayPersonService.findAll().subscribe(children => {
      this.birthdayPersonList = children;
    });
    this.newBirthdayPerson = {} as BirthdayPerson;
  }

  add() {
    this.newBirthdayPerson.birthdate = new Date(this.year, this.month, this.day);
    this.birthdayPersonService.addBirthdayPerson(this.newBirthdayPerson).subscribe(person => {
      console.log(person);
      this.newBirthdayParty.birthdayPerson = person;
    });
    /*this.newBirthdayParty.birthdayPerson = this.newBirthdayPerson;*/
  }
  choose() {
    this.newBirthdayPerson.birthdate = new Date(this.year, this.month, this.day);
    this.newBirthdayParty.birthdayPerson = this.newBirthdayPerson;
    console.log('added person: ' + this.newBirthdayParty.birthdayPerson.surname);
  }

  Finish() {
    console.log('przed dodaniem do bazki: ');
    console.log(this.newBirthdayParty);
    this.birthdayPartyService.addBirthdayParty(this.newBirthdayParty).subscribe(party => {
      console.log('po dodaniu do bazki: ');
      console.log(party);
    });
    const dialogRef = this.dialog.open(OKComponent, {
      width: '400px',
      data: this.newBirthdayParty
    });
  }
}
