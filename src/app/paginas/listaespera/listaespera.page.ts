import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-listaespera',
  templateUrl: './listaespera.page.html',
  styleUrls: ['./listaespera.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaesperaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
