import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.required],
    message: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
