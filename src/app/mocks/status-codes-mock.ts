export const STATUS_CODES =
    [{
        'id': '74',
        'code': 'ALLOCF',
        'description': 'Database has an allocation failure.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }, {
        'id': 138,
        'code': 'ALLOCF,NOTOPEN',
        'description': 'Database has an allocation failure. Database or area is not open.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }, {
        'id': 142,
        'code': 'ALLOCF,NOTOPEN,STOACC',
        'description': 'Database has an allocation failure. Database or area is not open. Database is stopped for access and is offline.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }, {
        'id': 141,
        'code': 'ALLOCF,NOTOPEN,STOSCHD',
        'description': 'Database has an allocation failure. Database or area is not open. Database scheduling is stopped.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }, {
        'id': 75,
        'code': 'ALLOCS',
        'description': 'Database is allocated successfully.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': false,
        'status': 'VALIDATED'
    }, {
        'id': 131,
        'code': 'ALLOCS,NOTOPEN',
        'description': 'Database is allocated successfully. Database or area is not open.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': false,
        'status': 'VALIDATED'
    }, {
        'id': 135,
        'code': 'ALLOCS,NOTOPEN,STOSCHD',
        'description': 'Database is allocated successfully. Database or area is not open. Database scheduling is stopped.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }, {
        'id': 132,
        'code': 'ALLOCS,OPEN',
        'description': 'Database is allocated successfully. Database or area is open.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': false,
        'status': 'VALIDATED'
    }, {
        'id': 136,
        'code': 'ALLOCS,OPEN,STOSCHD',
        'description': 'Database is allocated successfully. Database or area is open. Database scheduling is stopped.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }, {
        'id': 76,
        'code': 'BACKOUT',
        'description': 'Incomplete backout exists for the database that prevents the use of the database.',
        'objectType': {'id': 1, 'name': 'IMS_DATABASE', 'description': 'Database'},
        'objectTypeName': null,
        'issueGrouping': true,
        'createIncidents': true,
        'status': 'VALIDATED'
    }];
