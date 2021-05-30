import {BirthdayParty} from './birthdayParty';

export interface CulinaryWorkshop {
  id: number;
  type: string;
  price: number;
  description: string;
  birthdayParties: BirthdayParty[];
}
