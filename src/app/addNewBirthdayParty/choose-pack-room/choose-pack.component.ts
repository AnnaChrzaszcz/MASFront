import { Component, OnInit } from '@angular/core';
import {Pack} from '../../../models/pack';
import {Room} from '../../../models/room';
import {PackService} from '../../../services/pack.service';
import {RoomService} from '../../../services/room.service';
import {NgForm} from '@angular/forms';
import {BirthdayParty} from '../../../models/birthdayParty';
import {BirthdayPartyService} from '../../../services/birthday-party.service';

@Component({
  selector: 'app-choose-pack',
  templateUrl: './choose-pack.component.html',
  styleUrls: ['./choose-pack.component.css']
})
export class ChoosePackComponent implements OnInit {
  packsList: Pack[];
  roomsList: Room[];
  newBirthdayParty: BirthdayParty; // to bedzie przekazane

  constructor(private packService: PackService, private roomService: RoomService, private birthdayPartyService: BirthdayPartyService) { }

  ngOnInit() {
    this.packService.findAll().subscribe(packs => {
      this.packsList = packs;
    });
    this.roomService.findAll().subscribe(rooms => {
      this.roomsList = rooms;
    });
    this.newBirthdayParty = this.birthdayPartyService.newParty;
  }

  add(roomPack: NgForm) {
    /*console.log(this.newBirthdayParty.date);
    console.log(this.newBirthdayParty.pack.name);
    console.log(this.newBirthdayParty.room.name);*/
    this.birthdayPartyService.newParty = this.newBirthdayParty;
    console.log('-------------------------------------');
    console.log(this.newBirthdayParty);
  }

  cancel(roomPack: NgForm) {

  }
}
