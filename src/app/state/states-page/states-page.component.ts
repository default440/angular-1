import { Component } from '@angular/core';

@Component({
  selector: 'states-page',
  templateUrl: './states-page.component.html',
})

export class StatesPageComponent {
  share() {
    window.alert('The product has been shared!');
  }
}
