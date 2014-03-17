$(document).foundation();

// chart.js visual
var ctx = $("#widgetChart").get(0).getContext("2d");

var chartData = {
  labels : ["January 2013","January 2014"],
  datasets : [
    {
      fillColor : "rgba(46,204,113,1)",
      strokeColor : "rgba(46,204,113,1)",
      data : [791,573]
    }
  ]
}

var chartOptions = {
  scaleFontFamily : "'Open Sans'",
  scaleOverride : true,
  scaleStartValue : 0,
  scaleStepWidth : 100,
  scaleSteps : 8,
  scaleShowLabels : false,
  scaleShowGridLines : false,
  scaleFontStyle : "bold"
  }

var myNewChart = new Chart(ctx).Bar(chartData, chartOptions);



