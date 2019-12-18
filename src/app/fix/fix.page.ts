import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.page.html',
  styleUrls: ['./fix.page.scss'],
})
export class FixPage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }
  GoBack() {
    this.nav.back();
  }

}
