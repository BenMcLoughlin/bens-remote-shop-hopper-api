import { sizeOptions } from 'backend/utils/search';

export const optionsMutation = (buckets, options) => {
    let sizes = [];
    let colors = [];
    let cleanSizes = sizeOptions[buckets];

    if (buckets.length > 1) {
        buckets = buckets[0];
    }

    const compareArrays = (a1, a2) => a1.some((val) => a2.includes(val));

    options.map((option) => {
        if (option.name.toLowerCase() === 'size') {

            if (compareArrays(cleanSizes.kids, option.values)) {
                sizes.push('kids');
            }

            if (compareArrays(cleanSizes.smallest, option.values)) {
                sizes.push('XXS');
            }

            if (compareArrays(cleanSizes.tiny, option.values)) {
                sizes.push('XS');
            }

            if (compareArrays(cleanSizes.small, option.values)) {
                sizes.push('S');
            }

            if (compareArrays(cleanSizes.medium, option.values)) {
                sizes.push('M');
            }

            if (compareArrays(cleanSizes.large, option.values)) {
                sizes.push('L');
            }

            if (compareArrays(cleanSizes.extraLarge, option.values)) {
                sizes.push('XL');
            }

            if (compareArrays(cleanSizes.largest, option.values)) {
                sizes.push('XXL');
            }

            if (sizes.length < 1) {
                return sizes.push('All Sizes'); // todo
            }
        }

        // TODO:
        if (option.name.toLowerCase() === 'color') {
            colors = option.values;
        }

        return true;
    });

    return { 
        sizes,
        colors
    };
};