import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  // card$: Observable<Card>;

  constructor(private cs: CardService, private activatedRoute: ActivatedRoute) {
    // this.card$ = this.cs.cards(
    //   // +this.activatedRoute.snapshot.params['id']
    // );
  }

  ngOnInit(): void {}
}
