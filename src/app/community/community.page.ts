import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
@Component({
  selector: 'app-community',
  templateUrl: 'community.page.html',
  styleUrls: ['community.page.scss']
})
export class CommunityPage {

  constructor(public nav:NavController) {}
  create(){
    this.nav.navigateForward(['/write']);
  }
}
