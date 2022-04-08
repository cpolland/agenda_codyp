var Time = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do"));


function color(){
    $(".time-block").each(function(){
    var setTime = parseInt($(this).attr("id").replace("hour-",''));
    var currentTime = parseInt(moment().format('H'));

    console.log('setTime',setTime)
    console.log('currentTime',currentTime)
    $(this).removeClass("past present future");
    if (setTime < currentTime){
        console.log(setTime, currentTime);
    }

}