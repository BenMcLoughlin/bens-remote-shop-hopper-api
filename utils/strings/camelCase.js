export const camelCase = (str) => {
    if (!str) return '';
    const cleanString = str.replace(/\W/g, '').replace(/\W/g, '');

    return cleanString
        .replace(/\s(.)/g, function (s) {
            return s.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (s) {
            return s.toLowerCase();
        });
};
