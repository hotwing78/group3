function Weapon(opts) {
  this.name = opts ? opts.name : 'bare hands';
  this.damage = opts ? opts.damage : Math.floor(Math.random() * 10);
}

var sword = new Weapon({name: "Sword", Damage: Math.floor(Math.random() * 20)});
var katana = new Weapon({name: "Katana", Damage: Math.floor(Math.random() * 18)});
var lance = new Weapon({name: "Lance", Damage: Math.floor(Math.random() * 25)})
var throwingStar = new Weapon({name: "Throwing Star", Damage:Math.floor(Math.random() * 16)})

// var joker = new Villain({weapon: bomb});
// var batman = new Hero({weapon: wolfsbane});
// var superman = new Hero({name: "Superman", health: 98, weapon: laserEyes});
