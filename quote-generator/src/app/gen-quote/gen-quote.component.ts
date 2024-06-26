import { Component } from '@angular/core';
import { QuoteGetterServicee } from '../quote-getter.service';
import { inject} from '@angular/core';


@Component({
  selector: 'app-gen-quote',
  templateUrl: './gen-quote.component.html',
  styleUrl: './gen-quote.component.css'
})
//let msg;
export class GenQuoteComponent {

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  onClick() {
    console.log('Button clicked');
    
  }
  oneInFour(){
    const rndInt = this.randomIntFromInterval(1, 33);
    return rndInt;
  }

  private quoteGetter = inject(QuoteGetterServicee)
  
  // add default message
  quote: string = "Click Here For A Random Quote!";
  author: string = "Author";
  topic: string = "Topic";
  
  loadPosts(){
    this.quoteGetter.getPosts().subscribe({
      next: (posts : string) => {
        console.log()
        const RandNum = this.randomIntFromInterval(0 ,posts[0].length-1)
        const Postquote =JSON.stringify(posts[0][RandNum])
        const turnback = JSON.parse(Postquote)
       
        this.quote = turnback.quote 
        this.author =  turnback.author
        this.topic = turnback.topic
        
      },
     error: (error) => console.log('Error fetching posts', error)
    })
  }
}
