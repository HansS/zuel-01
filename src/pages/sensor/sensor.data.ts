export default  [
    {id: 1, sensortype: "light", sensorparam: 'power', uuid: '0', 
    displayname: "Beleuchtung",offset: 0, israndom: false,
    ison: false,
    currentvalue: {datetime:'08.11.2017 11:00:00', sensorvalue: 1},
    ishistory: false,
    history: [
            {datetime:'08.11.2017 11:00:00', sensorvalue: 15},
            {datetime:'08.11.2017 11:00:00', sensorvalue: 15}
] , 
    isweekplan: false, 
    sensorweek:[
        { sensortype: "light", day: "Mo",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "Mo",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "light", day: "Di",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "Di",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "light", day: "Mi",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "Mi",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "light", day: "Do",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "Do",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "light", day: "Fr",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "Fr",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "light", day: "Sa",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "Sa",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "light", day: "So",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "light", day: "So",fromtime: "00:00", totime: "23:59", setvalue: 1}
    ]},
    {id: 2,  sensortype: "humidity", sensorparam: 'percent', uuid: '0', 
    displayname: "Luftbefeuchter", offset: 0, israndom: false,
    ison: false,
    currentvalue: {datetime:'08.11.2017 11:00:00', sensorvalue: 45},
    ishistory: false,
    history: [{datetime:'08.11.2017 11:10:00', sensorvalue: 25}],
    isweekplan: false, 
    sensorweek: [
        { sensortype: "humidity", day: "Mo",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "Mo",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "humidity", day: "Di",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "Di",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "humidity", day: "Mi",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "Mi",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "humidity", day: "Do",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "Do",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "humidity", day: "Fr",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "Fr",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "humidity", day: "Sa",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "Sa",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "humidity", day: "So",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "humidity", day: "So",fromtime: "00:00", totime: "23:59", setvalue: 1}
    ]},
    {id: 1, sensortype: "temperature", sensorparam: 'degree', uuid: '0', 
    displayname: "Heizung",  offset: 0, israndom: false,
    ison: false,
    currentvalue: {datetime:'08.11.2017 11:00:00', sensorvalue: 25},
    ishistory: false,
    history: [{datetime:'08.11.2017 11:20:00', sensorvalue: 35}],
    isweekplan: false,
    sensorweek: [
        { sensortype: "temperature", day: "Mo",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "Mo",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "temperature", day: "Di",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "Di",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "temperature", day: "Mi",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "Mi",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "temperature", day: "Do",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "Do",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "temperature", day: "Fr",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "Fr",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "temperature", day: "Sa",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "Sa",fromtime: "00:00", totime: "23:59", setvalue: 1},
        { sensortype: "temperature", day: "So",fromtime: "00:00", totime: "23:59", setvalue: 0},
        { sensortype: "temperature", day: "So",fromtime: "00:00", totime: "23:59", setvalue: 1}  
    ]}
]