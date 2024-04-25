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
  //private quoteGetter = inject(QuoteGetterServicee)
  
  // loadPosts(){
  //   this.quoteGetter.getPosts().subscribe({
  //     next: (posts: any) => {
  //       this.msg = posts;
  //       console.log("HEYYYY ITS HERE CURR POST IS HERE",this.ms)
  //       posts.push(this.msg)
        
  //       console.log("Posts fetched successfully")
  //     },
  //    error: (error) => console.log('Error fetching posts', error)
  //   })
  // }
  yourmom() {
    this.msg = "yourmom";
    console.log("PLEASEEEEE")
    ///this.quoteGetter
    return this.msg;
  }
  
}
