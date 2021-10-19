import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import { Lists } from './Styles';

const propTypes = {
    filters: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
};

const ProjectBoardLists = ({ filters, products }) => (
    <Lists>
        {Object.values(products).map((product) => (
            <List
                key={product.id}
                status={product.status}
                project={product}
                filters={filters}
            />
        ))}
    </Lists>
);

ProjectBoardLists.propTypes = propTypes;

export default ProjectBoardLists;