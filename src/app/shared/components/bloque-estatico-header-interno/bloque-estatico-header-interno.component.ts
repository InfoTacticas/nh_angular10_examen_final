import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloque-estatico-header-interno',
  templateUrl: './bloque-estatico-header-interno.component.html',
  styleUrls: ['./bloque-estatico-header-interno.component.scss']
})
export class BloqueEstaticoHeaderInternoComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
