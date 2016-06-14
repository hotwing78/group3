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
    console.log(`KYA!!. ${this.Name} beat ${enemy.Name} for ${this.Damage}`);
  console.log(enemy.Health =enemy.Health -this.Damage);
  if(enemy.Health <= 0){
      console.log("DEATH!!!",);
      $(enemy).remove();
  };
  };
  this.Health= opts && opts.Health ? opts.Health: 100;
  console.log(this.Name);
  this.Damage=opts && opts.Damage ? opts.Damage: 0;
}
function Ninja(opts){
  this.Name =opts && opts.Name ? opts.Name : 'Default';
  this.Attack= function(enemy) {
    console.log(`KYA!!. ${this.Name} beat ${enemy.Name}`)
    return (enemy.Health =enemy.Health -= this.Damage);
  };
  this.Health= opts && opts.Health ? opts.Health: 100;
  console.log(this.Name);
  this.Damage=opts && opts.Damage ? opts.Damage: 0;
}
var knight ={
  Name:"Knight",
  Damage:25,
  Health:100,
  Defence:10,
}
var calvary = {
  Name:"Calvary",
  Damage:15,
  Health:100,
  Defence:5,
}
var squire = {
  Name:"Squire",
  Damage:12,
  Health:100,
  Defence:0,
}
var peasant = {
  Name:"Peasant",
  Damage:6,
  Health:100,
  Defence:0,
}
var shogun = {
  Name:"Shogun",
  Damage:25,
  Health:100,
  Defence:0,

}
var assasin = {
  Name:"Assasin",
  Damage:15,
  Health:100,
  Defence:0,

}
var samurai = {
  Name:"Samurai",
  Damage:12,
  Health:100,
  Defence:0,

}
var monk = {
  Name:"Monk",
  Damage:6,
  Health:100,
  Defence:0,
}
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
