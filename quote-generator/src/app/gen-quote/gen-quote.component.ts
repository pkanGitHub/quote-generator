import { Component } from '@angular/core';
import { QuoteGetterService } from '../quote-getter.service';
import { Output, EventEmitter, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-quote',
  templateUrl: './gen-quote.component.html',
  styleUrl: './gen-quote.component.css'
})
export class GenQuoteComponent {
  private quoteGetter = inject(QuoteGetterService)
}
