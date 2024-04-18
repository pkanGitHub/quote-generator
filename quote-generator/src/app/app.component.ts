import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { GenQuoteComponent } from "./gen-quote/gen-quote.component";
import { HomeComponent } from "./home/home.component";
import { QuoteListComponent } from "./quote-list/quote-list.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
