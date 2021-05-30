import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChooseBirthdayPersonComponent} from './addNewBirthdayParty/choose-birthday-person/choose-birthday-person.component';
import {ChooseDateComponent} from './addNewBirthdayParty/choose-date/choose-date.component';
import {ChoosePackComponent} from './addNewBirthdayParty/choose-pack-room/choose-pack.component';
import {CulinaryWorkshopService} from '../services/culinary-workshop.service';
import {CulinaryWorkshopsComponent} from './addNewBirthdayParty/culinary-workshops/culinary-workshops.component';


const routes: Routes = [
  { path: 'chooseBirthdayPerson', component: ChooseBirthdayPersonComponent },
  { path: 'chooseDate', component: ChooseDateComponent },
  { path: 'choosePackRoom', component: ChoosePackComponent},
  { path: 'culinaryWorkshops', component: CulinaryWorkshopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
