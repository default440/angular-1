import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent implements OnInit  {
  userId: string | null = window.localStorage.getItem("userId");

  private _showLoginForm: boolean = false;
  private _showRegistrationForm: boolean = false;

  set showLoginForm(show: boolean) {
    this._showLoginForm = show;
    this._showRegistrationForm = false;
  }

  get showLoginForm(): boolean {
    return this._showLoginForm;
  }

  set showRegistrationForm(show: boolean) {
    this._showLoginForm = false;
    this._showRegistrationForm = show;
  }

  get showRegistrationForm(): boolean {
    return this._showRegistrationForm;
  }
  
  ngOnInit(): void {

  }

  share() {
    window.alert('The product has been shared!');
  }
}