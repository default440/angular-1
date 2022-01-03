import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { 
  StateDialogComponent,
  StatesPageComponent,
  UserLoginDialogComponent,
  UserPageComponent,
  UserRegistrationDialogComponent, 
  UsersPageComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserPageComponent },
      { path: 'Users', component: UsersPageComponent }
    ])
  ],
  declarations: [
    StateDialogComponent,
    StatesPageComponent,
    UsersPageComponent,
    UserPageComponent,
    UserRegistrationDialogComponent,
    UserLoginDialogComponent,
    AppComponent,
    TopBarComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
