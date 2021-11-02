import moment from 'moment';

export const asDateTime = (date, format = 'MMMM D, YYYY, h:mm A') => date ? moment(date).format(format) : date;
