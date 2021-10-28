export const asDateTimeForAPI = (date) => (date ? moment(date).utc().format() : date);
