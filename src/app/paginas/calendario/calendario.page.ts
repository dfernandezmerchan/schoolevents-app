import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular';
import {CalendarioComponent} from "../../componentes/calendario/calendario.component";
import {TarjetaeventoComponent} from "../../componentes/tarjetaevento/tarjetaevento.component";
import {
  TarjetaeventocomprimidaComponent
} from "../../componentes/tarjetaeventocomprimida/tarjetaeventocomprimida.component";
import {HeaderComponent} from "../../componentes/header/header.component";

@Component({
  selector: 'app-calendario-page',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CalendarioComponent, TarjetaeventoComponent, TarjetaeventocomprimidaComponent, HeaderComponent],
})
export class CalendarioPage {

}
