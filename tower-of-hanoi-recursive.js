'use strict'

/**This was the solution given to us during live coding, not mine!!!
Just added in a counter!**/

let moves = 0;

const hanoi  = function ( ring, A, B, C ) {

  if ( ring > 0 ) {
    hanoi ( ring - 1, A, C, B );
    console.log( 'Move ring ' + ring + ' from ' + A + ' to ' + C );
    hanoi (ring - 1, B, A, C );
    moves++;
  };
};

hanoi ( 23, 'A', 'B', 'C' );
console.log( moves + ' days' );
console.log( moves/365 + ' years' );