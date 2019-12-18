import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-life',
  templateUrl: './life.page.html',
  styleUrls: ['./life.page.scss'],
})
export class LifePage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }

  GoBack() {
    this.nav.back();
  }
}
