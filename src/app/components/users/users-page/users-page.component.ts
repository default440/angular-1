import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {
  userId: string | null = window.localStorage.getItem("userId");

  ngOnInit(): void {
    let count = window.localStorage.getItem('count');
    if (count) {
      this.count = +count;
    }
  }

  public count: number = 0;

  public inc() {
    this.count++;
    window.localStorage.setItem('count', this.count.toString());
  }

  share() {
    window.alert('The product has been shared!');
  }
}