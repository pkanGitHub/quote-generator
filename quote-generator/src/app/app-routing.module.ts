import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { GenQuoteComponent } from './gen-quote/gen-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path: '', component: AppComponent, pathMatch: "full"},
    {path: 'add-quote', component: AddQuoteComponent},
    {path: 'generate-quote', component: GenQuoteComponent},
    {path: 'quote-list', component: QuoteListComponent},
    {path: 'about', component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }