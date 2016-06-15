class SpecialAttacks {
  constructor(opts) {
    this.Name = opts.Name || "";
    this.Damage = opts.Damage || 0;
  }
};

var fireball = new SpecialAttacks ({Name: "fireball", Damage: 40,});
var freezeBlast = new SpecialAttacks ({Name: "freezeBlast", Damage: 35,});
