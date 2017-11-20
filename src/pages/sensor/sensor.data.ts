export default [
    {
        id: 1, uuid: '0',
        sensortype: {
            name: "light", displayname: "Beleuchtung", unit: 'lumen', param: 'power', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 1 },
        sensorsetvalue: 1,
        isplan: true,
        scheduletype: "weekly",
        sensorplan: 
            {
                planname: "Beleuchtung wöchentlich", sensortype: "light", 
                offset: {minutes: 30, israndom: false, offsettype: -1,settype: '-1'},
                days: [
                    {day: 'Mo',
                    dayplan: [
                        {setstarttime: '09:00', setendtime: '11:15', calcstarttime:'09:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                }, // end day
                    {day: 'Di',
                    dayplan: [
                        {setstarttime: '10:00', setendtime: '11:15', calcstarttime:'10:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                }, // end day
                    {day: 'Mi',
                    dayplan: [
                        {setstarttime: '11:00', setendtime: '11:15', calcstarttime:'11:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                }, // end day
                    {day: 'Do',
                    dayplan: [
                        {setstarttime: '12:00', setendtime: '11:15', calcstarttime:'12:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                }, // end day
                    {day: 'Fr',
                    dayplan: [
                        {setstarttime: '13:00', setendtime: '11:15', calcstarttime:'13:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                }, // end day
                    {day: 'Sa',
                    dayplan: [
                        {setstarttime: '14:00', setendtime: '11:15', calcstarttime:'14:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                }, // end day
                    {day: 'So',
                    dayplan: [
                        {setstarttime: '15:00', setendtime: '11:15', calcstarttime:'15:00', calcendtime:'11:15'},
                        {setstarttime: '14:00', setendtime: '18:15', calcstarttime:'14:00', calcendtime:'18:15'},
                    ]
                } // end day

                ] // end of days
            } , // end of sensorplan
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    }
]