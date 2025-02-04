import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder) {}

  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: '',
  });

  onSubmit(): void {
    if (!this.validateForm(this.contactForm.value).length) {
      console.log(this.contactForm.value);
      //enviar mail
    }
  }

  validateForm(form: any) {
    const errors = [];
    if (!form.name.trim()) {
      errors.push('Name is required.');
      const username = <HTMLElement>document.getElementsByClassName('name')[0];
      username.classList.remove('hidden');
    }

    if (!form.email.trim()) {
      errors.push('Email is required.');
      const email = <HTMLElement>document.getElementsByClassName('email')[0];
      email.classList.remove('hidden');
    } else if (!this.isValidEmail(form.email.trim())) {
      errors.push('Invalid email format.');
    }

    if (!form.subject.trim()) {
      errors.push('Subject is required.');
      const subject = <HTMLElement>(
        document.getElementsByClassName('subject')[0]
      );
      subject.classList.remove('hidden');
    }

    return errors;
  }

  isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
