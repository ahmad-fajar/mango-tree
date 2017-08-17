"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._fruits = [];
    this._harvested = '';
    this._health = true;
    this._height = 0;
    this._maxAge = 20;
    this._maxGrowAge = 10;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get harvested() {
    return this._harvested;
  }

  get healthyStatus() {
    if (this._age >= this._maxAge) return false;
    else return true;
  }


  // Get current states here

  // Grow the tree
  grow() {
    let growthRate = (Math.ceil(Math.random() * 20) + 10) / 100; // random 0.1 - 0.3
    this._age++;

    if (this._age <= this._maxGrowAge) {
      if (this._height === 0) {
        this._height += 1 + growthRate;
        this._height = this._height.toFixed(2);
      } else {
        this._height *= (1 + growthRate);
        this._height = this._height.toFixed(2);
      }
    }
  }  // ----- grow

  // Produce some mangoes
  produceMangoes() {
    let produced = Math.round(Math.random() * 40) + 10; // 10 - 50
    for (var i = 0; i <= produced ; i++) {
      this._fruits[i] = new Mango();
    }
  }

  // Get some fruits
  harvest() {
    let good = 0;
    let bad = 0;

    for (var i = 0; i <= this._fruits.length - 1; i++) {
      let qual = this._fruits[i]._quality;
      if (qual === 'good') good++;
      else bad++;
    }
    this._harvested = `${good + bad} (${good} good & ${bad} bad)`;
    this._fruits = [];
  }

}  // --------------- class MangoTree ---------------

class Mango {
  // Produce a mango
  constructor() {
    this._quality = this.quality()
  }

  quality() {
    let qual = () => {
      let rand = Math.round(Math.random());
      return (rand === 1) ? 'good' : 'bad';
    }
    return this._quality = qual();
  }
}  // --------------- class Mangos ---------------

/*
  driver code untuk release 0
*/
// let mangoTree = new MangoTree()
//
// console.log('\nThe mango tree is alive! :smile:');
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus != false);
// console.log('The mango tree has met its end. :sad:\n');

//  --------------- end of Release 0 ---------------

module.exports = MangoTree