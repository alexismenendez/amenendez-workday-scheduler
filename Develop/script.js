// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
  var currentHour = dayjs().hour();


  //////////////////////////////////
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //////////////////////////////////
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
  ////////////////////////////

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  /////////////////////////////
  //Displays the current date in the header
  var today = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(today);
  
});
