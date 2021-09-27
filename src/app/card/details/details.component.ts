import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  card$: any;

  constructor(private cs: CardService, private activatedRoute: ActivatedRoute) {
    this.card$ = this.activatedRoute.snapshot.params;
  }

  ngOnInit(): void {}
}
