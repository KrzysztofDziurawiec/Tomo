import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
fullName: string;
email: string;
emailBody: string;

submit(contactForm): void {
  console.log(contactForm.value)
  console.log("full name: " + contactForm.value.fullName +" email: " + contactForm.value.email + " body: " + contactForm.value.emailBody);
}
}
