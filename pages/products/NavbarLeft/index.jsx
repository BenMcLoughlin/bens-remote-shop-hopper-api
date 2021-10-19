import React from 'react';
import PropTypes from 'prop-types';
import { signOut } from 'next-auth/client';

import styled from 'styled-components';
import Icon from 'components/icon';

// import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';
import { NavLeft, LogoLink, Bottom, Item, ItemText } from './Styles';

const propTypes = {
    issueSearchModalOpen: PropTypes.boolean,
    issueCreateModalOpen: PropTypes.boolean
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => (
    <NavLeft>
        <LogoLink to="/">
            {/* <StyledLogo color="#fff" /> */}
        </LogoLink>

        <Item onClick={issueSearchModalOpen}>
            <Icon type="search" size={22} top={1} left={3} />
            <ItemText>Search issues</ItemText>
        </Item>

        <Item onClick={issueCreateModalOpen}>
            <Icon type="plus" size={27} />
            <ItemText>Create Issue</ItemText>
        </Item>

        <Bottom>
            {/* <AboutTooltip
                placement="right"
                offset={{ top: -218 }}
                renderLink={(linkProps) => (
                    <Item {...linkProps}>
                        <Icon type="help" size={25} />
                        <ItemText>About</ItemText>
                    </Item>
                )}
            /> */}
            <LogOut onClick={() => signOut()}>
                <a>Log out</a>
                <Icon type="settings" size={27} />
            </LogOut>
        </Bottom>
    </NavLeft>
);

ProjectNavbarLeft.propTypes = propTypes;

const LogOut = styled.button`
    max-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ProjectNavbarLeft;