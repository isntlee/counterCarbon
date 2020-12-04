
var Total = 0;
   var mobilityTotal = 0;
   var householdTotal = 0;
   var foodTotal = 0;
   
   
document.addEventListener('DOMContentLoaded', function () {
    var graphMobility = Highcharts.chart('graphMobility', {
    chart: {
        type: 'column',
        backgroundColor: "transparent", 
    },
    
    credits: { 
        enabled: false, 
    },
    
    
    navigation: {
        buttonOptions: {
            enabled: false,
        }
    },
    
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Ireland',
            'UK',
            'EU', 
            'OECD', 
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'CO2 Emissions in metric tons'
        }
    }, {
        title: {
            text: ''
        },
        opposite: true
    }],
    legend: {
        enabled: false, 
        shadow: false
    },
    tooltip: {
        shared: true, 
        valueSuffix: 't', 
        pointFormat: '{series.name}: <b>{point.y:.1f}t</b><br/>', 
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Per capita CO2 emissions',
        color: 'rgba(165,170,217,1)',
        data: [5.3, 5.0, 4.7, 4.9],
        pointPadding: -0.2,
        pointPlacement: 0.0
    }, {
        name: 'Personal CO2 footprint', 
        opacity: 0.9,
        borderWidth: 3, 
        borderColor:'white',
        dashStyle: 'ShortDot', 
        data: [0.0],
        pointPadding: -0.2,
        pointPlacement: 0.0
        }]
    });

    var sum = 0;
    
    $("#mobilityBox input:radio").click(function() {
       sum = 0;
        
        $("#mobilityBox input:radio:checked").each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
        
        mobilityTotal = ((Math.round(sum*10))/10);
        
        Total = householdTotal + mobilityTotal + foodTotal;
        
        circlePie.setTitle(null, {text: "Total : "+ (Total.toFixed(1)) + "t" });
        
        circlePie.series[0].points[0].update({
         y: mobilityTotal
      });
        
        windRose.series[0].points[0].update({
      y: mobilityTotal
      });
        
        graphMobility.series[1].setData([sum], true);
      });
    
    
    
    
    
    

    var graphFood = Highcharts.chart('graphFood', {
    chart: {
        type: 'column', 
        backgroundColor: "transparent", 
    },
    
    credits: { 
        enabled: false, 
    },
    
    navigation: {
        buttonOptions: {
            enabled: false,
        }
    },
    
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Ireland',
            'UK',
            'EU', 
            'OECD', 
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'CO2 Emissions in metric tons'
        }
    }, {
        title: {
            text: ''
        },
        opposite: true
    }],
    legend: {
        enabled: false, 
        shadow: false
    },
    tooltip: {
        shared: true, 
        valueSuffix: 't', 
        pointFormat: '{series.name}: <b>{point.y:.1f}t</b><br/>', 
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series:
    [{
        name: 'Per capita CO2 emissions',
        color: 'rgba(165,170,217,1)',
        data: [3.1, 2.9, 2.7, 2.5],
        pointPadding: -0.2,
        pointPlacement: 0.0
    }, {
        name: 'Personal CO2 footprint', 
        opacity: 0.9,
        borderWidth: 3, 
        borderColor:'white',
        dashStyle: 'ShortDot', 
        data: [0.0],
        pointPadding: -0.2,
        pointPlacement: 0.0
        }]
    });


    var sum = 0;
    
    $("#foodBox input:radio").click(function() {
       sum = 0;
        
        $("#foodBox input:radio:checked").each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
        
        foodTotal = ((Math.round(sum*10))/10);
        
        Total = householdTotal + mobilityTotal + foodTotal;
        
        circlePie.setTitle(null, {text: "Total : "+ (Total.toFixed(1)) + "t" });
        
        circlePie.series[0].points[1].update({
      y: foodTotal
        });
        
        windRose.series[1].points[0].update({
      y: foodTotal
       });
       
        graphFood.series[1].setData([sum], true);
       });








    var graphHousehold = Highcharts.chart('graphHousehold', {
    chart: {
        type: 'column', 
        backgroundColor: "transparent", 
    },
    
    credits: { 
        enabled: false, 
    },
    
    navigation: {
        buttonOptions: {
            enabled: false,
        }
    },
    
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Ireland',
            'UK',
            'EU', 
            'OECD', 
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'CO2 Emissions in metric tons'
        }
    }, {
        title: {
            text: ''
        },
        opposite: true
    }],
    legend: {
        enabled: false, 
        shadow: false
    },
    tooltip: {
        shared: true, 
        valueSuffix: 't',
        pointFormat: '{series.name}: <b>{point.y:.1f}t</b><br/>', 
  
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Per capita CO2 emissions',
        color: 'rgba(165,170,217,1)',
        data: [2.4, 2.2, 1.6, 1.8],
        pointPadding: -0.2,
        pointPlacement: 0.0
    }, {
        name: 'Personal CO2 footprint', 
        opacity: 0.9,
        borderWidth: 3, 
        borderColor:'white',
        dashStyle: 'ShortDot', 
        data: [0.0],
        pointPadding: -0.2,  
        pointPlacement: 0.0
        }]
       
    });
  

    var sum = 0;
    
    $("#householdBox input:radio").click(function() {
       sum = 0;
       
       
        $("#householdBox input:radio:checked").each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
         
        householdTotal = ((Math.round(sum*10))/10);
        
        Total = householdTotal + mobilityTotal + foodTotal;
        
        circlePie.setTitle(null, {text: "Total : "+ (Total.toFixed(1)) + "t" });
        
        
        circlePie.series[0].points[2].update({
      y: householdTotal
    });
        windRose.series[2].points[0].update({
        y: householdTotal
    });
        graphHousehold.series[1].setData([sum], true);
    });











    var circlePie = Highcharts.chart('circlePie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false, 
        backgroundColor: 'transparent',
    },
    
    
    
    credits: { 
        enabled: false, 
    },
    
    navigation: {
        buttonOptions: {
            enabled: false,
        }
    },
    
    title: {
        text: 'CO2 Emissions', 
        align: 'center',
        verticalAlign: 'middle',
        y: 10, 
        style: {
				fontSize: '3vw',
				color: '#404040', 
				fontWeight: '600', 
				lineHeight: '1vw', 
				fontFamily: 'Verdana'
			}
    },
    
    subtitle: {
        text: 'Total: 0.0t', 
        align: 'center',
        verticalAlign: 'middle',
        y: 45, 
        style: {
				fontSize: '3vw',
				color: '#404040', 
				fontWeight: '600', 
				lineHeight: '1vw', 
				fontFamily: 'Verdana'
			}
    },
    
    tooltip: {
        pointFormat: 'CO2 (metric tons): <b>{point.y:.1f}t</b>\n'+
               '<br>{series.name}: <b>{point.percentage:.1f}%</b>'
        
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: 0,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                }
            },
            startAngle: -35,
            endAngle: -36,
            center: ['50%', '50%'],
            size: '100%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Emissions share',
        innerSize: '53%',
        data: [
            ['Mobility', 0],
            ['Food', 0],
            ['Household', 0],
        ]
    }], 

    responsive: {
        rules: [{
            condition: {
                maxWidth: 550,
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
                title: {
                    style: {
                        fontSize: '5vw',
                        lineHeight: '1.5vw',
                        }
                    },
                subtitle: {
                    style: {
                        fontSize: '5vw',
                        lineHeight: '1.5vw',
                        }
                    }
                }
            }]
        }
    });

 
 
    var windRose = Highcharts.chart('windRose', {
    chart: {
        polar: true,
        type: 'column', 
        backgroundColor: 'transparent',
    },
    
    credits: { 
        enabled: false, 
    },
    
    navigation: {
        buttonOptions: {
            enabled: false,
        }
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },
    
    pane: {
        size: '82%'
    },

    legend: {
        enabled: false, 
        align: 'right',
        verticalAlign: 'top',
        y: 100,
        layout: 'vertical'
    },

    xAxis: {
        categories: ["This is Yours","Ireland","UK","Germany","France", "Italy","Spain",
        "EU","Canada","USA","OECD","World","China","India","Australia","Japan"],
        visible: true, 
        tickmarkPlacement: 'on', 
        lineWidth: 0,
        gridLineWidth: 0
    },

    yAxis: {
        visible: false, 
        min: 0,
        endOnTick: false,
        showLastLabel: true,
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '';
            }
        },
        reversedStacks: false,
        lineWidth: 0,
        tickInterval: 100, 
    },

    tooltip: {
        valueSuffix: 't'
    },

    plotOptions: {
        series: {
            stacking: 'normal',
            shadow: false,
            groupPadding: 0,
            pointPlacement: 'on'
            
        }
    },
            
     series:[{
         "name": "Mobility",
                "data": [
                    ["This is Yours", 0.1],
                    ["Ireland", 5.3],
                    ["UK", 5.1],
                    ["Germany", 3.5],
                    ["France", 3.1],
                    ["Italy", 3.4],
                    ["Spain", 3.4],
                    ["EU", 4.7],
                    ["Canada", 7.3],
                    ["USA", 7.9],
                    ["OECD", 4.9],
                    ["World", 1.4],
                    ["China", 2.1],
                    ["India", 0.6],
                    ["Australia", 7.7],
                    ["Japan", 3.7]
                ], 
                "_colorIndex": 0
            }, {
                "name": "Food",
                "data": [
                    ["This is Yours", 0.1],
                    ["Ireland", 3.2],
                    ["UK", 2.9],
                    ["Germany", 2.9],
                    ["France", 2.3],
                    ["Italy", 1.6],
                    ["Spain", 1.7],
                    ["EU", 2.4],
                    ["Canada", 2.6],
                    ["USA", 3.3],
                    ["OECD", 2.5],
                    ["World", 1.3],
                    ["China", 1.5],
                    ["India", 0.8],
                    ["Australia", 2.6],
                    ["Japan", 2.5]
                ],
                "_colorIndex": 1
            }, {
                "name": "Household",
                "data": [
                    ["This is Yours", 0.1],
                    ["Ireland", 2.4],
                    ["UK", 2.3],
                    ["Germany", 2.6],
                    ["France", 2.5],
                    ["Italy", 2.1],
                    ["Spain", 2.2],
                    ["EU", 2.0],
                    ["Canada", 3.3],
                    ["USA", 3.2],
                    ["OECD", 1.9],
                    ["World", 1.2],
                    ["China", 1.8],
                    ["India", 0.5],
                    ["Australia", 2.9],
                    ["Japan", 2.7]
                ],
                "_colorIndex": 2
            }]
    });
});
 



