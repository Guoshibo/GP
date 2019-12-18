import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userphone: number ;
  password: string = '';
  nameMsg: string = '';
  pwdMsg: string = '';
  errorMsg: string = '';

  constructor(public nav:NavController) { }
  
  ngOnInit() {
  }
  login(){
    // this.userService.login({
    //   userName: '610322197906236483',
    //   password: '236483',
    // });
    this.nav.navigateForward(['/tabs/tab1'])
  }

  // onChange(type: number) {
  //   if (type == 1) {
  //     //用户名校验
  //     let nameReg = /^[a-zA-Z0-9_-]{0,}$/;
  //     if (!nameReg.test(this.username)) {
  //       this.nameMsg = '用户名不能含有中文或特殊字符！';
  //     } else if (this.username.length > 25) {
  //       this.nameMsg = '用户名超过长度限制！';
  //     } else if (this.username.length <= 0) {
  //       this.nameMsg = '用户名不能为空！';
  //     } else {
  //       this.nameMsg = '';
  //     }
  //   } else if (type == 2) {
  //     //密码校验
  //     //包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
  //     //let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
  //     //6-20个字母、数字、下划线
  //     let pwdReg = /^(\w){6,20}$/;
  //     if (this.password.length < 6 || this.password.length > 20) {
  //       this.pwdMsg = '密码长度为6~20位';
  //     } else if (!pwdReg.test(this.password)) {
  //       this.pwdMsg = '密码由字母、数字、下划线组成';
  //     } else {
  //       this.pwdMsg = '';
  //     }
  //   }
  //   this.errorMsg = this.nameMsg.length <= 0 ? this.pwdMsg : this.nameMsg;
    
  // }
  // onBlur() {
  //   if (this.username.length <= 0) {
  //     this.errorMsg = '用户名不能为空！';
  //   } else if (this.password.length <= 0) {
  //     this.errorMsg = '密码不能为空！';
  //   }
  // }
}
