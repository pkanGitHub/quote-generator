import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule} from '@angular/forms';

import { AddQuoteComponent } from "./add-quote/add-quote.component";
import { GenQuoteComponent } from "./gen-quote/gen-quote.component";
import { QuoteListComponent } from "./quote-list/quote-list.component";
import { AboutComponent } from "./about/about.component";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        AddQuoteComponent,
        GenQuoteComponent,
        QuoteListComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        
    ],
    imports: [
        FormsModule,
        MatButtonModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }