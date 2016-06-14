function Combatant(name, attack, health, defense) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.defense = defense;
}

Combantant.prototype.attack = function{
  console.log("CHOP....SLASH!! attacked with:")
}

var knight ={
  
}

var ninja = {

}
function Knight(opts){
    this.name = opts && opts.name ? opts.name: 'Sir Random';

}

function Ninja(opts){
    this.name = opts && opts.name ? opts.name: 'No one'
}
