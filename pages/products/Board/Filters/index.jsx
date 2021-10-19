import React from 'react';
import PropTypes from 'prop-types';
import { xor } from 'lodash';

import styled from 'styled-components';
import { color, font, mixin } from 'styles/theme';
import InputDebounced from 'components/InputDebounced';
import Avatar from 'components/Avatar';
import Button from 'components/Button';

const propTypes = {
    products: PropTypes.array.isRequired,
    users: PropTypes.array,
    defaultFilters: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    mergeFilters: PropTypes.func.isRequired
};

const ProjectBoardFilters = ({ products, users, defaultFilters, filters, mergeFilters }) => {
    const { searchTerm, userIds, myOnly, recent } = filters;

    const areFiltersCleared = !searchTerm && userIds.length === 0 && !myOnly && !recent;

    return (
        <Filters>
            <Column>
                <SearchInput
                    icon="search"
                    value={searchTerm}
                    onChange={(value) => mergeFilters({ searchTerm: value })}
                />
                <Avatars>
                    {users.map((user) => (
                        <AvatarIsActiveBorder key={user.id} isActive={userIds.includes(user.id)}>
                            <StyledAvatar
                                avatarUrl={user.avatarUrl}
                                name={user.name}
                                onClick={() => mergeFilters({ userIds: xor(userIds, [ user.id ]) })}
                            />
                        </AvatarIsActiveBorder>
                    ))}
                </Avatars>
            </Column>

            <Column>
                <StyledButton
                    variant="empty"
                    isActive={myOnly}
                    onClick={() => mergeFilters({ myOnly: !myOnly })}
                >
                  Only My Items todo
                </StyledButton>
                <StyledButton
                    variant="empty"
                    isActive={recent}
                    onClick={() => mergeFilters({ recent: !recent })}
                >
                  Recently Updated
                </StyledButton>
                {!areFiltersCleared && (
                    <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear all</ClearAll>
                )}
            </Column>
        </Filters>
    );
};

ProjectBoardFilters.propTypes = propTypes;

export default ProjectBoardFilters;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 700px) {
      flex-direction: column;
  }
`;

export const SearchInput = styled(InputDebounced)`
  margin-right: 18px;
  width: 160px;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 6px;
`;

export const AvatarIsActiveBorder = styled.div`
  display: inline-flex;
  margin-left: -2px;
  border-radius: 50%;
  transition: transform 0.1s;
  ${ mixin.clickable };
  ${ (props) => props.isActive && `box-shadow: 0 0 0 4px ${ color.primary }` }
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;

export const StyledButton = styled(Button)`
  margin: 6px;
`;

export const ClearAll = styled.div`
  height: 32px;
  line-height: 32px;
  margin-left: 15px;
  padding-left: 12px;
  border-left: 1px solid ${ color.borderLightest };
  color: ${ color.textDark };
  ${ font.size(14.5) }
  ${ mixin.clickable }
  &:hover {
    color: ${ color.textMedium };
  }
`;