import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-registration-dialog',
  templateUrl: './user-registration-dialog.component.html',
  styleUrls: ['./user-registration-dialog.component.css']
})
  
export class UserRegistrationDialogComponent implements OnInit  {
  name: string = "";
  password: string = "";

  ngOnInit(): void {

  }

  registration(): void {
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