function Weapon(opts) {
  this.name = opts ? opts.name : 'bare hands';
  this.damage = opts ? opts.damage : Math.floor(Math.random() * 10);
}

var sword = new Weapon({name: "Sword", damage: Math.floor(Math.random() * 20)});
var katana = new Weapon({name: "Katana", damage: Math.floor(Math.random() * 10)});


var joker = new Villain({weapon: bomb});
var batman = new Hero({weapon: wolfsbane});
var superman = new Hero({name: "Superman", health: 98, weapon: laserEyes});
