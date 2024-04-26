import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { QuoteGetterServicee } from 'app/quote-getter.service';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrl: './quote-list.component.css'
})
export class QuoteListComponent {
  private quoteGetter = inject(QuoteGetterServicee)
  msg;
  loadPosts(){
    this.quoteGetter.getPosts().subscribe({
      next: (posts : string) => {
       console.log()
       
       //const realposts = JSON.stringify(posts[0][0])
       const Postquote =JSON.stringify(posts[0])
       const turnback = JSON.parse(Postquote)
       
       
        this.msg = turnback
        
        
      },
     error: (error) => console.log('Error fetching posts', error)
    })
  }
}
