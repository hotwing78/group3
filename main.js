<<<<<<< HEAD
$('#Name').append(`${knight.Name}`)
$('#Health').append(`${knight.Health}`)
$('#Attack').append(`${knight.Damage}`)
$('#Evade').append(`${knight.Evasion}`)

// var goodGuy;
// $('.knightGuys').on('click', function(e) {
//   e.preventDefault();append
//   console.log('event', e.currentTarget.id);
//   goodGuy = e.currentTarget.id;
// });


// function killEnemy(randEnemy) {
//     $(`#${randEnemy.Name}`).addClass('hidden');
// }
//
// // knight attack click
// $('#Knight').on('click', function(e) {
//     e.preventDefault();
//     // console.log('knight', knight);
//     // var randAttack = Math.floor(Math.random() * knight.Damage);
//     // console.log(randAttack);
//     var randNum = Math.floor(Math.random() * 10);
//     var randEnemy;
//
//     if (randNum <= 3) {
//         randEnemy = samurai;
//     } else if (randNum >= 4 && randNum <= 6) {
//         randEnemy = shogun;
//     } else if (randNum >= 7) {
//         randEnemy = assasin;
//     }
//
//     if (randEnemy.Health > 0) {
//         Combatant.attackMain(randEnemy);
//     } else {
//         killEnemy(randEnemy);
//     }
// });
//
// //calvary attack click with random enemy selector
// $('#secondaryAttack').on('click', function(e) {
//     e.preventDefault();
//     // console.log('knight', knight);
//     var randNum = Math.floor(Math.random() * 10);
//     var randEnemy;
//
//     if (randNum <= 3) {
//         randEnemy = samurai;
//     } else if (randNum >= 4 && randNum <= 6) {
//         randEnemy = shogun;
//     } else if (randNum >= 7) {
//         randEnemy = monk;
//     }
//
//     if (randEnemy.Health > 0) {
//         calvary.attackMain(randEnemy);
//     } else {
//         killEnemy(randEnemy);
//     }
// });
=======
$('#mainAttack').on('click',function(){
  knight.attackMain(shogun);
});
$('#lightAttack').on('click',function(){
  knight.attackSecondary(shogun)
})
$('#dodge').on('click',function(){
  knight.dodge(shogun)
})
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

$('.insertCoin').on('click', function(event){
   console.log("insert screen removed")
   event.preventDefault();
   $('.insertCoin').addClass('hidden');
   $('.introScreen').addClass('hidden');
   $('.main-container').removeClass('hidden');
 });
>>>>>>> b0377e22b274da0e2d1d7ddd4aaa1cbc0d92334d
