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



$(function() {

  //load svgs
  $("#cars-container").load('svg/cars-visual.svg');
  $("#trees-container").load('svg/trees-visual.svg');
  $("#carbon-container").load('svg/carbon-visual.svg');


  $('#cars-button').click(function() {
    $('[id^="trees-"], [id^="carbon-"], [id^="tree"], [id^="carbon"]').removeClass('active');
    $('[id^="cars-"], #car1, #car2, #car3, #car4, #car5, #car6').addClass('active');
  });

  $('#trees-button').click(function() {
    $('[id^="cars-"], [id^="carbon-"], [id^="car"], [id^="carbon"]').removeClass('active');
    $('[id^="trees-"], #tree1, #tree2, #tree3, #tree4, #tree5, #tree6, #tree7').addClass('active');
  });

  $('#carbon-button').click(function() {
    $('[id^="cars-"], [id^="trees-"], [id^="tree"], [id^="car"]').removeClass('active');
    $('[id^="carbon-"], #carbon1, #carbon2, #carbon3, #carbon4').addClass('active');
  });

});




