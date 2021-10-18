/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Autocomplete = (props) => {
    const [ activeOption, setActiveOption  ] = useState(0);
    const [ filteredOptions, setFilteredOptions  ] = useState([]);
    const [ showOptions, setShowOptions  ] = useState(false);
    const [ isFocused, setIsFocused  ] = useState(false);
    const [ userInput, setUserInput] = useState('');
    // state = {
    //     activeOption: 0,
    //     filteredOptions: [],
    //     showOptions: false,
    //     isFocused: false,
    //     userInput: ''
    // };
    let optionList = [];
    const { showDropDown, options } = props;

    const onChange = (e) => {
        const { options } = props;
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter((optionName) => optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

        setActiveOption(0);
        setFilteredOptions(filteredOptions);
        setShowOptions(true);
        setUserInput(e.currentTarget.value);

        // this.setState({
        //     activeOption: 0,
        //     filteredOptions,
        //     showOptions: true,
        //     userInput: e.currentTarget.value
        // });
    };

    const onClick = (e) => {
        setActiveOption(0);
        setFilteredOptions([]);
        setShowOptions(false);
        setUserInput(e.currentTarget.innerText);

        // this.setState({
        //     activeOption: 0,
        //     filteredOptions: [],
        //     showOptions: false,
        //     userInput: e.currentTarget.innerText
        // });
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setActiveOption(0);
            setShowOptions(false);
            setUserInput(filteredOptions[activeOption]);
            // this.setState({
            //     activeOption: 0,
            //     showOptions: false,
            //     userInput: filteredOptions[activeOption]
            // });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }

            setActiveOption(activeOption - 1);
            // this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption);
                return;
            }

            setActiveOption(activeOption + 1);
            // this.setState({ activeOption: activeOption + 1 });
        }
    };

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
                        onClick={() => props.onClickIcon(userInput)}
                    ></button>
                </div>
                {optionList}
            </React.Fragment>
        );
}

Autocomplete.propTypes = {
    onClickIcon: PropTypes.func,
    options: PropTypes.array
};

export default Autocomplete;