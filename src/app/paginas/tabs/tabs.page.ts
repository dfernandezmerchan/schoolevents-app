import { Component } from '@angular/core';
import {IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent} from '@ionic/angular';
import {HeaderComponent} from "../../componentes/header/header.component";
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, HeaderComponent],
})
export class TabsPage {}
