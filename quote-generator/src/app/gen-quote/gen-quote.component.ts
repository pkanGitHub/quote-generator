import { Component } from '@angular/core';
import { QuoteGetterServicee } from '../quote-getter.service';
import { Output, EventEmitter, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-quote',
  templateUrl: './gen-quote.component.html',
  styleUrl: './gen-quote.component.css'
})
//let msg;
export class GenQuoteComponent {
  msg: string;
  constructor() {}
  private quoteGetter = inject(QuoteGetterServicee)
  yourmom() {
    this.msg = "yourmom";
    console.log("PLEASEEEEE")
    return this.msg;
  }
  
}
