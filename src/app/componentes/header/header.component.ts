import {Component, Input} from '@angular/core';
import {IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonButton,
    IonIcon,
    RouterLink
  ],
})
export class HeaderComponent{



  @Input() titulo: string = '';

}
