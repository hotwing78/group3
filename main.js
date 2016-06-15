// var goodGuy;
// $('.knightGuys').on('click', function(e) {
//   e.preventDefault();
//   console.log('event', e.currentTarget.id);
//   goodGuy = e.currentTarget.id;
// });

function killEnemy(randEnemy) {
    $(`#${randEnemy.Name}`).addClass('hidden');
}

// knight attack click
$('#Knight').on('click', function(e) {
    e.preventDefault();
    // console.log('knight', knight);
    // var randAttack = Math.floor(Math.random() * knight.Damage);
    // console.log(randAttack);
    var randNum = Math.floor(Math.random() * 10);
    var randEnemy;

    if (randNum <= 3) {
        randEnemy = samurai;
    } else if (randNum >= 4 && randNum <= 6) {
        randEnemy = shogun;
    } else if (randNum >= 7) {
        randEnemy = assasin;
    }

    if (randEnemy.Health > 0) {
        Combatant.attackMain(randEnemy);
    } else {
        killEnemy(randEnemy);
    }
});

//calvary attack click with random enemy selector
$('#Calvary').on('click', function(e) {
    e.preventDefault();
    // console.log('knight', knight);
    var randNum = Math.floor(Math.random() * 10);
    var randEnemy;

    if (randNum <= 3) {
        randEnemy = samurai;
    } else if (randNum >= 4 && randNum <= 6) {
        randEnemy = shogun;
    } else if (randNum >= 7) {
        randEnemy = monk;
    }

    if (randEnemy.Health > 0) {
        calvary.attackMain(randEnemy);
    } else {
        killEnemy(randEnemy);
    }
});
