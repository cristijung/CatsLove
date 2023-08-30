import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})

export class AgendaComponent {
  myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.myForm = this.FormBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.maxLength(300)],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log('Formulário enviado:', this.myForm.value);
    }
  }
}
