import React from 'react';
import { startCase } from '../../utils/strings';


const Button = ({ text, onClick, disabled, loading }) => {
    return (
        <button
            disabled={disabled || loading}
            onClick={() => onClick()}>
            {loading ? 'Loading...' : startCase(text)}
            <style jsx>{`
                button {
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-content: center;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    height: 5rem;
                    width: 25rem;
                    gap: 1rem;
                    padding: .5rem;
                    padding-left: 2rem;
                    border-radius: 5px;
                    position: relative;
                    cursor: pointer;
                    transition: all 0.7s ease;
                    justify-content: left;
                    background: #f7f7f7;
                    box-shadow: 11px 11px 22px #dedede, -11px -11px 22px #ffffff;
                    border: none;
                }
                button:hover {
                    box-shadow: 1px 1px 3px #aaa;
                }
            `}</style>
        </button>
    );
};

export default Button;
