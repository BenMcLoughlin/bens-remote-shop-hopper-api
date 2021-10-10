import React from "react";

import useGlobal from "../globalState/store";

const businessName = "1000 palms swimwear";
const domain = "1000palmsswimwear.com";

const SearchForm = () => {
    const [ globalState, globalActions ] = useGlobal();
    const searchSubmit = (e) => {
        e.preventDefault();
        // const username = e.target.username.value;
        globalActions.extract.single(businessName, domain);
    };

    return (
        <form onSubmit={searchSubmit}>
            {/* <input name="username" placeholder="username" autoComplete="off"/> */}
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;