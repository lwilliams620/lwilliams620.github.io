var lineChart1;
var barChart1;
var radarChart;
var mapChart;
var data;
var data2;
var selected_county;
var county_codes;
var hispanic_arrests;
var hispanic_pop;
var hispanic_pop_arrests;
var white_arrests;
var white_pop;
var white_pop_arrests;
var other_arrests;
var other_pop;
var other_pop_arrests;
var black_arrests;
var black_pop;
var black_pop_arrests;
var black_data;
var total_pop;
var total_pop_arrests;

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

    data = [
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

    hispanic_arrests = [28.7,  5.4, 12.1, 14.1, 11.8, 47.0, 26.2,  4.7, 11.8, 58.7, 30.2,
        7.5, 78.1, 18.5, 45.8, 60.7, 15.2,  9.4, 54.0, 63.2, 28.6, 14.8,
       18.9, 57.4, 13.4, 30.5, 64.5, 36.0,  8.4, 42.1, 13.6,  5.1, 48.9,
       19.3, 71.1, 49.5, 33.3,  2.9, 37.9, 23.8, 38.1, 46.0, 50.4, 36.2,
        6.6,  6.7,  6.8, 22.4, 28.6, 38.5, 25.7, 19.8,  4.9, 61.5, 10.7,
       54.3, 33.8, 19.4];

    white_arrests = [25.6, 51.4, 76.9, 75.1, 79.4, 41.6, 35.0, 78.2, 80.7, 23.3, 61.3,
        75.7, 14.7, 49.3, 35.7, 23.7, 71.6, 76.6, 19.5, 27.1, 52.1, 75.8,
        66.7, 29.1, 70.7, 57.3, 25.3, 46.4, 87.0, 43.4, 72.3, 84.5, 33.9,
        41.8, 25.4, 27.6, 44.9, 46.0, 34.4, 66.7, 31.2, 44.4, 25.7, 55.5,
        80.3, 65.6, 75.3, 36.2, 59.2, 47.5, 58.6, 73.7, 90.5, 28.1, 84.3,
        37.7, 46.0, 63.9];

    other_arrests = [11.0, 36.5,  7.6,  4.8,  6.2,  7.3,  7.3, 15.7,  4.4,  5.7,  6.3,
        10.8,  2.8, 31.1,  5.2,  4.7,  8.1, 10.0,  4.9,  3.1,  6.4,  7.6,
        11.1,  3.8, 15.7, 10.7,  3.5,  4.9,  2.4,  8.4,  5.4,  7.3,  3.5,
        8.3,  1.7,  3.8,  5.6, 14.8,  7.5,  4.4, 15.5,  3.9, 11.9,  3.6,
        8.7, 25.6, 13.8,  7.5,  4.7,  4.6,  8.0,  4.3,  4.0,  5.3,  3.1,
        2.7,  6.3,  7.8];

    black_arrests = [34.7,  6.8,  3.5,  6.0,  2.6,  4.1, 31.6,  1.4,  3.1, 12.3,  2.3,
        6.0,  4.4,  1.2, 13.4, 10.9,  5.1,  4.1, 21.5,  6.5, 12.9,  1.9,
        3.3,  9.6,  0.2,  1.5,  6.6, 12.7,  2.3,  6.2,  8.7,  3.1, 13.7,
       30.6,  1.8, 19.0, 16.2, 36.3, 20.3,  5.1, 15.3,  5.7, 12.0,  4.7,
        4.4,  2.2,  4.1, 33.9,  7.5,  9.5,  7.7,  2.3,  0.6,  5.0,  1.9,
        5.3, 13.9,  8.9];

    hispanic_pop = [ 391815,      85,    5311,   35848,    5114,   13215,  294840,
        5046,   25914,  537390,   11825,   15153,  156971,    3958,
      476000,   82410,   12854,    5373, 5114541,   92094,   44751,
        1846,   22179,  163069,    1436,    4025,  262600,   49638,
        9687, 1147397,   53693,    1757, 1162158,  356886,   35453,
     1125926, 1149123,  136733,  312861,   63673,  203789,  209855,
      540956,   96384,   16890,     284,    5271,  115395,  134378,
      251935,   30919,   15913,    1093,  304967,    6084,  368909,
       70582,   20783];

    hispanic_pop_arrests = [ 10737,      4,    129,   1416,    130,    446,   6425,     78,
        524,  18494,    400,    532,   4143,    143,  15993,   4496,
        546,     76, 133598,   3535,   1683,    103,    826,   5824,
         58,    100,   7795,   1481,    234,  34703,   1221,     39,
      21394,   6921,   1160,  32530,  28272,    454,   7651,   2353,
       6526,   7398,  18249,   3779,    554,      6,    145,   2762,
       4620,   7596,   1142,    499,     23,  13795,    315,  18160,
       2087,    617];

    white_pop = [ 562667,     830,   29802,  166738,   36745,    8570,  529600,
        17460,  148159,  309297,   15684,  102675,   24470,   11911,
       331156,   52306,   46474,   20577, 2724168,   55965,  186587,
        14667,   58765,   83887,    7395,    9222,  135947,   75014,
        84205, 1350200,  294018,   16311,  924582,  722619,   22889,
       687051, 1557657,  390250,  258382,  194567,  319125,  204179,
       665572,  157484,  144336,    2727,   34062,  174311,  323894,
       245339,   47518,   44665,   11011,  145138,   42762,  395900,
       107362,   44427];

    white_pop_arrests = [ 9560,    38,   820,  7551,   872,   395,  8591,  1292,  3576,
        7332,   813,  5380,   779,   382, 12462,  1753,  2578,   621,
       48232,  1518,  3064,   529,  2910,  2950,   307,   188,  3062,
        1905,  2421, 35825,  6491,   647, 14816, 15006,   414, 18149,
       38054,  7190,  6941,  6599,  5338,  7156,  9312,  5784,  6711,
          59,  1611,  4468,  9567,  9363,  2598,  1862,   428,  6308,
        2474, 12605,  2839,  2026];

    other_pop = [];

    other_pop_arrests = [ 4111,    27,    81,   482,    68,    69,  1786,   259,   197,
        1784,    83,   765,   146,   241,  1822,   347,   291,    81,
       12197,   176,   374,    53,   484,   388,    68,    35,   425,
         203,    66,  6897,   486,    56,  1544,  2973,    28,  2494,
        4760,  2305,  1511,   438,  2652,   633,  4324,   376,   728,
          23,   296,   920,   757,   898,   353,   108,    19,  1194,
          91,   893,   389,   249];

    black_pop = [192977,      1,   1024,   3666,    371,    166, 103842,    886,
        1380,  49562,    201,   1611,   4683,    117,  49300,   9762,
        1178,   2478, 832355,   5012,   7027,    138,    612,   9673,
          75,     43,  11226,   2539,    409,  49330,   5138,    190,
      146811, 154814,    464, 185107, 161578,  46647,  56396,   5274,
       19839,   7921,  46867,   2514,   1682,      6,    553,  62402,
        7745,  14680,   1858,    375,     52,   5892,    990,  13618,
        5457,   2328];

    black_pop_arrests = [12962,     5,    37,   606,    28,    39,  7763,    23,   136,
        3883,    30,   427,   235,     9,  4665,   805,   184,    33,
       53179,   363,   760,    13,   144,   976,     1,     5,   799,
         520,    63,  5075,   780,    24,  6002, 10998,    30, 12486,
       13704,  5668,  4097,   501,  2613,   913,  4349,   488,   367,
           2,    87,  4186,  1214,  1869,   343,    57,     3,  1118,
          55,  1757,   859,   281];

    total_pop = [ 1669301,     1162,    38294,   226466,    45117,    22117,
        1155879,    27401,   191848,  1018241,    29132,   135333,
         190266,    18593,   916464,   153710,    65071,    30150,
       10253716,   159536,   262879,    18068,    89009,   282928,
           9602,    13616,   445414,   140779,    98904,  3222498,
         396691,    19779,  2440124,  1546174,    62296,  2192203,
        3351786,   883869,   770385,   280393,   774485,   454593,
        1954286,   274871,   178773,     3213,    44584,   441307,
         500675,   558972,    97490,    64387,    13688,   479112,
          54590,   856598,   222581,    77916];

    total_pop_arrests = [ 37370,     74,   1067,  10055,   1098,    949,  24565,   1652,
        4433,  31493,   1326,   7104,   5303,    775,  34942,   7401,
        3599,    811, 247206,   5592,   5881,    698,   4364,  10138,
         434,    328,  12081,   4109,   2784,  82500,   8978,    766,
       43756,  35898,   1632,  65659,  84790,  15617,  20200,   9891,
       17129,  16100,  36234,  10427,   8360,     90,   2139,  12336,
       16158,  19726,   4436,   2526,    473,  22415,   2935,  33415,
        6174,   3173];

    data2 = [
        {county: 'us-ca-001', Hispanic: ['23.5'], White: ['33.7'], Black: ['11.6'], Other: []},
        {county: 'us-ca-003', Hispanic: ['7.3'], White: ['71.4'], Black: ['0.1'], Other: []},
        {county: 'us-ca-005', Hispanic: ['13.9'], White: ['77.8'], Black: ['2.7'], Other: []},
        {county: 'us-ca-007', Hispanic: ['15.8'], White: ['73.6'], Black: ['1.6'], Other: []},
        {county: 'us-ca-009', Hispanic: ['11.3'], White: ['81.4'], Black: ['0.8'], Other: []},
        {county: 'us-ca-011', Hispanic: ['59.8'], White: ['38.7'], Black: ['0.8'], Other: []},
        {county: 'us-ca-013', Hispanic: ['25.5'], White: ['45.8'], Black: ['9.0'], Other: []},
        {county: 'us-ca-015', Hispanic: ['18.4'], White: ['63.7'], Black: ['3.2'], Other: []},
        {county: 'us-ca-017', Hispanic: ['13.5'], White: ['77.2'], Black: ['0.7'], Other: []},
        {county: 'us-ca-019', Hispanic: ['52.8'], White: ['30.4'], Black: ['4.9'], Other: []},
        {county: 'us-ca-021', Hispanic: ['40.6'], White: ['53.8'], Black: ['0.7'], Other: []},
        {county: 'us-ca-023', Hispanic: ['11.2'], White: ['75.9'], Black: ['1.2'], Other: []},
        {county: 'us-ca-025', Hispanic: ['82.5'], White: ['12.9'], Black: ['2.5'], Other: []},
        {county: 'us-ca-027', Hispanic: ['21.3'], White: ['64.1'], Black: ['0.6'], Other: []},
        {county: 'us-ca-029', Hispanic: ['51.9'], White: ['36.1'], Black: ['5.4'], Other: []},
        {county: 'us-ca-031', Hispanic: ['53.6'], White: ['34.0'], Black: ['6.4'], Other: []},
        {county: 'us-ca-033', Hispanic: ['19.8'], White: ['71.4'], Black: ['1.8'], Other: []},
        {county: 'us-ca-035', Hispanic: ['17.8'], White: ['68.2'], Black: ['8.2'], Other: []},
        {county: 'us-ca-037', Hispanic: ['49.9'], White: ['26.6'], Black: ['8.1'], Other: []},
        {county: 'us-ca-039', Hispanic: ['57.7'], White: ['35.1'], Black: ['3.1'], Other: []},
        {county: 'us-ca-041', Hispanic: ['17.0'], White: ['71.0'], Black: ['2.7'], Other: []},
        {county: 'us-ca-043', Hispanic: ['10.2'], White: ['81.2'], Black: ['0.8'], Other: []},
        {county: 'us-ca-045', Hispanic: ['24.9'], White: ['66.0'], Black: ['0.7'], Other: []},
        {county: 'us-ca-047', Hispanic: ['57.6'], White: ['29.6'], Black: ['3.4'], Other: []},
        {county: 'us-ca-049', Hispanic: ['15.0'], White: ['77.0'], Black: ['0.8'], Other: []},
        {county: 'us-ca-051', Hispanic: ['29.6'], White: ['67.7'], Black: ['0.3'], Other: []},
        {county: 'us-ca-053', Hispanic: ['59.0'], White: ['30.5'], Black: ['2.5'], Other: []},
        {county: 'us-ca-055', Hispanic: ['35.3'], White: ['53.3'], Black: ['1.8'], Other: []},
        {county: 'us-ca-057', Hispanic: ['9.8'], White: ['85.1'], Black: ['0.4'], Other: []},
        {county: 'us-ca-059', Hispanic: ['35.6'], White: ['41.9'], Black: ['1.5'], Other: []},
        {county: 'us-ca-061', Hispanic: ['13.5'], White: ['74.1'], Black: ['1.3'], Other: []},
        {county: 'us-ca-063', Hispanic: ['8.9'], White: ['82.5'], Black: ['1.0'], Other: []},
        {county: 'us-ca-065', Hispanic: ['47.6'], White: ['37.9'], Black: ['6.0'], Other: []},
        {county: 'us-ca-067', Hispanic: ['23.1'], White: ['46.7'], Black: ['10.0'], Other: []},
        {county: 'us-ca-069', Hispanic: ['56.9'], White: ['36.7'], Black: ['0.7'], Other: []},
        {county: 'us-ca-071', Hispanic: ['51.4'], White: ['31.3'], Black: ['8.4'], Other: []},
        {county: 'us-ca-073', Hispanic: ['34.3'], White: ['46.5'], Black: ['4.8'], Other: []},
        {county: 'us-ca-075', Hispanic: ['15.5'], White: ['44.2'], Black: ['5.3'], Other: []},
        {county: 'us-ca-077', Hispanic: ['40.6'], White: ['33.5'], Black: ['7.3'], Other: []},
        {county: 'us-ca-079', Hispanic: ['22.7'], White: ['69.4'], Black: ['1.9'], Other: []},
        {county: 'us-ca-081', Hispanic: ['26.3'], White: ['41.2'], Black: ['2.6'], Other: []},
        {county: 'us-ca-083', Hispanic: ['46.2'], White: ['44.9'], Black: ['1.7'], Other: []},
        {county: 'us-ca-085', Hispanic: ['27.7'], White: ['34.1'], Black: ['2.4'], Other: []},
        {county: 'us-ca-087', Hispanic: ['35.1'], White: ['57.3'], Black: ['0.9'], Other: []},
        {county: 'us-ca-089', Hispanic: ['9.4'], White: ['80.7'], Black: ['0.9'], Other: []},
        {county: 'us-ca-091', Hispanic: ['8.8'], White: ['84.9'], Black: ['0.2'], Other: []},
        {county: 'us-ca-093', Hispanic: ['11.8'], White: ['76.4'], Black: ['1.2'], Other: []},
        {county: 'us-ca-095', Hispanic: ['26.1'], White: ['39.5'], Black: ['14.1'], Other: []},
        {county: 'us-ca-097', Hispanic: ['26.8'], White: ['64.7'], Black: ['1.5'], Other: []},
        {county: 'us-ca-099', Hispanic: ['45.1'], White: ['43.9'], Black: ['2.6'], Other: []},
        {county: 'us-ca-101', Hispanic: ['31.7'], White: ['48.7'], Black: ['1.9'], Other: []},
        {county: 'us-ca-103', Hispanic: ['24.7'], White: ['69.4'], Black: ['0.6'], Other: []},
        {county: 'us-ca-105', Hispanic: ['8.0'], White: ['80.4'], Black: ['0.4'], Other: []},
        {county: 'us-ca-107', Hispanic: ['63.7'], White: ['30.3'], Black: ['1.2'], Other: []},
        {county: 'us-ca-109', Hispanic: ['11.1'], White: ['78.3'], Black: ['1.8'], Other: []},
        {county: 'us-ca-111', Hispanic: ['43.1'], White: ['46.2'], Black: ['1.6'], Other: []},
        {county: 'us-ca-113', Hispanic: ['31.7'], White: ['48.2'], Black: ['2.5'], Other: []},
        {county: 'us-ca-115', Hispanic: ['26.7'], White: ['57.0'], Black: ['3.0'], Other: []},
        {county: 'All', Hispanic: ['15785.0', '39.4', '444.9', '42.4'], White: ['15379.3', '36.5', '372.5', '35.4'], Black: ['2298.8', '6.5', '168.6', '16.0'], Other: ['41016.7', '17.6', '65.5', '6.2']}
    ];

    for(i=0; i<data2.length-1; i++) {
        data2[i].Hispanic.unshift((hispanic_pop[i] / 100).toFixed(1));
        data2[i].Hispanic.push((hispanic_pop_arrests[i] / 100).toFixed(1));
        data2[i].Hispanic.push(hispanic_arrests[i]);

        data2[i].White.unshift((white_pop[i] / 100).toFixed(1));
        data2[i].White.push((white_pop_arrests[i] / 100).toFixed(1));
        data2[i].White.push(white_arrests[i]);

        data2[i].Black.unshift((black_pop[i] / 100).toFixed(1));
        data2[i].Black.push((black_pop_arrests[i] / 100).toFixed(1));
        data2[i].Black.push(black_arrests[i]);

        data2[i].Other.push(((total_pop[i] - hispanic_pop[i] - white_pop[i] - black_pop[i]) / 100).toFixed(1));
        data2[i].Other.push((100 - (Number(data2[i].Hispanic[1]) + Number(data2[i].White[1]) + Number(data2[i].Black[1]))).toFixed(1));
        data2[i].Other.push((other_pop_arrests[i] / 100).toFixed(1));
        data2[i].Other.push(other_arrests[i]);
    }

    black_data = [6717, 500000,   3613,  16530,   7547,  23494,   7476,
        2596,   9855,   7835,  14925,  26505,   5018,   7692,
        9462,   8246,  15620,   1332,   6389,   7243,  10815,
        9420,  23529,  10090,   1333,  11628,   7117,  20481,
       15403,  10288,  15181,  12632,   4088,   7104,   6466,
        6745,   8481,  12151,   7265,   9499,  13171,  11526,
        9279,  19411,  21819,  33333,  15732,   6708,  15675,
       12732,  18461,  15200,   5769,  18975,   5556,  12902,
       15741,  12070];

    for(i=0; i<black_data.length; i++) {
        data[i][1] = black_data[i];
    }

    // Create the chart
    mapChart = Highcharts.mapChart('map', {
        chart: {
            map: 'countries/us/us-ca-all'
        },
        title: {
            text: 'Arrests of Black Californians per 100,000',
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
            /**
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
             */
            dataClasses: [{
                from: 0,
                to: 7149
            }, {
                from: 7149,
                to: 10189
            }, {
                from: 10189,
                to: 15566
            }, {
                from: 15566,
                to: 500000
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
            allowPointSelect: true,
            states: {
                hover: {
                    color: '#fdbf11'
                },
                select: {
                    color: '#fdbf11',
                    borderColor: '#000000'
                }
            }
        }],
        //colors: ['#cfe8f3', '#73bfe2', '#1696d2', '#0a4c6a', '#000000'],
        colors: ['#cfe8f3', '#1696d2', '#0a4c6a', '#000000'],
        accessibility: {
            description: 'This is a map of California, showing arrests of Black Californians per 100,000 for each county.'
        },
        plotOptions: {
            series: {
                events: {
                    click: function(e) {
                        let table = document.querySelector("table");
                        while (table.firstChild) {
                            table.removeChild(table.firstChild);
                        }
                        if(selected_county == e.point['hc-key']) {
                            generateTable(table, 'All');
                            generateTableHead(table, 'All');
                        } else {
                            generateTable(table, e.point['hc-key']);
                            generateTableHead(table, e.point.name);
                        }
                    }
                }
            }
        },
        tooltip: {
            style: {
                fontFamily: 'Arial',
                fontSize: '12px',
                color: '#000000'
            }
        },
    });

    var table_headers = ['Ethnicity', 'Total Population (In Hundreds)', '% of Population', 'Arrests (In Hundreds)','% of Arrests']
    var ethnicities = ['Hispanic', 'White', 'Other', 'Black']

    function generateTableHead(table, name) {
        let capt = table.createCaption();
        if(name == 'All') {
            capt.innerHTML = 'All Counties'
        } else {
            capt.innerHTML = name + ' County';
        }
        let thead = table.createTHead();
        let row = thead.insertRow();
        for(i=0; i<table_headers.length; i++) {
            let th = document.createElement('th');
            let text = document.createTextNode(table_headers[i]);
            th.appendChild(text);
            if(i == 0) {
                th.setAttribute('style', 'text-align: left;');
            } else {
                th.setAttribute('style', 'text-align: right;');
            }
            row.appendChild(th);
        }
    }

    function generateTable(table, county) {
        selected_county = county;
        for(i=0; i<data2.length; i++) {
            if(data2[i].county == county) {
                for(j=0; j<ethnicities.length; j++) {
                    let row = table.insertRow();

                    let cell = row.insertCell();
                    let x = ethnicities[j];
                    let text = document.createTextNode(x);
                    cell.appendChild(text);
                    cell.setAttribute('style', 'text-align: left;')

                    cell = row.insertCell();
                    text = document.createTextNode(data2[i][x][0]);
                    cell.appendChild(text);
                    cell.setAttribute('style', 'text-align: right;')

                    cell = row.insertCell();
                    text = document.createTextNode(data2[i][x][1]);
                    cell.appendChild(text);
                    cell.setAttribute('style', 'text-align: right;')

                    cell = row.insertCell();
                    text = document.createTextNode(data2[i][x][2]);
                    cell.appendChild(text);
                    cell.setAttribute('style', 'text-align: right;')

                    cell = row.insertCell();
                    text = document.createTextNode(data2[i][x][3]);
                    cell.appendChild(text);
                    cell.setAttribute('style', 'text-align: right;')
                }
            }
        }
    }
    let table = document.querySelector("table");
    generateTable(table, 'All');
    generateTableHead(table, 'All');
}