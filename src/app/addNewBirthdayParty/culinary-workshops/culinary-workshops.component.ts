import { Component, OnInit } from '@angular/core';
import {CulinaryWorkshopService} from '../../../services/culinary-workshop.service';
import {Pack} from '../../../models/pack';
import {CulinaryWorkshop} from '../../../models/culinaryWorkshop';

@Component({
  selector: 'app-culinary-workshops',
  templateUrl: './culinary-workshops.component.html',
  styleUrls: ['./culinary-workshops.component.css']
})
export class CulinaryWorkshopsComponent implements OnInit {

  workshopList: CulinaryWorkshop[];
  selectedWorkshop: CulinaryWorkshop;

  constructor(private culinaryWorkshopService: CulinaryWorkshopService) { }

  ngOnInit() {
    this.culinaryWorkshopService.findAll().subscribe(workshops => {
      this.workshopList = workshops;
    });
  }

}
