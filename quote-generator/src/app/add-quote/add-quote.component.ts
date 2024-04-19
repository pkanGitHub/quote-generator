import { Component,OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrl: './add-quote.component.css'
})

export class AddQuoteComponent implements OnInit {
  quote: { text: string, author: string, topic: string } = { text: '', author: '', topic: '' };
  message: string = '';
  errorMessage: string = '';
  count: number = 0;

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit(form: NgForm) {
    // Check if form is valid
    if (form.valid) {
      // Logic to add the quote to the database
      this.addQuoteToDatabase();
    } else {
      this.errorMessage = 'Please fill out all boxes.';
    }
  }

  addQuoteToDatabase() {
    const newQuote = {
      id: this.count + 1,
      ...this.quote
    };
    console.log('Adding quote:', newQuote);
    this.count++;
    this.message = 'Quote successfully added!';
    this.resetForm();
  }

  resetForm() {
    this.quote.text = '';
    this.quote.author = '';
    this.quote.topic = '';
    this.errorMessage = '';
  }
}


