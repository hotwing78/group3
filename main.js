$(document).ready(function () {
KnightsNinjas.init();

})

var KnightsNinjas = {
  init: function() {
  KnightsNinjas.events();
},
events: function() {

 function Combatants(Name,Attack,Health,Defence){
  this.Name = Name;
  this.Attack= Attack;
  this.Health= Health;
  this.Defence=Defence;
}

var Knights = {
  Name:"Knights",
  Attack:25,
  Health:100,
  Defence:10,
}
var Calvary = {
  Name:"Calvary",
  Attack:15,
  Health:100,
  Defence:5,
}
var Squire = {
  Name:"Squire",
  Attack:12,
  Health:100,
  Defence:0,

}
var Peasant = {
  Name:"Peasant",
  Attack:6,
  Health:100,
  Defence:0,
}
var Shogon = {
  Name:"Shogun",
  Attack:25,
  Health:100,
  Defence:0,

}
var Assasin = {
  Name:"Assasin",
  Attack:15,
  Health:100,
  Defence:0,

}
var Samauri = {
  Name:"Samauri",
  Attack:12,
  Health:100,
  Defence:0,

}
var Monk = {
  Name:"Monk",
  Attack:6,
  Health:100,
  Defence:0,
}
}
}
