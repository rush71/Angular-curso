import {Component} from '@angular/core';

@Component({
    selector: "app-contador",
    template: `
        

        <h1>{{title}}</h1>

        <button (click)="acumular(-valor)">-{{valor}}</button>

        <span>{{numero}}</span>

        <button (click)= "acumular(valor)">+{{valor}}</button>
    
    
    `
})
export class ContadorComponent {

    title: string = 'base de 5';
    numero: number = 5;

    //base 5 y sumar de 5 en 5
    valor: number = 5;
    acumular(valor: number) {
        this.numero +=valor;
    }
}