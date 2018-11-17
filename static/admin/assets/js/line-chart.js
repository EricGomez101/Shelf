if ($('#visitor_graph').length) {

    Highcharts.chart('visitor_graph', {
        chart: {
            type: 'areaspline'
        },
        title: false,
        yAxis: {
            title: false,
            gridLineColor: '#fbf7f7',
            gridLineWidth: 1
        },
        xAxis: {
            gridLineColor: '#fbf7f7',
            gridLineWidth: 1
        },
        series: [{
                name: 'Visitors',
                data: [1, 5 , 3, 10, 11, 1, 9],
                fillColor: 'rgba(76, 57, 249, 0.5)',
                lineColor: 'transparent'
            },
        ]
    });
}
