import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {
  constructor(public nav: NavController) {}
  home_img=[
    {src:'../../assets/images/1.jpg'},
    {src:'../../assets/images/1.jpg'},
    {src:'../../assets/images/1.jpg'},
    {src:'../../assets/images/1.jpg'}
  ]
  li_img=[
    {src:'../../assets/images/icon1.png'},
    {src:'../../assets/images/icon2.png'},
    {src:'../../assets/images/icon3.jpg'},
    {src:'../../assets/images/icon4.png'}
  ]
  slidesOpts ={
    effect:'flip',//轮播效果
    speed:900,
    autoplay:{
      delay:2000,
      disableOnInteraction: false
    },
    loop:true
  };
  enter(idx){
    if(idx==0){
      this.nav.navigateForward(['/fix'])
    }
    else if(idx==1){
      this.nav.navigateForward(['/pay'])
    }
    else if(idx==2){
      this.nav.navigateForward(['/life'])
    }
    else if(idx==3){
      this.nav.navigateForward(['/notice'])
    }
  }
  
}
