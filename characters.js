function Knight(opts) {
    this.Name = opts && opts.Name ? opts.Name : 'Default';
    this.Health = opts && opts.Health ? opts.Health: 100;
    this.Damage = opts && opts.Damage ? opts.Damage: 0;
    this.Attack = function(enemy) {
        enemy.Health -= this.Damage;
        this.Health -= enemy.Damage;
        $(`.${enemy.Name}Health`).html(`${enemy.Health}`);
        $('.knightHealth').html(`${this.Health}`);
    };
}

var knight ={
  Name:"Knight",
  Damage:25,
  Health:100,
}

var calvary = {
  Name:"Calvary",
  Damage:15,
  Health:100,
}

var squire = {
  Name:"Squire",
  Damage:12,
  Health:100,
}

var peasant = {
  Name:"Peasant",
  Damage:6,
  Health:100,
}

var shogun = {
  Name:"Shogun",
  Damage:25,
  Health:100,
}

var assasin = {
  Name:"Assasin",
  Damage:15,
  Health:100,
}

var samurai = {
  Name:"Samurai",
  Damage:12,
  Health:100,
}

var monk = {
  Name:"Monk",
  Damage:6,
  Health:100,
}

var monk = new Knight(monk);
var samurai = new Knight(samurai);
var assasin= new Knight(assasin);
var shogun= new Knight(shogun);
var peasant=new Knight(peasant);
var squire=new Knight(squire);
var calvary=new Knight(calvary);
var knight=new Knight(knight);
