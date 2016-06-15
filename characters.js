class Combatant {
  constructor(opts) {
    this.Name = opts.Name || 'Default';
    this.Health = opts.Health ||  100;
    this.Damage = opts.Damage ||  0;
    this.Accuracy= opts.Accuracy || 0;
    this.Evasion= opts.Evasion || 0;
    this.Attack = function(enemy) {
        enemy.Health -= this.Damage;
        this.Health -= enemy.Damage;
        $(`.${enemy.Name}Health`).html(`${enemy.Health}`);
        $('.knightHealth').html(`${this.Health}`);
}
}
}
class Europe extends Combatant {
  constructor(opts) {
    super(opts)
    this.Block= opts.Block || 0;
}
}



var samurai = new Combatant({ Name:"Samurai", Damage:12,Health:100,});
var assasin= new Combatant({ Name:"Assasin", Damage:15,Health:100,});
var shogun= new Combatant({ Name:"Shogun", Damage:25, Health:100,});
var squire=new Europe({Name:"Squire",Damage:12,Health:100,Block:0,});
var calvary=new Europe({ Name:"Calvary", Damage:15, Health:100,Block:0,});
var knight=new Europe({ Name:"Knight", Damage:25, Health:100, Block:0,})
