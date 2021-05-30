import {BirthdayParty} from './birthdayParty';

export interface BirthdayPerson {
  id: number;
  name: string;
  surname: string;
  birthdate: Date;
  gender: boolean;
  birthdayParties: BirthdayParty[];
}
