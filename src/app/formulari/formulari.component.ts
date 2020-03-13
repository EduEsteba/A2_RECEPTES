import { Component, OnInit } from '@angular/core';
import {Receptes} from '../receptes/classrecepta-comentari';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RECEPTES} from "../receptes/recepta-comentaris";


@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {
  formulari: FormGroup; // fromulari sera el mateix nom que el del form
  receptes = RECEPTES;//el podem importar directament o utilitzar el   @Input() childExample: string; que al cridar el component li passariem
  //[childExample]="array"

  x = this.receptes.length+1;
  hola = 'hola';
  constructor(private _formularibuilder: FormBuilder) {

  }
  ngOnInit() {
    this.formulari = this._formularibuilder.group(
      {nom: ['', Validators.required],
        descripcio: ['', Validators.required],
        ingredients: ['', Validators.required],
      })


  }

  onSubmit() {

    if (this.formulari.invalid){
      return;
    }
    let obj = new Receptes(this.x, this.formulari.get('nom').value, this.formulari.get('descripcio').value, this.formulari.get('ingredients').value)
    this.receptes.push(obj);
    this.x++;
    this.formulari.reset();
  }
}
