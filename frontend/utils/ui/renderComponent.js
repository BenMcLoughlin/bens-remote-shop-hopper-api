import React from 'react';
import * as components from 'frontend/components';
import { startCase } from 'frontend/utils/strings';

export const renderComponent = (query, props) => {
    if (!query) {
        return null;
    }

    // if (!components.hasOwnProperty(startCase(query))) { return `${query} isn't in the app`; }

    const Component = components[startCase(query)];
    return <Component {...props} />;
};
