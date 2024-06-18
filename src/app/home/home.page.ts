import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, SelectChangeEventDetail} from '@ionic/angular/standalone';
import { IonSelectCustomEvent } from '@ionic/core';
import { CirculoComponent} from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonToolbar, IonTitle, IonHeader, IonContent, IonList, IonItem, IonSelect, IonSelectOption, CirculoComponent, TrianguloComponent, CommonModule],
})

export class HomePage {

  tipoFigura:string = ""
  
  constructor() {}

  seleccionarFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    
    this.tipoFigura = $event.detail.value
    
  }

  esCirculo() {return this.tipoFigura == "Circulo"}
  esTriangulo() {return this.tipoFigura == "Triangulo"}



}
