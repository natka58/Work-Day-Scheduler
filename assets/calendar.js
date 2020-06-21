$(document).ready(function () {
  renderPlans();

  function renderPlans() {
    for (var i = 0; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
    }
  }
  $("#currentDay").append();

  function addDate() {
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm a"));
  }
  setInterval(addDate, 1000);

  for (var i = 0; i <= 12; i++) {
    inputHour = $("#" + i + "Row").attr("time-data");
    inputHourInt = parseInt(inputHour);

    if (nowHourInt === inputHourInt) {
      $("#" + i + "Row").addClass("present");
    }
    if (nowHourInt > inputHourInt) {
      $("#" + i + "Row").addClass("past");
    }
    if (nowHourInt < inputHourInt) {
      $("#" + i + "Row").addClass("future");
    }
  }

  saveBtn.on("click", function () {
    rowHour = $(this).attr("time-data");
    input = $("#" + rowHour + "Row").val();
    localStorage.setItem(rowHour, input);
  });
});

$("#9Row").attr("time-data", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("time-data", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("time-data", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("time-data", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("time-data", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("time-data", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("time-data", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("time-data", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("time-data", moment("5:00 pm", "h:mm a").format("HH"));

saveBtn = $(".saveBtn");
scheduleEvents = [];
nowHour = moment().format("HH");
nowHourInt = parseInt(nowHour);