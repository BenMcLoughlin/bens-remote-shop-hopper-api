import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import { Lists } from './Styles';

const propTypes = {
    project: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
};

const ProjectBoardLists = ({ project, filters, products }) => (
    <Lists>
        {Object.values(products).map((status) => (
            <List
                key={status}
                status={status}
                project={project}
                filters={filters}
            />
        ))}
    </Lists>
);

ProjectBoardLists.propTypes = propTypes;

export default ProjectBoardLists;