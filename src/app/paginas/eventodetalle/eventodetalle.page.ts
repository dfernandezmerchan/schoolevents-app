import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-eventodetalle',
  templateUrl: './eventodetalle.page.html',
  styleUrls: ['./eventodetalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EventodetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
