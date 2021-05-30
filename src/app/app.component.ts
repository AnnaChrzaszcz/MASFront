import {Component, OnInit} from '@angular/core';
import {PackService} from '../services/pack.service';
import {Pack} from '../models/pack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sala Zabaw dla dzieci';

  constructor() {

  }

  ngOnInit(): void {
  }
}
