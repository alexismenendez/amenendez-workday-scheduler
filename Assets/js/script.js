$(document).ready(function () {
  var currentHour = dayjs().hour();

  //Saves user input into local storage and saves user input on page reload
  $('.saveBtn').on('click', function() {
    var userInput = $(this).siblings('.description').val();
    var blockId = $(this).closest('.time-block'). attr('id');

    localStorage.setItem(blockId, userInput);
  });

  $('.time-block').each(function() {
    var blockId = $(this).attr('id');
    var savedText = localStorage.getItem(blockId);

    if (savedText !== null) {
      $(this).find('.description').val(savedText);
    };
  });

  // Applies past, present and future classes to each time block based off the current hour
  function updateBlockClasses() {
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split("-")[1]);
      console.log(blockHour);

      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  };
  updateBlockClasses();

  //Displays the current date in the header
  var today = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(today);
  
});
