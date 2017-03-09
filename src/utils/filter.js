import Vue from 'vue'

Vue.filter('number', function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.filter('DateDMY', function (value) {
  if (value) {
    var monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ]

    var date = new Date(value)
    var day = date.getDate()
    var monthIndex = date.getMonth()
    var year = date.getFullYear()

    return day + ' ' + monthNames[monthIndex] + ' ' + year
  } else {
    return '-'
  }
})
