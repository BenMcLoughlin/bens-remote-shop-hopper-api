import { useState, useEffect } from 'react';

/** useOnScreen
 * checks if the component is on screen and returns a boolean true or false if it is.
 */
export const useOnScreen = (options) => {
    const [visible, setVisible] = useState(false);
    const [ref, setRef] = useState(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, visible];
};
