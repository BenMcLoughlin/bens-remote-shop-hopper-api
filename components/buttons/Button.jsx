import React from 'react';
import PropTypes from 'prop-types';

import { startCase } from '../../utils/strings';


const Button = ({ text, onClick, disabled, loading, backgroundColor }) => (
    <button
        disabled={disabled || loading}
        onClick={onClick}>
        {loading ? 'Loading...' : startCase(text)}
        <style jsx>
            {`
                button {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    height: 3rem;
                    min-width: 16rem;
                    gap: 1rem;
                    padding: .5rem;
                    border-radius: 5px;
                    position: relative;
                    transition: all 0.7s ease;
                    background: ${ backgroundColor };
                    color: #ffffff;
                    border: 1px solid #25E9AF;
                }
                button:hover {
                    box-shadow: 1px 1px 3px #aaa;
                    box-shadow: 11px 11px 22px #dedede, -11px -11px 22px #ffffff;
                }
            `}
        </style>
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.function,
    disabled: PropTypes.boolean,
    loading: PropTypes.boolean,
    backgroundColor: PropTypes.string
};

export default Button;