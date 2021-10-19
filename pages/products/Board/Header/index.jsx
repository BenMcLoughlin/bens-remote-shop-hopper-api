import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { Header, BoardName } from './Styles';

const ProjectBoardHeader = ({ title }) => (
    <Header>
        <BoardName>{ title }</BoardName>
        <a href="https://clone" target="_blank" rel="noreferrer noopener">
            <Button icon="github">Spare</Button>
        </a>
    </Header>
);

ProjectBoardHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default ProjectBoardHeader;