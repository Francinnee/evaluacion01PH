import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonList, IonItem, IonInput, IonButton, IonLabel } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/figuras';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonLabel, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonList, IonItem, IonInput, IonButton]
})
export class TrianguloComponent implements OnInit {


  ladoAStr: string = "";
  ladoBStr: string = "";
  ladoCStr: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() { }

  calcularPerimetro() {
    if (!isNaN(Number(this.ladoAStr)) && !isNaN(Number(this.ladoBStr)) && !isNaN(Number(this.ladoCStr))) {
      const ladoA = parseFloat(this.ladoAStr);
      const ladoB = parseFloat(this.ladoBStr);
      const ladoC = parseFloat(this.ladoCStr);

      const figuraGeometrica = new TrianguloEscaleno('Triángulo Escaleno', ladoA, ladoB, ladoC);
      const perimetro = figuraGeometrica.calcularPerimetro(); // Calcular perímetro
      this.resultado = `El perímetro del triángulo es: ${perimetro.toFixed(2)} cm`;
    } else {
      this.resultado = "Por favor ingrese valores válidos para los lados del triángulo.";
    }
  }

}



