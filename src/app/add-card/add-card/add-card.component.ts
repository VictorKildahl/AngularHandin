import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  cardForm = this.formBuilder.group({
    card_number: [''],
    cardholder_name: [''],
    csc_code: [''],
    expiration_date_month: [''],
    expiration_date_year: [''],
    issuer: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.cardForm.value);
  }
}
