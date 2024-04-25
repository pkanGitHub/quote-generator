import { transition, trigger, animate, style, stagger } from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
    // change to 'void <=> *' if we want fade out
    transition('void => *', [
        style({ opacity: 0 }),
        animate('2000ms ease-in'), // transition timing in millisecond
    ]),
])