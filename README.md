# Timestamp Microservice API
A simple Node and Express Timestamp API endpoint. Enter a unix timestamp or simple String date, such as January 1, 1970, and get a JSON response containing the unix timestamp and formatted string date.

## Usage
To start the application, run the following in terminal:
```javascript
node app.js
```

Then format your URL as follows:
```
http://localhost:3000/dateTime/1 January, 1970
http://localhost:3000/dateTime/January 1, 1970
http://localhost:3000/dateTime/0
```

To receive the following as a JSON response:
```json
{
    "unix": "0",
    "dateFormatted": "January 1, 1970, UTC"
}
```
