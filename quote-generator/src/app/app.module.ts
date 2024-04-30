import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component";
import { FormsModule} from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { GenQuoteComponent } from "./gen-quote/gen-quote.component";
import { QuoteListComponent } from "./quote-list/quote-list.component";
import { AboutComponent } from "./about/about.component";
import { ProfileCardComponent } from "./profile-card/profile-card.component";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { MatButtonModule } from "@angular/material/button"

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AddQuoteComponent,
        GenQuoteComponent,
        QuoteListComponent,
        AboutComponent,
        ProfileCardComponent,
        HeaderComponent,
        FooterComponent,
        
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        MatButtonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }