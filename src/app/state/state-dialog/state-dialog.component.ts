import { Component } from '@angular/core';

@Component({
  selector: 'state-dialog',
  templateUrl: './state-dialog.component.html',
})

export class StateDialogComponent {
  share() {
    window.alert('The product has been shared!');
  }
}
