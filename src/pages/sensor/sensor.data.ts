export default [
    {
        id: 1, uuid: '0',
        sensortypename: 'light',
        sensortype: {
            typename: "light", displayname: "Beleuchtung", unit: 'lumen', param: 'power', paramvalues: [0, 1]
        },
        sensorsetvalue: 1,
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 1 },
        isweekplan: true,
        weekplantype: {typename: 'weekly', typedisplay: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Beleuchtung wöchentlich',
        weekplan:
            {
                weekplantype: {typename: 'weekly', typedisplay: 'wöchentlich'},
                sensortypename: "light",
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Beleuchtung wöchentlich",
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 2, uuid: '0',
        sensortypename: 'temperature-plus',       
        sensortype: {
            typename: "temperature-plus", displayname: "Heizung", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 20,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Heizung wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Heizung wöchentlich",
                sensortypename: "temperature-plus",
                plansetvalue: 21,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 3, uuid: '0',
        sensortypename: 'temperature-minus',       
        sensortype: {
            typename: "temperature-minus", displayname: "Kühlgerät", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 18,
        isplan: true,
        weekplantype: {name: 'weekly', displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Kühlgerät wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Kühlgerät wöchentlich",
                sensortypename: "temperature-minus",
                plansetvalue: 18,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 4, uuid: '0',
        sensortypename: 'humidity-plus',       
        sensortype: {
            typename: "humidity-plus", displayname: "Luftbefeuchter", unit: 'percent', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 1,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Luftbefeuchter wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Luftbefeuchter wöchentlich",
                sensortypename: "humidity-plus",
                plansetvalue: 30,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 5, uuid: '0',
        sensortypename: 'humidity-minus',       
        sensortype: {
            typename: "humidity-minus", displayname: "Lufttrockner", unit: 'percent', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 34,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Lufttrockner wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Lufttrockner wöchentlich",
                sensortypename: "humidity-minus",
                plansetvalue: 34,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        sensortypename: 'humidity-minus',
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 1, uuid: '0',
        sensortypename: 'light',
        sensortype: {
            typename: "light", displayname: "Beleuchtung", unit: 'lumen', param: 'power', paramvalues: [0, 1]
        },
        sensorsetvalue: 1,
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 1 },
        isweekplan: true,
        weekplantype: {typename: 'weekly', typedisplay: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Beleuchtung wöchentlich',
        weekplan:
            {
                weekplantype: {typename: 'weekly', typedisplay: 'wöchentlich'},
                sensortypename: "light",
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Beleuchtung wöchentlich",
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 2, uuid: '0',
        sensortypename: 'temperature-plus',       
        sensortype: {
            typename: "temperature-plus", displayname: "Heizung", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 20,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Heizung wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Heizung wöchentlich",
                sensortypename: "temperature-plus",
                plansetvalue: 21,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 3, uuid: '0',
        sensortypename: 'temperature-minus',       
        sensortype: {
            typename: "temperature-minus", displayname: "Kühlgerät", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 18,
        isplan: true,
        weekplantype: {name: 'weekly', displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Kühlgerät wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Kühlgerät wöchentlich",
                sensortypename: "temperature-minus",
                plansetvalue: 18,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 4, uuid: '0',
        sensortypename: 'humidity-plus',       
        sensortype: {
            typename: "humidity-plus", displayname: "Luftbefeuchter", unit: 'percent', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 1,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Luftbefeuchter wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Luftbefeuchter wöchentlich",
                sensortypename: "humidity-plus",
                plansetvalue: 30,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 5, uuid: '0',
        sensortypename: 'humidity-minus',       
        sensortype: {
            typename: "humidity-minus", displayname: "Lufttrockner", unit: 'percent', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 34,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Lufttrockner wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Lufttrockner wöchentlich",
                sensortypename: "humidity-minus",
                plansetvalue: 34,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        sensortypename: 'humidity-minus',
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 1, uuid: '0',
        sensortypename: 'light',
        sensortype: {
            typename: "light", displayname: "Beleuchtung", unit: 'lumen', param: 'power', paramvalues: [0, 1]
        },
        sensorsetvalue: 1,
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 1 },
        isweekplan: true,
        weekplantype: {typename: 'weekly', typedisplay: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Beleuchtung wöchentlich',
        weekplan:
            {
                weekplantype: {typename: 'weekly', typedisplay: 'wöchentlich'},
                sensortypename: "light",
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Beleuchtung wöchentlich",
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 2, uuid: '0',
        sensortypename: 'temperature-plus',       
        sensortype: {
            typename: "temperature-plus", displayname: "Heizung", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 20,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Heizung wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Heizung wöchentlich",
                sensortypename: "temperature-plus",
                plansetvalue: 21,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 3, uuid: '0',
        sensortypename: 'temperature-minus',       
        sensortype: {
            typename: "temperature-minus", displayname: "Kühlgerät", unit: 'celsius', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 18,
        isplan: true,
        weekplantype: {name: 'weekly', displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Kühlgerät wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Kühlgerät wöchentlich",
                sensortypename: "temperature-minus",
                plansetvalue: 18,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 4, uuid: '0',
        sensortypename: 'humidity-plus',       
        sensortype: {
            typename: "humidity-plus", displayname: "Luftbefeuchter", unit: 'percent', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 1,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Luftbefeuchter wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Luftbefeuchter wöchentlich",
                sensortypename: "humidity-plus",
                plansetvalue: 30,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                            { setstarttime: '14:00', setendtime: '18:15', starttime: '14:00', endtime: '18:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    },
    {
        id: 5, uuid: '0',
        sensortypename: 'humidity-minus',       
        sensortype: {
            typename: "humidity-minus", displayname: "Lufttrockner", unit: 'percent', param: 'degree', paramvalues: [0, 1]
        },
        ison: false,
        sensorvalue: { datetime: '08.11.2017 11:00:00', value: 15 },
        sensorsetvalue: 34,
        isplan: true,
        weekplantype: {name: "weekly", displayname: 'wöchentlich'},
        // sensor.sensortype.displayname + sensor.scheduletypedisplay
        weekplanname: 'Lufttrockner wöchentlich',
        weekplan:
            {
                plandatetime: '22.11.2017 12:00:00',
                // sensor.sensortype.displayname + sensor.scheduletypedisplay
                planname: "Lufttrockner wöchentlich",
                sensortypename: "humidity-minus",
                plansetvalue: 34,
                offset: { minutes: 30, israndom: false, offsettype: -1, settimetype: '-1' },
                sensordays: [
                    {
                        sensortypename: 'humidity-minus',
                        day: 'Mo',
                        dayplans: [
                            { setstarttime: '09:00', setendtime: '11:15', starttime: '09:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Di',
                        dayplans: [
                            { setstarttime: '10:00', setendtime: '11:15', starttime: '10:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Mi',
                        dayplans: [
                            { setstarttime: '11:00', setendtime: '11:15', starttime: '11:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Do',
                        dayplans: [
                            { setstarttime: '12:00', setendtime: '11:15', starttime: '12:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Fr',
                        dayplans: [
                            { setstarttime: '13:00', setendtime: '11:15', starttime: '13:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'Sa',
                        dayplans: [
                            { setstarttime: '14:00', setendtime: '11:15', starttime: '14:00', endtime: '11:15' },
                        ]
                    }, // end day
                    {
                        day: 'So',
                        dayplans: [
                            { setstarttime: '15:00', setendtime: '11:15', starttime: '15:00', endtime: '11:15' },
                        ]
                    } // end day

                ] // end of sensordays
            }, // enweek
        islog: false,
        sensorvalues: [
            { datetime: '08.11.2017 11:00:00', value: 0 },
            { datetime: '09.11.2017 11:00:00', value: 1 }
        ]
    }
]