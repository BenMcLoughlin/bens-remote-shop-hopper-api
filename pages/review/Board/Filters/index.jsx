import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// import toast from 'utils/toast';
import styled from 'styled-components';
import { color, font, mixin } from 'styles/theme';
import Button from 'components/Button';
import Form from 'components/Form';
import { columnOptions } from 'content/variables';
import useGlobal from "globalState/store";
import { capitalize } from 'utils/strings/capitalize';

const propTypes = {
    search: PropTypes.func,
    defaultFilters: PropTypes.object
};

const BoardFilters = ({ search, defaultFilters }) => {
    const [ globalState, globalActions ] = useGlobal();
    const [ loading, setLoading ] = useState(false);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ column, setColumnName ] = useState('');
    const [ columnData, setColumnData ] = useState([]);
    const [ metric, setMetric ] = useState('');
    const [ filters, setFilters ] = useState(defaultFilters);
    const [ areFiltersCleared, setAreFiltersCleared ] = useState(true);

    const _toggleModal = () => {
        _clear();
        setModalOpen(!modalOpen);
    };

    const _clear = async () => {
        await setColumnData([]);
        await setColumnName('');
        await setMetric('');
        await setFilters(defaultFilters);
        await _applyFilters();
        setAreFiltersCleared(true);
    }; 

    const _fetchColumn = async (columnName) => {
        setLoading(true);
        setColumnName(columnName);
        const success = await globalActions.apiRequests.getColumn(columnName);

        console.log('success.length:', JSON.stringify(success));

        if (success) {
            setColumnData(success.result);
            setAreFiltersCleared(false);
            setLoading(false);

            return true;
        }
    };

    const _applyFilters = async (filterQuery = defaultFilters) => {
        await search(filterQuery);
        setAreFiltersCleared(false);
    };

    const renderList = ({ value }) => (
        <SelectItem>
            <option>{value}</option>
        </SelectItem>
    );

    return (
        <Filters modalOpen={false}>
            <Column>
                <Row>
                    <StyledButton
                        variant="empty"
                        isActive={column}
                        onClick={_toggleModal}
                    >
                        {modalOpen ? 'Column' : 'Create Filters'}
                    </StyledButton>
                    {
                        column &&
                    <FilterText>{capitalize(column)}</FilterText>
                    }
                </Row>
                <Row>
                    {
                        column &&
                        <StyledButton
                            variant="empty"
                            isActive={metric}
                            onClick={() => setMetric('')}
                        >
                            Metric -
                        </StyledButton>
                    }
                    {
                        metric &&
                    <FilterText>{metric}</FilterText>
                    }
                </Row>
            </Column>
            {
                modalOpen &&
                <>
                    {
                        metric ? 
                            <Form
                                enableReinitialize
                                initialValues={{
                                    column: '',
                                    metric: ''
                                }}
                                onSubmit={async (values, form) => {
                                    try {
                                        await setFilters({
                                            column,
                                            metric
                                        });

                                        _applyFilters({
                                            column,
                                            metric
                                        });
                                        // toast.success('Filter has been successfully created.');
                                    } catch (error) {
                                        Form.handleAPIError(error, form);
                                    }
                                }}
                            >
                                <FormElement>
                                    <FormHeading>Apply Filter</FormHeading>
                                    <Actions>
                                        {!areFiltersCleared && (
                                            <ClearAll onClick={_clear}>Clear all</ClearAll>
                                        )}
                                        <StyledButton 
                                            type="submit"
                                            variant="primary"
                                            isWorking={loading}
                                        >
                                            Search with this filter
                                        </StyledButton>
                                        <StyledButton
                                            type="button"
                                            variant="empty"
                                            onClick={_toggleModal}
                                        >
                                            Cancel
                                        </StyledButton>
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

                                        // toast.success('Filter has been successfully created.');
                                    } catch (error) {
                                        Form.handleAPIError(error, form);
                                    }
                                }}
                            >
                                <FormElement>
                                    <FormHeading>Create Filter</FormHeading>
                                    {columnData.length ?
                                        column === 'body_html' ? 
                                            <Form.Field
                                                name="metric"
                                                tip={`Type a word or phrase to search for.`}
                                            />
                                            :
                                            <Form.Field.Select
                                                name="metric"
                                                // label={`Options for: ${ column } `}
                                                tip={`Now set the items in the ${ column } column to search for.`}
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
                                        {!areFiltersCleared && (
                                            <ClearAll onClick={_clear}>Clear all</ClearAll>
                                        )}
                                        <StyledButton
                                            type="submit"
                                            variant="primary"
                                            isWorking={loading}
                                        >
                                            {columnData.length ? 'Create Filter' : 'Next Step'}
                                        </StyledButton>
                                        <StyledButton
                                            type="button"
                                            variant="empty"
                                            onClick={_toggleModal}
                                        >
                                            Cancel
                                        </StyledButton>
                                    </Actions>
                                </FormElement>
                            </Form>
                    }
                </>
            }
        </Filters>
    );
};

export const Filters = styled.div`
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    padding: 35px 0;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin: 10px;
`;

export const FilterText = styled.p`
    font-size: 18px;
    font-weight: bold;
    border: 2px solid orange;
    padding: 2px;
    color: red;
`;

export const StyledButton = styled(Button)`
    border: none;
    font-family: 'Yanone Kaffeesatz', Sans-serif;
    font-size: 22px;
    margin-left: 10px;
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

export const FormElement = styled(Form.Element)`
    padding: 25px 40px 35px;
`;

export const FormHeading = styled.div`
    padding-bottom: 15px;
    ${ font.size(21) }
`;

export const SelectItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    ${ (props) => props.withBottomMargin && `margin-bottom: 5px;` }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
`;

BoardFilters.propTypes = propTypes;

export default BoardFilters;