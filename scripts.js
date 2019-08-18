$(document).ready(function() {
  $('form.questions').submit(function(event){
    event.preventDefault();

    var pet = $('.responses#pet').val();
    var lifestyle = $('.responses#lifestyle').val();
    var schedule = $('.responses#schedule').val();
    var social = $('.responses#social').val();
    var money = $('.responses#money').val();
    var score = parseInt(pet) + parseInt(lifestyle) + parseInt(schedule) + parseInt(social) + parseInt(money);

    console.log(pet);
    console.log(lifestyle);
    console.log(schedule);
    console.log(social);
    console.log(money);
    console.log(score);

    $('.results').hide();

    if (score <= 3) {
      $('.results#python').show();
    } else if (score > 3 && score <= 7) {
      $('.results#javascript').show();
    } else if (score > 7) {
      $('.results#ruby').show();
    }
  });
});
