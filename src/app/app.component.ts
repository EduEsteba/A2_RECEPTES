import { Component } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class AppComponent {
  title = 'tercer-receptes';

  constructor(x: NgbModalConfig, private modalService: NgbModal) {
    x.backdrop = 'static';
    x.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}
