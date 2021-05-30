import {Room} from './room';
import {Pack} from './pack';
import {Client} from './client';
import {BirthdayPerson} from './birthdayPerson';
import {CulinaryWorkshop} from './culinaryWorkshop';

export interface BirthdayParty {
  id: number;
  date: Date;
  childrenNumber: number;
  state: string;
  parentsMark: number;
  coordinatorMark: number;
  room: Room;
  pack: Pack;
  client: Client;
  birthdayPerson: BirthdayPerson;
  culinaryWorkshop: CulinaryWorkshop;
}
