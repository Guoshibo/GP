import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mine',
  templateUrl: 'mine.page.html',
  styleUrls: ['mine.page.scss']
})
export class MinePage {

  constructor(public nav:NavController) {}
  setup(){
    this.nav.navigateForward(['/setup']);
  }
}
