import { Component } from '@angular/core';
import { fadeIn } from 'app/animation';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
  animations: [
    fadeIn
  ]
})
export class ProfileCardComponent {
  members = [
    { name: 'Maya B', imageUrl: 'assets/Phyllis.jpg', bio: 'Modify here' },
    { name: 'Stella C', imageUrl: 'assets/Phyllis.jpg', bio: 'Modify here' },
    { 
      name: 'Phyllis K', 
      imageUrl: 'assets/Phyllis.jpg', 
      bio: 'is a senior in Information Technology at University of Missouri. She is known as ferret whisperer among her friends. She used to have a business of ferrets, but currently she only has a cat. Mochi is a smart kitty, she learns to play fetch and use pet buttons. Both Phyllis and Mochi loves to play with ferrets.'
    },
    { name: 'Michael S', imageUrl: 'assets/Phyllis.jpg', bio: 'Modify here' },
    { name: 'Upasana R', imageUrl: 'assets/Phyllis.jpg', bio: 'Modify here' },
  ];

}
