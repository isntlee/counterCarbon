


   
   
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
        valueSuffix: 't'
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
        data: [2.5, 3.1, 2.2, 1.6],
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
       sum = 0.8;
        
        $("#mobilityBox input:radio:checked").each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
        
        var mobilityTotal = sum;
        
        graphMobility.series[1].setData([sum], true);
        
      });
    });
    
    
document.addEventListener('DOMContentLoaded', function () {
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
        valueSuffix: 't'
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
        data: [4.5, 5.1, 3.9, 5.2],
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
       sum = 1.7;
        
        $("#foodBox input:radio:checked").each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
        
        var foodTotal = sum;
        
        graphFood.series[1].setData([sum], true);
        
      });
    });


document.addEventListener('DOMContentLoaded', function () {
    var graphHousehold = Highcharts.chart('graphHousehold', {
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
        valueSuffix: 't'
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
        data: [7.1, 7.4, 8.4, 7.1],
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
       sum = 0.1;
       
       
        
        $("#householdBox input:radio:checked").each(function(idx, elm) {
            sum += parseFloat(elm.value, 10);
        });
        
        var householdTotal = sum;
        
        graphHousehold.series[1].setData([sum], true);
        
      });
    });







document.addEventListener('DOMContentLoaded', function () {
        var circlePie = Highcharts.chart('circlePie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false, 
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
        text: 'Household: 3t <br> Total: 11t ', 
        align: 'center',
        verticalAlign: 'middle',
        y: 35, 
        style: {
				fontSize: '3.1vh',
				color: '#404040', 
				fontWeight: '600', 
				lineHeight: '45', 
				fontFamily: 'Verdana'
			}
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        
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
            ['Mobility', 28.9],
            ['Food', 23.29],
            ['Household', 33.65],
        ]
    }]
});
});




document.addEventListener('DOMContentLoaded', function () {
        var windRose = Highcharts.chart('windRose', {
    data: {
        table: 'freq',
        startRow: 1,
        endRow: 17,
        endColumn: 7
    },
    
    chart: {
        polar: true,
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

    subtitle: {
        text: ''
    },
    
    pane: {
        size: '82%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
        layout: 'vertical'
    },

    xAxis: {
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
    }
});
});
 



