export const asDate = (date, format = 'MMMM D, YYYY') =>
    date ? moment(date).format(format) : date;
