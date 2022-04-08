$(time);

function time() {
  
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });
    $(".saveBtn").on("click", handleSave);
}

function color() {
  $(".time-block").each(function() {
    var setTime = parseInt($(this).attr("id").replace("hour-", ""));
    var currentTime = parseInt(moment().format("H"));
   
    console.log('setTime',setTime)
    console.log('currentTime',currentTime)
    $(this).removeClass("past present future");
    if (setTime < currentTime) {
        console.log(`setTime ${setTime} < current ${currentTime}`)
      $(this).addClass("past");
    } else if (setTime > currentTime) {
      console.log(`setTime ${setTime} > current ${currentTime}`)
      $(this).addClass("future");
    } else {
      console.log(`setTime ${setTime}  = current ${currentTime}`)
      $(this).addClass("present");
    }
  });
}
  color();
  setInterval(color, 60000);

function handleSave(event) {
 
  var hourId = $(this).parent().attr("id");
 
  localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}