//utility function to format date using MOMENT package, to any possible format

const Moment = require("moment");

function getFormattedDate(date, format = "DD-MM-YYYY") {
  return Moment(date)?.format(format);
}

const asd = getFormattedDate(Date.now(), "DDD, MMMM, YY");
console.log(asd);
