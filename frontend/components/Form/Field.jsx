import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import { FormText, TextArea, TextEditor, DatePicker } from 'frontend/components/inputs';
import { Select } from 'frontend/components/Select';

import { StyledField, FieldLabel, FieldTip, FieldError } from './Styles';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    tip: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string
};

const defaultProps = {
    className: undefined,
    label: undefined,
    tip: undefined,
    error: undefined,
    name: undefined
};

const generateField = (FormComponent) => {
    const FieldComponent = ({ className, label, tip, error, name, ...otherProps }) => {
        const fieldId = uniqueId('form-field-');

        return (
            <StyledField
                className={className}
                hasLabel={Boolean(label)}
                data-testid={name ? `form-field:${name}` : 'form-field'}>
                {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
                <FormComponent id={fieldId} invalid={Boolean(error)} name={name} {...otherProps} />
                {tip && <FieldTip>{tip}</FieldTip>}
                {error && <FieldError>{error}</FieldError>}
            </StyledField>
        );
    };

    FieldComponent.propTypes = propTypes;
    FieldComponent.defaultProps = defaultProps;

    return FieldComponent;
};

export default {
    FormText: generateField(FormText),
    Select: generateField(Select),
    TextArea: generateField(TextArea),
    TextEditor: generateField(TextEditor),
    DatePicker: generateField(DatePicker)
};
