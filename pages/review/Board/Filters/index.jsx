import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import toast from 'utils/toast';
import styled from 'styled-components';
import { color, font, mixin } from 'styles/theme';
import InputDebounced from 'components/InputDebounced';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Form from 'components/Form';
import { bucketOptions, columnOptions } from 'content/variables';

import {
    FormHeading,
    FormElement,
    SelectItem,
    SelectItemLabel,
    Divider,
    Actions,
    ActionButton
} from './Styles';

const propTypes = {
    setFilters: PropTypes.func.isRequired,
    defaultFilters: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    mergeFilters: PropTypes.func.isRequired
};

const BoardFilters = ({ setFilters, filters, defaultFilters }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ columnName, setColumnName ] = useState('');

    const renderList = ({ value }) => (
        <SelectItem>
            <option>{value}</option>
        </SelectItem>
    );

    console.log('searchTerm:', searchTerm);

    return (
        <Filters>
            <Column>
                <SearchInput
                    icon="search"
                    value={searchTerm}
                    onChange={(value) => setSearchTerm(value)}
                />
                <button onClick={() => setModalOpen(true)}>Show modal</button>
            </Column>

            {
                modalOpen &&
                <Form
                    enableReinitialize
                    initialValues={{
                        column: '',
                        secondary: '',
                        tertiary: ''
                    }}
                    // validations={{
                    //     column: Form.is.required(),
                    //     title: [ Form.is.required(), Form.is.maxLength(200) ],
                    //     metric: Form.is.required()
                    // }}
                    onSubmit={async (values, form) => {
                        console.log('values, form:', values, form);
                        try {
                            await setColumnName(values);

                            toast.success('Filter has been successfully created.');
                        } catch (error) {
                            Form.handleAPIError(error, form);
                        }
                    }}
                >
                    <FormElement>
                        <FormHeading>Create Filter</FormHeading>
                        <Form.Field.Select
                            name="column"
                            label="Database Column"
                            tip="Start typing to get a list of possible matches."
                            options={columnOptions}
                            renderOption={renderList}
                            renderValue={renderList}
                        />
                        <Divider />
                        {/* <Form.Field.Select
                            name={secondaryOptions[column].title}
                            label={secondaryOptions.title}
                            options={secondaryOptions}
                            renderOption={renderList}
                            renderValue={renderList}
                        /> */}
                        <Form.Field.Input
                            name="Metric"
                            label="Short Summary"
                            tip="Concisely summarize the Filter in one or two sentences."
                        />
                        <Actions>
                            <ActionButton type="submit" variant="primary" isWorking={false}>
                                Create Filter
                            </ActionButton>
                            <ActionButton type="button" variant="empty" onClick={setFilters}>
                                Cancel
                            </ActionButton>
                        </Actions>
                    </FormElement>
                </Form>
            }

            {/* Spare Buttons for later todo */}
            {/* <Column>
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
            </Column> */}
        </Filters>
    );
};

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

BoardFilters.propTypes = propTypes;

export default BoardFilters;