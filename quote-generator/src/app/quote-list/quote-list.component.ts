import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { QuoteGetterServicee } from 'app/quote-getter.service';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrl: './quote-list.component.css'
})


// export class QuoteListComponent implements OnInit {
//   msg: string | null = null;

//   private quoteGetter = inject(QuoteGetterServicee)
//   ;
//   TheList;

//   ngOnInit() {
//     this.loadPosts();
//   }

//   loadPosts() {
//     this.quoteGetter.getPosts().subscribe({
//       next: (posts: any) => {
//         let list = "";
//         posts[0].forEach((item: any, index: number) => {
//           list += `${item.quote}\n${item.author}\n${item.topic}\n\n`;
//         });
//         this.msg = list.length > 0 ? list.trim() : "No quotes available.";
//       },
//       error: (error) => {
//         console.error('Error fetching posts', error);
//         this.msg = "Failed to load quotes.";
//       }
//     });
//   }
// }


export class QuoteListComponent implements OnInit {
  msg: string | null = null;
  quoteList: { quote: string, author: string, topic: string }[] = [];

  private quoteGetter = inject(QuoteGetterServicee)
  ;
  TheList;

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.quoteGetter.getPosts().subscribe({
      next: (posts: any) => {
        this.quoteList = posts[0].map((item: any) => ({
          quote: item.quote,
          author: item.author,
          topic: item.topic
        }));
        this.msg = this.quoteList.length > 0 ? "Quotes loaded successfully." : "No quotes available.";
      },
      error: (error) => {
        console.error('Error fetching posts', error);
        this.msg = "Failed to load quotes.";
      }
    });
  }
}
