/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Autocomplete extends Component {
    constructor(props) {
        state = {
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            isFocused: false,
            userInput: ''
        };
    }

    onChange = (e) => {
        const { options } = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter((optionName) => optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }

            this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption);
                return;
            }

            this.setState({ activeOption: activeOption + 1 });
        }
    };

    setIsFocused = () => {
        this.setState({
            isFocused: true
        });
    }

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            setIsFocused,
            state: { activeOption, filteredOptions, showOptions, userInput, isFocused }
        } = this;
        const { showDropDown, options } = this.props;

        let optionList = [];

        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className = '';
                            if (index === activeOption) {
                                className = 'option-active';
                            }

                            return (
                                <li className={className} key={optionName} onClick={onClick}>
                                    {optionName}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No Option!</em>
                    </div>
                );
            }
        }

        if (showDropDown && isFocused) {
            if (options.length) {
                optionList = (
                    <ul className="options">
                        {options.map((optionName, index) => {
                            let className = '';
                            if (index === activeOption) {
                                className = 'option-active';
                            }

                            return (
                                <li className={className} key={optionName} onClick={onClick}>
                                    {optionName}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No Option!</em>
                    </div>
                );
            }
        }

        return (
            <React.Fragment>
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        onFocus={setIsFocused}
                    />
                    <button
                        className="search-btn"
                        onClick={() => this.props.onClickIcon(this.state.userInput)}
                    ></button>
                </div>
                {optionList}
            </React.Fragment>
        );
    }
}

Autocomplete.propTypes = {
    onClickIcon: PropTypes.func,
    options: PropTypes.array
};

export default Autocomplete;