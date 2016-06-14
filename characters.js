$(document).ready(function () {
KnightsNinjas.init();

})

var KnightsNinjas = {
  init: function() {
  KnightsNinjas.events();
},
events: function() {
function Combatant(opts){
  this.Name =opts && opts.Name ? opts.Name : 'Default';
  this.Attack= console.log("I attacked you!!");
  this.Health= opts && opts.Health ? opts.Health: 100;
  console.log(this.Name)
}
var knight ={
  Name:"Knight",
  Attack:25,
  Health:100,
  Defence:10,
}
var calvary = {
  Name:"Calvary",
  Attack:15,
  Health:100,
  Defence:5,
}
var squire = {
  Name:"Squire",
  Attack:12,
  Health:100,
  Defence:0,
}
var peasant = {
  Name:"Peasant",
  Attack:6,
  Health:100,
  Defence:0,
}
var shogon = {
  Name:"Shogun",
  Attack:25,
  Health:100,
  Defence:0,

}
var assasin = {
  Name:"Assasin",
  Attack:15,
  Health:100,
  Defence:0,

}
var samurai = {
  Name:"Samurai",
  Attack:12,
  Health:100,
  Defence:0,

}
var monk = {
  Name:"Monk",
  Attack:6,
  Health:100,
  Defence:0,
}
var monk = new Combatant(monk);
var samurai = new Combatant(samurai);
var assasin= new Combatant(assasin);
var shogun= new Combatant(shogun);
var peasant=new Combatant(peasant);
var squire=new Combatant(squire);
var calvary=new Combatant(calvary);
var knight=new Combatant(knight);
}
}
