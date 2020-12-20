let arrWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


function getFormattedDate(dateObject) {
    let res = '';

    res +=      new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getDate()) + '.'
            +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format((dateObject.getMonth() + 1)) + '.'
            +   dateObject.getFullYear() + ' '
            +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getHours()) + ':'
            +   new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(dateObject.getMinutes()) + ' '
            +   arrWeek[dateObject.getDay()];
    return res;
}