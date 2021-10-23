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
import useGlobal from "globalState/store";

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
    filters: PropTypes.object.isRequired
};

const BoardFilters = ({ setFilters, filters, defaultFilters }) => {
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ columnName, setColumnName ] = useState('');
    const [ columnData, setColumnData ] = useState([]);
    const [ metric, setMetric ] = useState('');
    const [ areFiltersCleared, setAreFiltersCleared ] = useState(true);

    const _toggleModal = () => {
        _clear();
        setModalOpen(!modalOpen);
    };

    const _clear = () => {
        setColumnData('');
        setColumnName('');
        setMetric('');
        setAreFiltersCleared(true);
    }; 

    const renderList = ({ value }) => (
        <SelectItem>
            <option>{value}</option>
        </SelectItem>
    );

    const _fetchColumn = async (column) => {
        setLoading(true);
        setColumnName(column);
        const success = await globalActions.apiRequests.getColumn(column);

        console.log('success.length:', JSON.stringify(success));

        if (success) {
            setColumnData(success.result);
            setAreFiltersCleared(false);
            setLoading(false);

            return true;
        }
    };

    console.log('metric:', metric);

    return (
        <Filters>
            <Column>
                <StyledButton
                    variant="empty"
                    isActive={columnName}
                    onClick={_toggleModal}
                >
                    Column:
                </StyledButton>
                {
                    columnName &&
                    <FilterText>{columnName}</FilterText>
                }
            </Column>
            <Column>
                {
                    columnName &&
                        <StyledButton
                            variant="empty"
                            isActive={metric}
                            onClick={() => setMetric('')}
                        >
                            Metric:
                        </StyledButton>
                }
                {
                    metric &&
                    <FilterText>{metric}</FilterText>
                }
            </Column>
            {!areFiltersCleared && (
                <ClearAll onClick={_clear}>Clear all</ClearAll>
            )}
            {
                modalOpen &&
                    metric ? 
                    <Form
                        enableReinitialize
                        initialValues={{
                            column: '',
                            metric: ''
                        }}
                        onSubmit={async (values, form) => {
                            console.log('values, form:', values, form);

                            try {
                                await setFilters({ 
                                    columnName,
                                    metric
                                });


                                toast.success('Filter has been successfully created.');
                            } catch (error) {
                                Form.handleAPIError(error, form);
                            }
                        }}
                    >
                        <FormElement>
                            <FormHeading>Create Filter</FormHeading>
                            <Actions>
                                <ActionButton type="submit" variant="primary" isWorking={loading}>
                                    Search with this filter
                                </ActionButton>
                                <ActionButton type="button" variant="empty" onClick={() => _toggleModal(false)}>
                                    Cancel
                                </ActionButton>
                            </Actions>
                        </FormElement>
                    </Form>
                    :
                    <Form
                        enableReinitialize
                        initialValues={{
                            column: '',
                            metric: ''
                        }}
                        onSubmit={async (values, form) => {
                            try {
                                if (values.column) {
                                    await _fetchColumn(values.column);
                                }

                                if (values.metric) {
                                    await setMetric(values.metric);
                                }

                                toast.success('Filter has been successfully created.');
                            } catch (error) {
                                Form.handleAPIError(error, form);
                            }
                        }}
                    >
                        <FormElement>
                            <FormHeading>Create Filter</FormHeading>
                            {columnData.length ?
                                <Form.Field.Select
                                    name="metric"
                                    // label={`Options for: ${ columnName } `}
                                    tip={`Now set the items in the ${ columnName } column to search for.`}
                                    options={columnData}
                                    renderOption={renderList}
                                    renderValue={renderList}
                                />
                                :
                                <Form.Field.Select
                                    name="column"
                                    // label="Database Column"
                                    tip="First set the column we will search on."
                                    options={columnOptions}
                                    renderOption={renderList}
                                    renderValue={renderList}
                                />
                            }
                            <Actions>
                                <ActionButton type="submit" variant="primary" isWorking={loading}>
                                    {columnData.length ? 'Create Filter' : 'Next Step'}
                                </ActionButton>
                                <ActionButton type="button" variant="empty" onClick={() => _toggleModal(false)}>
                                    Cancel
                                </ActionButton>
                            </Actions>
                        </FormElement>
                    </Form>
            }
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
  flex-direction: column;
  @media (max-width: 700px) {
      flex-direction: column;
  }
`;

export const FilterText = styled.p`
    font-size: 18px;
    font-weight: bold;
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