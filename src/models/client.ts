import {BirthdayParty} from './birthdayParty';

export interface Client {
  id: number;
  clientNumber: string;
  isVip: boolean;
  discount: number;
  birthdayParties: BirthdayParty[];
}
