import {BirthdayParty} from './birthdayParty';

export interface Room {
  id: number;
  name: string;
  description: string;
  seatsNumber: number;
  birthdayParties: BirthdayParty[];
}
