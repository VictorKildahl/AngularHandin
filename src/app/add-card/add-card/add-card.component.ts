import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  cardForm = this.formBuilder.group({
    card_number: ['', [Validators.minLength(7), Validators.maxLength(16)]],
    cardholder_name: [''],
    csc_code: ['', [Validators.minLength(3), Validators.maxLength(3)]],
    expiration_date_month: [''],
    expiration_date_year: [''],
    issuer: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.cardForm.value);
    // Burde ramme et Post endpoint i backenden, lige nu gør den ingenting
  }
}
