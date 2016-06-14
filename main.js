$(document).ready(function() {
    KnightsNinjas.init();

})

function Combatants(name, attack, health, defense) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.defense = defense;
}

function Knight()
var KnightsNinjas = {
    init: function() {
        KnightsNinjas.events();
    },
    events: function() {



        var Knights = {
            Name: "Knights",
            Attack: 25,
            Health: 100,
            Defense: 10,
        }
        var Calvary = {
            Name: "Calvary",
            Attack: 15,
            Health: 100,
            Defense: 5,
        }
        var Squire = {
            Name: "Squire",
            Attack: 12,
            Health: 100,
            Defense: 0,

        }
        var Peasant = {
            Name: "Peasant",
            Attack: 6,
            Health: 100,
            Defense: 0,
        }
        var Shogon = {
            Name: "Shogun",
            Attack: 25,
            Health: 100,
            Defense: 0,

        }
        var Assasin = {
            Name: "Assasin",
            Attack: 15,
            Health: 100,
            Defense: 0,

        }
        var Samauri = {
            Name: "Samauri",
            Attack: 12,
            Health: 100,
            Defense: 0,

        }
        var Monk = {
            Name: "Monk",
            Attack: 6,
            Health: 100,
            Defense: 0,
        }
    }
}
