import {BirthdayParty} from './birthdayParty';

export interface Pack {
  id: number;
  name: string;
  price: number;
  timeInRoom: number;
  birthdayParties: BirthdayParty[];
}
