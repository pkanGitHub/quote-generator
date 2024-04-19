import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component";
import { FormsModule} from '@angular/forms';


import { HomeComponent } from "./home/home.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { GenQuoteComponent } from "./gen-quote/gen-quote.component";
import { QuoteListComponent } from "./quote-list/quote-list.component";
import { AboutComponent } from "./about/about.component";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AddQuoteComponent,
        GenQuoteComponent,
        QuoteListComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        
    ],
    imports: [
        AppRoutingModule,
        FormsModule,

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }