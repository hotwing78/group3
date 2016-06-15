// var goodGuy;
// $('.knightGuys').on('click', function(e) {
//   e.preventDefault();
//   console.log('event', e.currentTarget.id);
//   goodGuy = e.currentTarget.id;
// });

function killEnemy(randEnemy) {
    $(`#${randEnemy.Name}`).addClass('hidden');
}

$('#Knight').on('click', function(e) {
    e.preventDefault();
    // console.log('knight', knight);
    var randNum = Math.floor(Math.random() * 10);
    var randEnemy;

    if (randNum <= 3) {
        randEnemy = Japan.samurai;
    } else if (randNum >= 4 && randNum <= 6) {
        randEnemy = Japan.shogun;
    } else if (randNum >= 7) {
        randEnemy = Japan.assasin;
    }

    if (randEnemy.Health > 0) {
        knight.Attack(randEnemy);
    } else {
        killEnemy(randEnemy);
    }
});
