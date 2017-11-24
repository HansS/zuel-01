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
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensortype + scheduletype + plandatetime
                planname: "light weekly 22.11.2017 12:00:00",
                plannamedisplay: 'Beleuchtung wöchentlich 22.11.2017 12:00:00',
                sensortype: "light",
                offset: { minutes: 30, israndom: false, offsettype: -1, settype: '-1' },
                days: [
                    {
                        sensortype: 'light',
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', calcstarttime: '09:00', calcendtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', calcstarttime: '14:00', calcendtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', calcstarttime: '10:00', calcendtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', calcstarttime: '14:00', calcendtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplan: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    } // end day

                ] // end of days
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 1, uuid: '0',
        sensortype: {
            name: "temperature", displayname: "Heizung", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 1,
        isplan: true,
        scheduletype: "weekly",
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensortype + scheduletype + plandatetime
                planname: "temperature weekly 22.11.2017 12:00:00",
                plannamedisplay: 'Heizung wöchentlich 22.11.2017 12:00:00',
                sensortype: "temperature",
                offset: { minutes: 30, israndom: false, offsettype: -1, settype: '-1' },
                days: [
                    {
                        sensortype: 'temperature',
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', calcstarttime: '09:00', calcendtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', calcstarttime: '14:00', calcendtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', calcstarttime: '10:00', calcendtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', calcstarttime: '14:00', calcendtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplan: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    } // end day

                ] // end of days
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    }
]