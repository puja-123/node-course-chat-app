var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var date = moment(someTimestamp);
console.log(date.format('h:mm a'));
