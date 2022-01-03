import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-login-dialog',
  templateUrl: './user-login-dialog.component.html',
  styleUrls: ['./user-login-dialog.component.css']
})
  
export class UserLoginDialogComponent implements OnInit  {
  name: string = "";
  password: string = "";

  ngOnInit(): void {

  }

  login(): void {
    console.log(this.name + " " + this.password);
    
    if (!window.localStorage.getItem('userId')) {
      window.localStorage.setItem('userId', '1');
    } else {
      window.localStorage.removeItem('userId');
    }

    window.location.reload()
  }

  share() {
    window.alert('The product has been shared!');
  }
}