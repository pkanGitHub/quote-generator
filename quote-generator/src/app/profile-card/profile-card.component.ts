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
    {
      name: 'Maya Bowman',
      imageUrl: 'assets/Maya.jpg',
      bio: 'is a Junior majoring in Computer Science at Mizzou. They work part-time as a data engineer. In their free time they like to play video games and are currently playing Subnautica. Their goal is to graduate with good grades'
    },
    {
      name: 'Stella Craig',
      imageUrl: 'assets/Stella.jpg',
      bio: 'is a Junior in Computer Science at Mizzou. They are also the Secretary of MCA and the head of marketing for TigerHacks. They love to play video games and read in their free time. Their goal is to one day own their own indie game development company.'
    },
    {
      name: 'Phyllis Kan',
      imageUrl: 'assets/Phyllis.jpg',
      bio: 'is a senior in Information Technology at University of Missouri. She graduated from a coding bootcamp for software engineering prior going to Mizzou. She recently find interest in cyber security and looking to learn more about it. Her goal is to live in a stable place with her furry friends and works at the place she enjoys.'
    },
    { name: 'Michael Sturm', imageUrl: 'assets/Michael.png', bio: 'is in Information Technology major at Mizzou. He is interest in Nicehe programming topics' },
    { name: 'Upasana Roy', imageUrl: 'assets/Upasana.jpg', bio: 'is a Computer Science Masters at Mizzou with an interest in harnessing the power of AI in material and chemical sciences.' },
  ];

}
