Link for documentation: https://docs.google.com/document/d/1l4zoTphyLY-vGquv_BlVcntumkryyt_dA1vJ3NCCt50/edit?usp=sharing


# BaseAPI

Description: Create a speed from the database
Endpoint: http://localhost:3213/api/v1/speed/
Method: post
Params: none
Request Payload: none
Response:

{
    "id": 3,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T22:49:00.995Z",
    "updated_at": "2019-05-11T22:49:00.995Z",
    "deleted_at": null,
    "mph": 42,
    "kph": null,
    "calculated_speed": null
}


Description: Get all speeds from the database
Endpoint: http://localhost:3213/api/v1/speed/get-all-speeds
Method: post
Params: none
Request Payload: none
Response: 


 "message": "works...",
    "resp": {
        "data": [
            {
                "id": 1,
                "user_id": null,
                "active": true,
                "created_by": "lphan",
                "updated_by": "lphan",
                "created_at": "2019-04-30T22:12:56.521Z",
                "updated_at": "2019-04-30T22:16:08.784Z",
                "deleted_at": null,
                "mph": null,
                "kph": null,
                "calculated_speed": null
            },
            {
                "id": 2,
                "user_id": null,
                "active": true,
                "created_by": "lphan",
                "updated_by": null,
                "created_at": "2019-05-11T22:27:18.949Z",
                "updated_at": "2019-05-11T22:27:18.949Z",
                "deleted_at": null,
                "mph": null,
                "kph": 40,
                "calculated_speed": null
            }
        ],
        "statusCode": 200






Description: Get speed by id from the database
Endpoint: http://localhost:3213/api/v1/speed/get-speed-by-id/:id
Method: post
Params: none
Request Payload: 

{
    id - 2 
}
 
Response: 


    "data": {
        "id": 1,
        "user_id": null,
        "active": true,
        "created_by": "lphan",
        "updated_by": "lphan",
        "created_at": "2019-04-30T22:12:56.521Z",
        "updated_at": "2019-04-30T22:16:08.784Z",
        "deleted_at": null,
        "mph": null,
        "kph": null,
        "calculated_speed": null
    },
    "statusCode": 200

    Description: Update speed from the database
Endpoint: http://localhost:3213/api/v1/speed/update-speed/id/:id
Method: put
Params: none
Request Payload: 
{
    "kph": 42
}

Response: 

"message": "works...",
    "resp": {
        "data": {
            "id": 2,
            "user_id": null,
            "active": true,
            "created_by": "lphan",
            "updated_by": "lphan",
            "created_at": "2019-05-11T22:27:18.949Z",
            "updated_at": "2019-05-11T22:43:33.400Z",
            "deleted_at": null,
            "mph": null,
            "kph": 42,
            "calculated_speed": null
        },
        "statusCode": 200


Description:Delete speed from the database
Endpoint: http://localhost:3213/api/v1/speed/delete-speed/id/:id
Method: delete
Params: none
Request Payload: none
Response: 

 "message": "works...",
    "resp": {
        "data": {
            "command": "DELETE",
            "rowCount": 1,
            "oid": null,
            "rows": [],
            "fields": [],
            "_parsers": [],
            "RowCtor": null,
            "rowAsArray": false
        },
        "statusCode": 200


Description: Create a volume from the database
Endpoint: http://localhost:3213/api/v1/vol/
Method: post
Params: none
Request Payload: none
Response:

{
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T22:52:37.452Z",
    "updated_at": "2019-05-11T22:52:37.452Z",
    "deleted_at": null,
    "liter": null,
    "gallon": null,
    "pint": 42,
    "calculated_vol": null
}


Description: Get all volumes from the database
Endpoint: http://localhost:3213/api/v1/vol/get-all-vol
Method: post
Params: none
Request Payload: none
Response: 


 "message": "works...",
    "resp": {
        "data": [
            {
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T22:52:37.452Z",
    "updated_at": "2019-05-11T22:52:37.452Z",
    "deleted_at": null,
    "liter": null,
    "gallon": null,
    "pint": 42,
    "calculated_vol": null
}
        ],
        "statusCode": 200






Description: Get vol by id from the database
Endpoint: http://localhost:3213/api/v1/vol/get-vol-by-id/:id
Method: post
Params: none
Request Payload: 

{
    id - 1
}
 
Response: 

{
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T22:52:37.452Z",
    "updated_at": "2019-05-11T22:52:37.452Z",
    "deleted_at": null,
    "liter": null,
    "gallon": null,
    "pint": 42,
    "calculated_vol": null
},
    "statusCode": 200

    Description: Update vol from the database
Endpoint: http://localhost:3213/api/v1/vol/update-vol/id/:id
Method: put
Params: none
Request Payload: 
{
    "pint": 44
}

Response: 

"message": "works...",
    "resp": {
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T22:52:37.452Z",
    "updated_at": "2019-05-11T22:52:37.452Z",
    "deleted_at": null,
    "liter": null,
    "gallon": null,
    "pint": 44,
    "calculated_vol": null
},
        "statusCode": 200


Description:Delete vol from the database
Endpoint: http://localhost:3213/api/v1/vol/delete-vol/id/:id
Method: delete
Params: none
Request Payload: none
Response: 

 "message": "works...",
    "resp": {
        "data": {
            "command": "DELETE",
            "rowCount": 1,
            "oid": null,
            "rows": [],
            "fields": [],
            "_parsers": [],
            "RowCtor": null,
            "rowAsArray": false
        },
        "statusCode": 200

Description: Create a length from the database
Endpoint: http://localhost:3213/api/v1/length/
Method: post
Params: none
Request Payload: none
Response:

{
    "id": 2,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T23:17:46.527Z",
    "updated_at": "2019-05-11T23:17:46.527Z",
    "deleted_at": null,
    "miles": 42,
    "kilometers": null,
    "meters": null,
    "yards": null,
    "feet": null,
    "inches": null,
    "calculated_length": null
}


Description: Get all length from the database
Endpoint: http://localhost:3213/api/v1/lenght/get-all-lengths
Method: post
Params: none
Request Payload: none
Response: 


 "message": "works...",
    "resp": {
        "data": [
            {
                "id": 1,
                "user_id": null,
                "active": true,
                "created_by": "lphan",
                "updated_by": null,
                "created_at": "2019-05-11T23:17:29.097Z",
                "updated_at": "2019-05-11T23:17:29.097Z",
                "deleted_at": null,
                "miles": null,
                "kilometers": null,
                "meters": null,
                "yards": null,
                "feet": null,
                "inches": null,
                "calculated_length": null
            },
            {
                "id": 2,
                "user_id": null,
                "active": true,
                "created_by": "lphan",
                "updated_by": null,
                "created_at": "2019-05-11T23:17:46.527Z",
                "updated_at": "2019-05-11T23:17:46.527Z",
                "deleted_at": null,
                "miles": 42,
                "kilometers": null,
                "meters": null,
                "yards": null,
                "feet": null,
                "inches": null,
                "calculated_length": null
            }
        ],
        "statusCode": 200






Description: Get length by id from the database
Endpoint: http://localhost:3213/api/v1/length/get-length-by-id/:id
Method: post
Params: none
Request Payload: 

{
    id - 2 
}
 
Response: 


    "data": {
                "id": 2,
                "user_id": null,
                "active": true,
                "created_by": "lphan",
                "updated_by": null,
                "created_at": "2019-05-11T23:17:46.527Z",
                "updated_at": "2019-05-11T23:17:46.527Z",
                "deleted_at": null,
                "miles": 42,
                "kilometers": null,
                "meters": null,
                "yards": null,
                "feet": null,
                "inches": null,
                "calculated_length": null
            },
    "statusCode": 200

    Description: Update length from the database
Endpoint: http://localhost:3213/api/v1/speed/update-length/id/:id
Method: put
Params: none
Request Payload: 
{
   "miles": 44
}

Response: 

"message": "works...",
    "resp": {
        "data": {
                "id": 2,
                "user_id": null,
                "active": true,
                "created_by": "lphan",
                "updated_by": null,
                "created_at": "2019-05-11T23:17:46.527Z",
                "updated_at": "2019-05-11T23:17:46.527Z",
                "deleted_at": null,
                "miles": 44,
                "kilometers": null,
                "meters": null,
                "yards": null,
                "feet": null,
                "inches": null,
                "calculated_length": null
            },
        "statusCode": 200


Description:Delete length from the database
Endpoint: http://localhost:3213/api/v1/length/delete-length/id/:id
Method: delete
Params: none
Request Payload: none
Response: 

 "message": "works...",
    "resp": {
        "data": {
            "command": "DELETE",
            "rowCount": 1,
            "oid": null,
            "rows": [],
            "fields": [],
            "_parsers": [],
            "RowCtor": null,
            "rowAsArray": false
        },
        "statusCode": 200


Description: Create a temp from the database
Endpoint: http://localhost:3213/api/v1/temp/
Method: post
Params: none
Request Payload: none
Response:

{
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T23:22:36.824Z",
    "updated_at": "2019-05-11T23:22:36.824Z",
    "deleted_at": null,
    "celsius": null,
    "fahrenheit": null,
    "kelvin": 42,
    "calculated_temp": null
}


Description: Get all temps from the database
Endpoint: http://localhost:3213/api/v1/temp/get-all-temps
Method: post
Params: none
Request Payload: none
Response: 


 "message": "works...",
    "resp": {
        "data": [
           {
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T23:22:36.824Z",
    "updated_at": "2019-05-11T23:22:36.824Z",
    "deleted_at": null,
    "celsius": null,
    "fahrenheit": null,
    "kelvin": 42,
    "calculated_temp": null
}
        ],
        "statusCode": 200






Description: Get temp by id from the database
Endpoint: http://localhost:3213/api/v1/temp/get-temp-by-id/:id
Method: post
Params: none
Request Payload: 

{
    id - 1
}
 
Response: 

{
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T23:22:36.824Z",
    "updated_at": "2019-05-11T23:22:36.824Z",
    "deleted_at": null,
    "celsius": null,
    "fahrenheit": null,
    "kelvin": 42,
    "calculated_temp": null
},
    "statusCode": 200

    Description: Update temp from the database
Endpoint: http://localhost:3213/api/v1/temp/update-temp/id/:id
Method: put
Params: none
Request Payload: 
{
    "kelvin": 44
}

Response: 

"message": "works...",
    "resp": {
    "id": 1,
    "user_id": null,
    "active": true,
    "created_by": "lphan",
    "updated_by": null,
    "created_at": "2019-05-11T23:22:36.824Z",
    "updated_at": "2019-05-11T23:22:36.824Z",
    "deleted_at": null,
    "celsius": null,
    "fahrenheit": null,
    "kelvin": 44,
    "calculated_temp": null
},
        "statusCode": 200


Description:Delete temp from the database
Endpoint: http://localhost:3213/api/v1/temp/delete-temp/id/:id
Method: delete
Params: none
Request Payload: none
Response: 

 "message": "works...",
    "resp": {
        "data": {
            "command": "DELETE",
            "rowCount": 1,
            "oid": null,
            "rows": [],
            "fields": [],
            "_parsers": [],
            "RowCtor": null,
            "rowAsArray": false
        },
        "statusCode": 200