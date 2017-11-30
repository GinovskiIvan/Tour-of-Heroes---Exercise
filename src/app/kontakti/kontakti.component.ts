import { Component, OnInit } from '@angular/core';

import { Kontakt } from '../kontakt';
import { KontaktService } from '../kontakt.service';
import { Position } from '../kontakt';

@Component({
  selector: 'app-kontakti',
  templateUrl: './kontakti.component.html',
  styleUrls: ['./kontakti.component.css']
})
export class KontaktiComponent implements OnInit {
  kontakti: Kontakt[];

  constructor(private kontaktService: KontaktService) { }

  ngOnInit() {
    this.getKontakti();
  }

  getKontakti(): void {
    this.kontaktService.getKontakti()
      .subscribe(kontakti => this.kontakti = kontakti);
  }

  getType(x: number): any {
    return Position[x];
  }
}
