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
  TheList;
  //list;
  
  loadPosts(){
    this.quoteGetter.getPosts().subscribe({
      next: (posts : string) => {
       console.log()
       
       //const realposts = JSON.stringify(posts[0][0])
       const Postquote =JSON.stringify(posts[0])
       const turnback = JSON.parse(Postquote)
       
       
      
       
       var i = 0;
       var list
       
       turnback.forEach(function (arrayItem) {

        const Postquotey =JSON.stringify(posts[0][i])
        const turnbacky = JSON.parse(Postquotey)
        list += turnbacky.quote + "\n"+ turnbacky.author + "\n"+ turnbacky.topic+ "\n \n\n\n\n\n"
        i+=1

       });
        
        
        
        //this.msg = turn.quote
        //list.replace("undefined", "");
        var newlist = list.substring(9,list.length)
       
        this.msg = newlist
        
        
      },
     error: (error) => console.log('Error fetching posts', error)
    })
  }
}
