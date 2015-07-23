var calendar = require('./lib/function.js')

var argv = process.argv

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

if (isNaN(parseInt(argv[2]))) {
  calendar(argv[2], argv[3])
} else if (typeof parseInt(argv[2]) === 'number') {
  months.forEach(function (month) {
    calendar(month, argv[2])
  })
}






