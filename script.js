var lineChart1;
var barChart1;
var radarChart;
var mapChart;

function startFunction() {
    lineChart1 = Highcharts.chart('line1', {
        title: {
            text: 'California Population and Arrests by Ethnicity',
            style: {
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#000000'
            }
        },
        subtitle: {
            text:'',
            style: {
                fontFamily: 'Arial',
                fontSize: '14px',
                color: '#000000'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: {point.y:.1f}%',
            style: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000'
            }
        },
        yAxis: {
            min: 0,
            max: 50,
            title: {
                text: 'Percent',
                style: {
                    fontFamily: 'Arial',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    color: '#000000'
                },
                align: 'high',
                rotation: 0,
                y: -25,
                x: 55
            },
            labels: {
                style: {
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    color: '#000000'
                }
            }
        },
        xAxis: {
            categories: ['California Population', 'Arrests'],
            labels: {
                style: {
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    color: '#000000'
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000',
                fontWeight: 'None'
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },
        series: [{
            name: 'Hispanic',
            data: [39.4, 42.4]
        }, {
            name: 'White',
            data: [36.5, 35.4]
        },{
            name: 'Other',
            data: [17.6, 6.2]
        },{
            name: 'Black',
            data: [6.5, 16.0]
        }],
        colors: ['#fdbf11', '#1696d2', '#55b748', '#000000'],
        accessibility: {
            description: 'This is a line chart comparing the population percentage of each ethnicity in California, compared to the arrest percentage for each ethnicity in California.'
        }
    });

    barChart1 = Highcharts.chart('bar1', {
        chart: {
            type: 'column'
        },
        title: {
			text: 'Arrest Types by Ethnicity',
			style: {
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#000000'
            }
        },
        subtitle: {
            text:'',
            style: {
                fontFamily: 'Arial',
                fontSize: '14px',
                color: '#000000'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: {point.y:.1f}%',
            style: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000'
            }
        },
        xAxis: {
			categories: ['Hispanic', 'White', 'Other', 'Black'],
			title: {
                text: '',
                style: {
                    fontFamily: 'Arial',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    color: '#000000'
                }
            },
            labels: {
                style: {
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    color: '#000000'
                }
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Percent',
                style: {
                    fontFamily: 'Arial',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    color: '#000000'
                },
                align: 'high',
                rotation: 0,
                y: -25,
                x: 55
            },
            labels: {
                style: {
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    color: '#000000'
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000',
                fontWeight: 'None'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Felonies',
            data: [28.2, 23.9, 28.0, 36.0]
        }, {
            name: 'Misdemeanors',
            data: [71.8, 76.1, 72.0, 64.0]
        }],
        colors: ['#fdbf11', '#1696d2'],
        accessibility: {
            description: 'This is a stacked column chart comparing felony and misdemeanor arrests for each ethnicity in California.'
        }
    });

    radarChart = Highcharts.chart('radar1', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Felony Arrest Categories',
            x: 0,
            style: {
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#000000'
            }
        },
        subtitle: {
            text:'',
            x: -80,
            style: {
                fontFamily: 'Arial',
                fontSize: '14px',
                color: '#000000'
            }
        },
        pane: {
            size: '80%'
        },
        xAxis: {
            categories: ['Violent', 'Property', 'Drug Offense', 'Sex Offense', 'Other'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    color: '#000000'
                }
            }
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 50
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: {point.y:,.0f}%<br/>',
            style: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000'
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000',
                fontWeight: 'None'
            }
        },
        series: [{
            name: 'Black',
            data: [41.3, 22.7, 6.4, 1.7, 28.0],
            pointPlacement: 'on'
        },{
            name: 'Other Ethnicities',
            data: [36.0, 23.5, 10.0, 1.9, 28.7],
            pointPlacement: 'on'
        }],
        colors: ['#fdbf11', '#1696d2'],
        accessibility: {
            description: 'This is radar chart comparing types of felony arrests for Black Californians and all other ethnicities in California.'
        }
    });

    var data = [
        ['us-ca-001', 2239], //Alameda
        ['us-ca-003', 6368], //Alpine
        ['us-ca-005', 2786], //Amador
        ['us-ca-007', 4440], //Butte
        ['us-ca-009', 2434], //Calaveras
        ['us-ca-011', 4291], //Colusa
        ['us-ca-013', 2125], //Contra Costa
        ['us-ca-015', 6029], //Del Norte
        ['us-ca-017', 2311], //El Dorado
        ['us-ca-019', 3093], //Fresno
        ['us-ca-021', 4552], //Glenn
        ['us-ca-023', 5249], //Humboldt
        ['us-ca-025', 2787], //Imperial
        ['us-ca-027', 4168], //Inyo
        ['us-ca-029', 3813], //Kern
        ['us-ca-031', 4815], //Kings
        ['us-ca-033', 5531], //Lake
        ['us-ca-035', 2690], //Lassen
        ['us-ca-037', 2411], //Los Angeles
        ['us-ca-039', 3505], //Madera
        ['us-ca-041', 2237], //Marin
        ['us-ca-043', 3863], //Mariposa
        ['us-ca-045', 4903], //Medocino
        ['us-ca-047', 3583], //Merced
        ['us-ca-049', 4520], //Modoc
        ['us-ca-051', 2409], //Mono
        ['us-ca-053', 2712], //Monterey
        ['us-ca-055', 2919], //Napa
        ['us-ca-057', 2815], //Nevada
        ['us-ca-059', 2560], //Orange
        ['us-ca-061', 2263], //Placer
        ['us-ca-063', 3873], //Plumas
        ['us-ca-065', 1793], //Riverside
        ['us-ca-067', 2322], //Sacramento
        ['us-ca-069', 2620], //San Benito
        ['us-ca-071', 2995], //San Bernadino
        ['us-ca-073', 2530], //San Diego
        ['us-ca-075', 1767], //San Francisco
        ['us-ca-077', 2622], //San Joaquin
        ['us-ca-079', 3528], //San Luis Obispo
        ['us-ca-081', 2212], //San Mateo
        ['us-ca-083', 3542], //Santa Barbara
        ['us-ca-085', 1854], //Santa Clara
        ['us-ca-087', 3793], //Santa Cruz
        ['us-ca-089', 4676], //Shasta
        ['us-ca-091', 2801], //Sierra
        ['us-ca-093', 4798], //Siskiyou
        ['us-ca-095', 2795], //Solano
        ['us-ca-097', 3227], //Sonoma
        ['us-ca-099', 3529], //Stanislaus
        ['us-ca-101', 4550], //Sutter
        ['us-ca-103', 3923], //Tehama
        ['us-ca-105', 3456], //Trinity
        ['us-ca-107', 4678], //Tulare
        ['us-ca-109', 5376], //Tuolumne  
        ['us-ca-111', 3901], //Ventura
        ['us-ca-113', 2774], //Yolo
        ['us-ca-115', 4072] //Yuba
    ];

    // Create the chart
    mapChart = Highcharts.mapChart('map', {
        chart: {
            map: 'countries/us/us-ca-all'
        },
        title: {
            text: 'Map of Arrests by County per 100,000',
            style: {
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#000000'
            }
        },
        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-ca-all.js">California</a>',
            style: {
                fontFamily: 'Arial',
                fontSize: '14px',
                color: '#000000'
            }
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'top'
            }
        },
        colorAxis: {
            dataClassColor: 'category',
            dataClasses: [{
                from: 0,
                to: 2420
            }, {
                from: 2420,
                to: 3000
            }, {
                from: 3000,
                to: 3625
            }, {
                from: 3625,
                to: 4538
            }, {
                from: 4538,
                to: 6368
            }],
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000',
                fontWeight: 'None'
            }
        },
        series: [{
            data: data,
            name: 'Arrests per 100,000',
            states: {
                hover: {
                    color: '#fdbf11'
                }
            }
        }],
        colors: ['#cfe8f3', '#73bfe2', '#1696d2', '#0a4c6a', '#000000']
    });
}