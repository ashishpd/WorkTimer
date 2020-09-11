var d3 = require("d3");
const { min } = require("d3");

//var startingMinute = .5;
var startingMinute = 30;
var endDate = new Date();
endDate.setMinutes(endDate.getMinutes() + startingMinute);
document.getElementById('counter').innerText = startingMinute + "m";

var hourFormater = d3.timeFormat("%I:%M%p");
document.getElementById('startTime').innerText = "Started at: " + hourFormater(new Date());
document.getElementById('endTime').innerText = "Finish by: " + hourFormater(endDate);
var myInt = setInterval(function () {
    var curDate   = new Date();    
    var totalSeconds = d3.timeSecond.count(curDate, endDate);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - minutes * 60;
    //console.log(minutes, totalSeconds);
    if(totalSeconds < 0) {
      seconds = 60 + minutes * 60 - totalSeconds ;
      minutes++;
      if(minutes==0) minutes = "-"+minutes;
    }
    if(seconds<10) seconds = "0"+seconds;
    var delta = minutes + "m:" + seconds +"s"
    //if(seconds == 0)
    //    delta = minutes + "m";
    document.getElementById('counter').innerText = delta;
    document.title = delta;
}, 10000);

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

var monday = getMonday(new Date());
//Locate svg
var svgContainer = d3.select("svg");
const totalRows = 4
const columnsPerRow = 5
for (var row = 0; row < totalRows; row++) {
  for (var column = 0; column < columnsPerRow; column++) {    
    var day = (addDays(monday, column + row*7)).getDate();
    var x = (60 * (column+1));
    if(day>=10)
      x-= 11;
    var fill = "white";
    var stroke = "black";
    var fontColor = "black";
    var today = (new Date()).getDate();
    if(day == today) {
      fill="red";
      stroke = "red";
      fontColor = "white";
    }

    if(row==0 && day ==today) {
      var circle = svgContainer.append("circle")
      .attr("cx", 60 * (column+1))
      .attr("cy", 30)
      .attr("r", 25)
      .attr("stroke",stroke)
      .attr("stroke-width",2)
      .attr("fill",fill);
      //if(day<today) circle.attr("stroke","white");
    }

    var y = 38;  
    if(row == 1) y = 85;
    if(row == 2) y = 115;
    if(row > 2) y += 35*row;
    var text = svgContainer.append("text")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("font-size","1.5em")
                            .attr("fill",fontColor)
                            .text(day);

  }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthsPerRow = 5;
for (var column = 0; column < columnsPerRow; column++) {
  var today = new Date();
  today.setMonth(today.getMonth() + column);
  var text = svgContainer.append("text")
                        .attr("x", (55 * (column+1)))
                        .attr("y", 170)
                        .attr("font-size","1.5em")
                        .attr("fill",fontColor)
                        .text(months[today.getMonth()]);

}