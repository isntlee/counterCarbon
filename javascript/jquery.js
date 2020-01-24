
   
   var Total = 0;
   var mobilityTotal = 0;
   var householdTotal = 0;
   var foodTotal = 0;
   
   
document.addEventListener('DOMContentLoaded', function () {
    var graphMobility = Highcharts.chart('graphMobility', {
    chart: {
        type: 'column',
        backgroundColor: "#fafafa", 
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
       sum = 0.0;
        
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
        backgroundColor: "#fafafa", 
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
       sum = 0.0;
        
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
        data: [2.5, 2.3, 1.7, 1.9],
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
       sum = 0.0;
       
       
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


