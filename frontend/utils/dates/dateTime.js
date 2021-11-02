import moment from 'moment';

export const asDate = (date, format = 'MMMM D, YYYY') => date ? moment(date).format(format) : date;

export const asDateTime = (date, format = 'MMMM D, YYYY, h:mm A') => date ? moment(date).format(format) : date;

export const asDateTimeForAPI = (date) => (date ? moment(date).utc().format() : date);

export const asDateTimeConversational = (date) => (date ? moment(date).fromNow() : date);
