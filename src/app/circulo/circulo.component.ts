import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem, IonInput, IonList, IonButton, IonLabel } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/figuras';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonLabel, FormsModule, IonButton, IonList, IonInput, IonItem, IonImg, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard]

})
export class CirculoComponent implements OnInit {

  radioNumStr: string = "";
  resultado: string = "";


  constructor() { }

  ngOnInit() { }

  calcularPerimetro() {
    const radio = parseInt(this.radioNumStr)
    const figuraGeometrica = new Circulo('Circulo', radio)
    const perimetro= figuraGeometrica.calcularPerimetro()
    this.resultado = `El perimetro del circulo es ${perimetro} cm`;
  }


}