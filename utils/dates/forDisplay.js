export const formatDate = (date) => {
    let month = [];
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'Mar';
    month[3] = 'Apr';
    month[4] = 'May';
    month[5] = 'Jun';
    month[6] = 'Jul';
    month[7] = 'Aug';
    month[8] = 'Sep';
    month[9] = 'Oct';
    month[10] = 'Nov';
    month[11] = 'Dec';
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? `0${ minutes }` : minutes;
    let strTime = `${ hours }:${ minutes }${ ampm }`;
    // e.g. "13 Nov 2016 11:00pm";

    return `${ date.getDate() } ${ month[date.getMonth()] } ${ date.getFullYear() } ${ strTime }`;
};