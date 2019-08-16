$(document).ready(function() {
  $('form.questions').submit(function(event){
    event.preventDefault();

    var pet = parseInt($('.questions#pet').val());
    var lifestyle = parseInt($('.questions#lifestyle').val());
    var schedule = parseInt($('.questions#schedule')).val();
    var social = parseInt($('.questions#social').val());
    var money = parseInt($('.questions#money').val());
    var score = pet + lifestyle + schedule + social + money;

    console.log(pet);
    console.log(lifestyle);
    console.log(schedule);
    console.log(social);
    console.log(money);
    console.log(score);

  })
})
