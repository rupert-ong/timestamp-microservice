const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/datetime/:dateValue', (req, res, next) => {
  const dateValue = req.params.dateValue;
  const dateFormatOptions = {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    timeZoneName: 'short',
    year: 'numeric'
  };
  let unix, dateFormatted;

  if (isNaN(dateValue)) {
    dateFormatted = new Date(dateValue).toLocaleDateString('en-us', dateFormatOptions);
    unix = new Date(dateValue) / 1000;
  } else {
    unix = dateValue;
    dateFormatted = new Date(dateValue * 1000).toLocaleDateString('en-us', dateFormatOptions);
  }

  res.json({
    unix: unix,
    dateFormatted: dateFormatted
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Timestamp Microservice Server is running')
})

module.exports = app;