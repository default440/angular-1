import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {
  userId: string | null = window.localStorage.getItem("userId");


  ngOnInit(): void {
    
  }

  share() {
    window.alert('The product has been shared!');
  }
}