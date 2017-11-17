export default [
    {
        id: 1, uuid: '0',
        sensortype: {
            name: "light", displayname: "Beleuchtung", unit: 'lumen', param: 'power', paramvalues: ['on', 'off']
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 1 },
        isplan: true,
        sensorplan: [
            {
                planname: "Beleuchtung täglich", sensortype: "light", schedule: "daily",
                days: [
                    { day: "Mo", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "begin", calc: "+" } },
                    { day: "Di", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "begin", calc: "-" } },
                    { day: "Mi", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "end", calc: "-" } },
                    { day: "Do", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "end", calc: "+" } },
                    { day: "Fr", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "begin", calc: "-" } },
                    { day: "Sa", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "begin", calc: "-" } },
                    { day: "So", fromtime: "00:00", totime: "23:59", setvalue: 0, offset: { minutes: 30, type: "end", calc: "+" } },
                ]
            }],
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    }
]