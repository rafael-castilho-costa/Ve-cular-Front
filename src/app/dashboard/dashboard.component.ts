import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    currentUser: any;

    public get welcomeMessage(): string {
      let welcomeMessage :string ='';

      switch (this.currentUser?.persona?.genderType){
        case 'MALE':
          welcomeMessage += 'Bem-vindo';
          break;
        case 'FEMALE':
          welcomeMessage += 'Bem-vinda';
          break;
        default:
          welcomeMessage += 'Bem-vindo (a)'
          break;
      }
      welcomeMessage += ' ao Cristo FY';

      return welcomeMessage;
    }
}
