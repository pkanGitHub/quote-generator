import { Component,OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { QuoteGetterServicee } from 'app/quote-getter.service';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { join } from 'path';
import { QuoteData } from 'app/quote-data';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrl: './add-quote.component.css'
})


export class AddQuoteComponent implements OnInit {
  quote: { quote: string, author: string, topic: string } = { quote: '', author: '', topic: '' };
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
  private quoteGetter = inject(QuoteGetterServicee)
  addQuoteToDatabase() {
    
    let newQuote: QuoteData = {
      id: this.count + 1,
      quote: this.quote.quote,
      author: this.quote.author,
      topic: this.quote.topic

    };
    
    //{"firstName":"John", "lastName":"Doe"} 
    //newQuote=<JSON>newQuote
    let MoreNewQuote = {"id": "1", "author":"{{a}}"}
    console.log('Adding quote:', newQuote);
    this.count++;
    this.message = 'Quote successfully added!';
    const json = JSON.stringify(newQuote)
    const NEWJSON = JSON.parse(json)

    console.log("Omfg" + NEWJSON.id + NEWJSON.quote)
    this.quoteGetter.loadPosts(NEWJSON);
    this.resetForm();
  }

  resetForm() {
    this.quote.quote = '';
    this.quote.author = '';
    this.quote.topic = '';
    this.errorMessage = '';
  }
}

