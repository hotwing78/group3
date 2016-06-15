class Combatant {
  constructor(opts) {
    this.Name = opts.Name || 'Default';
    this.Health = opts.Health ||  100;
    this.Damage = opts.Damage ||  0;
    this.Attack = function(enemy) {
        enemy.Health -= this.Damage;
        this.Health -= enemy.Damage;
        $(`.${enemy.Name}Health`).html(`${enemy.Health}`);
        $('.knightHealth').html(`${this.Health}`);
}
}
}


var samurai = new Combatant({ Name:"Samurai", Damage:12, Health:100,});
var assasin = new Combatant({ Name:"Assasin", Damage:15, Health:100,});
var shogun = new Combatant({ Name:"Shogun", Damage:25, Health:100,});
var squire = new Combatant({ Name:"Squire", Damage:12, Health:100,});
var calvary = new Combatant({ Name:"Calvary", Damage:15, Health:100,});
var knight = new Combatant({ Name:"Knight", Damage:25, Health:100,})
