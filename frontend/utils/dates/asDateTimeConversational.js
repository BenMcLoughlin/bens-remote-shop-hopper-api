import moment from 'moment';

export const asDateTimeConversational = (date) => (date ? moment(date).fromNow() : date);
