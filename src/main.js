function submitQuiz() {
  var allCheckedRadios = $(":input:radio:checked");
  if (allCheckedRadios.length !== 8) {
    alert('Please finish all question before submit.')
    return;
  }
  var totalScore = 0;
  for (var i = 0; i < allCheckedRadios.length; i += 1) {
    totalScore += parseInt(allCheckedRadios[i].value);
  }
  $('#quizModal').modal('toggle');
  $('#quizBtn').hide();
  $('#scoreDiv').show();
  totalScore = Math.round((24 - totalScore) / 24 * 1000) / 100 // Higher the better
  $('#scoreVal').html(totalScore + ' / 10')
  var value = totalScore * 10
  $('#sleep-score-bar').css('width', value+'%').attr('aria-valuenow', value);
  $('#sleep-score-bar').removeClass('bg-success bg-warning bg-danger');
  if (totalScore < 4) {
    $('#sleep-score-bar').addClass("bg-danger");
    $('#scoreVal')[0].style.color = "red";
    $('#score-explain').html('You have a pretty low sleep score. You should consider whether you are getting enough sleep, need to improve your sleep, or should seek medical advice');
  } else if (totalScore < 7) {
    $('#sleep-score-bar').addClass("bg-warning");
    $('#scoreVal')[0].style.color = "yellow";
    $('#score-explain').html('You have an average sleep score. You should try to get more sleep and have a healthy life style');
  } else {
    $('#sleep-score-bar').addClass("bg-success");
    $('#scoreVal')[0].style.color = "green";
    $('#score-explain').html('You have a healthy sleep style, keep on!');
  }
}