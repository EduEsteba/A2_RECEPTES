import { Component, OnInit } from '@angular/core';
import {COMENTARIS, RECEPTES} from './recepta-comentaris';
import {Comentaris} from './classrecepta-comentari';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-receptes',
  templateUrl: './receptes.component.html',
  styleUrls: ['./receptes.component.css'],
  providers: [NgbTabsetConfig, NgbModalConfig, NgbModal] // add NgbTabsetConfig to the component providers

})
export class ReceptesComponent implements OnInit {
  arrayreceptes = RECEPTES;
  arraycomentaris = COMENTARIS;
  formulari: FormGroup; // fromulari sera el mateix nom que el del form
  currentRate = 8;

  // mostrarrecetas = true;
  filterPost = '';
  constructor(config: NgbTabsetConfig, private _formularibuilder: FormBuilder, x: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of tabsets used by this component tree
    //config.justify = 'center';
    config.type = 'pills';
    x.backdrop = 'static';
    x.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.formulari = this._formularibuilder.group({valoracio: ['', Validators.required], descripcio: ['', Validators.required]});

  }

  onSubmit(x: number) {
    let objecte = new Comentaris(x, this.currentRate, this.formulari.get('descripcio').value);
    this.arraycomentaris.push(objecte);
    this.formulari.reset();

  }

  onClickMe(x) {
    alert(x.ingreditents);
  }
  remove(id: number) {

    for (var [key, value] of Object.entries(this.arrayreceptes)) {//hem de importar el array ja que si no ens donaa un conflicte, no podem utilitzar el del input

      if (id == value.id) {
        this.arrayreceptes.splice(Number(key),1);
      }
    }
  }

}
