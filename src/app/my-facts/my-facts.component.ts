import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.css']
})
export class MyFactsComponent implements OnInit {
  facts = this.sas.facts;
  constructor(public sas: ServerApiService) { }

  ngOnInit(): void {
  }

  readMore(i: number) {
    const readMoreBtn = document.getElementById('read-more-btn' + i);
    const text = document.getElementById('read-more' + i);
    if (readMoreBtn) {
      if (readMoreBtn.innerText == 'Read more') readMoreBtn.innerText = 'Read less';
      else readMoreBtn.innerText = 'Read more';
    }

    text?.classList.toggle('expand');

  }

  removeFromMyFacts(i: number) {

  }

}
