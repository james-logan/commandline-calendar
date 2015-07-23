module.exports = function (month, year) {


  firstDayOfWeek = function (month, year) {
    var q = 1;
    var year = (month === 'january' || month === 'february')? year -1: year;
    var m = ['march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'january', 'february'].indexOf(month.toLowerCase()) + 3;
    var k = year % 100;
    var j = Math.floor(year/100)
    return (q + Math.floor((13*(m+1))/5) + k + Math.floor(k/4) + Math.floor(j/4) + (5*j)) % 7;
  }


  function calBuilder (month, year) {
    var len = {march: 31, april: 30, may: 31, june: 30, july: 31, august: 31, september: 30, october: 31, november: 30, december: 31, january: 31, february: 28}
    console.log(month)
    console.log("Sa Su Mo Tu We Th Fr")
    var week = ""
    var count = 0;
    for (i=1; i<= firstDayOfWeek(month, year); i++) {
      week += "   "
      count +=1;
    }
    var j = 1;
    var date;
    while (j <= len[month]) {
      date = (j<10)? ' ' + j: j;
      week += date + ' '
      count += 1;
      if (count >0 && count%7 === 0) {
        week += '\n'
      }

      j += 1;
    }
    console.log(week)
  }

  calBuilder(month, year);
}
