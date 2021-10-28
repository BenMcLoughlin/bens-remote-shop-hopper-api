export const truncate = (str) => {
    if (str.length < 40) {
        return str;
    }

    return `${ str.substring(0, 37) }...`;
};