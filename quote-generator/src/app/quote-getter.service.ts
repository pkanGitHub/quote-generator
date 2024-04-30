import { Injectable,inject } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
//import { Post} from './post';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/data'
const SEND_URL = 'http://localhost:3000/data2'
@Injectable({
  providedIn: 'root'
})

export class QuoteGetterServicee {
  
private http = inject(HttpClient)
  constructor() { }
  getPosts(){
    return this.http.get(BASE_URL)
  }
  
  loadPosts(CurrPost:JSON) {
    
    
    
    
    console.log(JSON.stringify(CurrPost) + "AYO THIS IS IN QUOTE GETTER SERVICE")
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    //console.log(body);
    this.http.post(SEND_URL, CurrPost, { headers:headers })
    .subscribe(data => {
      console.log(data)
    });
  } 
}
export class Logger {
  log(msg: any) { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any) { console.warn(msg); }
  }

