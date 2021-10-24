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


  saveFact(fact: string) {
    // localStorage.setItem('fact', fact);
    console.log(localStorage);
  }



}
