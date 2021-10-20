/* eslint-disable */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';

import { StyledInput, InputElement, StyledIcon } from './Styles';

const propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    icon: PropTypes.string,
    invalid: PropTypes.bool,
    filter: PropTypes.instanceOf(RegExp),
    onChange: PropTypes.func
};

const defaultProps = {
    className: undefined,
    value: undefined,
    icon: undefined,
    invalid: false,
    filter: undefined,
    onChange: () => {}
};

const Input = forwardRef(({ icon, className, filter, onChange, ...inputProps }, ref) => {
    const handleChange = (event) => {
        if (!filter || filter.test(event.target.value)) {
            onChange(event.target.value, event);
        }
    };

    return (
        <StyledInput className={className}>
            {/* {icon && <StyledIcon type={icon} size={15} />} todo */}
            <MagnifyingGlass size={20} style={{ position: 'absolute', margin: 5 }}/>
            <InputElement {...inputProps} onChange={handleChange} hasIcon={Boolean(icon)} ref={ref} />
        </StyledInput>
    );
});

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;