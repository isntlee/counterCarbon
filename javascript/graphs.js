document.addEventListener('DOMContentLoaded', function () {
    var mobilityGraph = Highcharts.chart('graph-mobility', {
    chart: {
        type: 'column'
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
        data: [60, 77, 85, 91],
        pointPadding: -0.2,
        pointPlacement: 0.0
    }, {
        name: 'Personal CO2 footprint', 
        opacity: 0.9,
        borderWidth: 3, 
        borderColor:'white',
        dashStyle: 'ShortDot', 
        data: [40],
        pointPadding: -0.2,
        pointPlacement: 0.0
        }]
    });
});


document.addEventListener('DOMContentLoaded', function () {
        var circlePie = Highcharts.chart('pie-circle', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
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
        text: 'Not there yet..',
        align: 'center',
        verticalAlign: 'middle',
        y: 45
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: 0,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
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
        innerSize: '50%',
        data: [
            ['Mobility', 58.9],
            ['Food', 13.29],
            ['Household', 13],
        ]
    }]
});
});


document.addEventListener('DOMContentLoaded', function () {
        var windRose = Highcharts.chart('rose-wind', {
    data: {
        table: 'freq',
        startRow: 1,
        endRow: 17,
        endColumn: 7
    },
    
    chart: {
        polar: true,
        type: 'column'
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
        size: '85%'
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