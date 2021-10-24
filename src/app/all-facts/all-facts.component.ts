import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.css']
})
export class AllFactsComponent implements OnInit {
  title = 'cats-facts';
  facts = this.sas.facts;

  constructor(public sas: ServerApiService) {
  }

  ngOnInit(): void {
  }

  saveFact(fact: object, index: number) {
    try {
      this.sas.saveFact(fact);
      const fillHeart = document.getElementById('heart' + index);
      fillHeart?.classList.remove('bi-suit-heart');
      fillHeart?.classList.add('bi-suit-heart-fill');
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }
}
