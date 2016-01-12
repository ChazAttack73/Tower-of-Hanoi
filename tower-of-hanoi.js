'use strict'

let monkTower1 = [];

let monkTower2 = [];

let monkTower3 = [];

let daysTilTheApocolypse = 0;



function monkGames( disks ) {

  for( var i = 1; i <= disks; i++ ) {
    monkTower1.push( i );
  }
  console.log( monkTower1 );
  console.log( monkTower2 );
  console.log( monkTower3 );

  if( monkTower1[0] === 1 ) {
    monkTower3.push( monkTower1.shift() );
    daysTilTheApocolypse++;
  }

  // if( monkTower1[0] > monkTower3[0] ) {
  //   monkTower2.push( monkTower1.shift() );
  //   daysTilTheApocolypse++;
  // }
}

monkGames( 3 );

console.log( monkTower1 );

console.log( monkTower2 );

console.log( monkTower3 );

console.log( daysTilTheApocolypse + ' days til we die!' );