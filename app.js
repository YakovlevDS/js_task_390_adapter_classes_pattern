// solution 1

class MarioAdapter {
  constructor(attacker) {
    this.attacker = attacker;
  }
  attack(target) {
    target.health -= this.attacker.jumpAttack();
  }
}
// solution 2
// function MarioAdapter(mario) {
//   this.attack = function (target) {
//     target.health -= mario.jumpAttack();
//   };
// }

// solution 3

// class MarioAdapter {
//   constructor(m) {this.m = m;}
//   attack(t) {t.health -= this.m.jumpAttack()}
// }

class Marine {
  attack(target) {
    target.health -= 6;
  }
}

class Zealot {
  attack(target) {
    target.health -= 8;
  }
}

class Zergling {
  attack(target) {
    target.health -= 5;
  }
}

class Mario {
  jumpAttack() {
    console.log("Mamamia!");
    return 3;
  }
}
const mario = new Mario();
const marioAdapter = new MarioAdapter(mario);
const target = {health: 33};

marioAdapter.attack(target);
