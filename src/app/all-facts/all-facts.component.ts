import { Component, OnInit } from '@angular/core';
import { Fact } from '../interfaces/fact';
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

  saveFact(fact: string, img: string, index: number) {
    try {
      const fillHeart = document.getElementById('heart' + index);
      if (!fillHeart?.classList.contains('bi-suit-heart-fill')) {
        fillHeart?.classList.remove('bi-suit-heart');
        fillHeart?.classList.add('bi-suit-heart-fill');
        const factObj: Fact = { fact: fact, img: img };
        this.sas.saveFact(factObj).subscribe(x => console.log(`saved fact: ${fact}`));;
      }
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }
}
