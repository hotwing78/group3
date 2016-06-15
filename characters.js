// $(document).ready(function () {
// KnightsNinjas.init();
//
// })
//
// var KnightsNinjas = {
//   init: function() {
// KnightsNinjas.events();
// },
//events: function() {
function Knight(opts){
  this.Name =opts && opts.Name ? opts.Name : 'Default';
  this.Attack= function(enemy) {
    console.log(`KYA!!. ${this.Name} beat ${enemy.Name} for ${this.Weapon.damage}`);
  console.log(enemy.Health =enemy.Health -this.Weapon.damage);
  if(enemy.Health <= 0){
      console.error("Enemy has perished");
      enemy = null;
  };
  };
  this.Health= opts && opts.Health ? opts.Health: 100;
  console.log(this.Name);
  this.Damage=opts && opts.Damage ? opts.Damage: 0;
  this.Weapon=opts && opts.Weapon ? opts.Weapon: 0;
}
function Ninja(opts){
  this.Name =opts && opts.Name ? opts.Name : 'Default';
  this.Attack= function(enemy) {
    console.log(`KYA!!. ${this.Name} beat ${enemy.Name}`)
    return (enemy.Health =enemy.Health -= this.Weapon.damage);
  };
  this.Health= opts && opts.Health ? opts.Health: 100;
  console.log(this.Name);
  this.Damage=opts && opts.damage ? opts.Damage: 0;
}
function Weapon(opts) {
  this.name = opts ? opts.name : 'fists';
  this.damage = opts ? opts.damage : Math.floor(Math.random() * 20);
}

var knight ={
  Name:"Knight",
  Health:100,
  Defence:10,
  Damage:sword,
}
var calvary = {
  Name:"Calvary",
  Health:100,
  Defence:5,
  Damage:sword,
}
var squire = {
  Name:"Squire",
  Health:100,
  Defence:0,
  Damage:sword,
}
var peasant = {
  Name:"Peasant",
  Damage:sword,
  Health:100,
  Defence:0,
}
var shogun = {
  Name:"Shogun",
  Damage:katana,
  Health:100,
  Defence:0,

}
var assasin = {
  Name:"Assasin",
  Damage:katana,
  Health:100,
  Defence:0,

}
var samurai = {
  Name:"Samurai",
  Damage:katana,
  Health:100,
  Defence:0,

}
var monk = {
  Name:"Monk",
  Damage:katana,
  Health:100,
  Defence:0,
}
var sword = new Weapon({name: "Sword", damage: Math.floor(Math.random() * 20)});
var katana = new Weapon({name: "Katana", damage: Math.floor(Math.random() * 10)});
var monk = new Ninja(monk);
var samurai = new Ninja(samurai);
var assasin= new Ninja(assasin);
var shogun= new Ninja(shogun);
var peasant=new Knight(peasant);
var squire=new Knight(squire);
var calvary=new Knight(calvary);
var knight=new Knight(knight);
// }
// }
