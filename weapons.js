function Weapon(opts) {
  this.name = opts ? opts.name : 'bear hands';
  this.damage = opts ? opts.damage : Math.floor(Math.random() * 10);
}

var sword = new Weapon({name: "Sword", damage: Math.floor(Math.random() * 20)});
var katana = new Weapon({name: "Katana", damage: Math.floor(Math.random() * 10)});
