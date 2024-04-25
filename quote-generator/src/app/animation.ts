import { transition, trigger, animate, style, stagger, query } from '@angular/animations';

// export let fadeIn = trigger('fadeIn', [
//     // change to 'void <=> *' if we want fade out
//     transition('void => *', [
//         style({ opacity: 0, transform: 'translateX(-100px)' }),
//         animate('2000ms ease-in'), // transition timing in millisecond
//     ]),
// ])

export let fadeIn = trigger('fadeIn', [
    transition(':enter', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateX(-100px)'}),
            stagger(200, [
              animate('1000ms ease-in', style({ opacity: 1, transform: 'translateX(0px)'})),
            ]),
        ], { optional: true })
    ]),
])