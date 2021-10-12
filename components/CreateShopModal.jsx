import React, { useReducer, useCallback } from 'react';
import produce from "immer";
import { set, has } from "lodash";

function enhancedReducer(state, updateArg) {
    // check if the type of update argument is a callback function
    if (updateArg.constructor === Function) {
        return { ...state, ...updateArg(state) };
    }

    // if the type of update argument is an object
    if (updateArg.constructor === Object) {
        // does the update object have _path and _value as it's keys
        // if yes then use them to update deep object values
        if (has(updateArg, "_path") && has(updateArg, "_value")) {
            const { _path, _value } = updateArg;

            return produce(state, (draft) => {
                set(draft, _path, _value);
            });
        }
 
        return { ...state, ...updateArg };
        
    }
}

//  {
//     "business_name": "Healing Hollow",
//     "domain": "healinghollow.com",
//     "vertical": "Health And Fitness",
//     "site_host": "Shopify",
//     "City": "Cranbrook",
//     "State": "BC",
//     "Zip": "V1C",
//     "Country": "CA"
// }

const initialState = {
    businessName: "",
    domain: "",
    vertical: "",
    siteHost: "Shopify",
    city: "",
    province: "",
    postalCode: "",
    country: "Canada"
};

const CreateShopModal = ({ addShop, close }) => {
    const [ state, updateState ] = useReducer(enhancedReducer, initialState);

    const updateForm = useCallback(({ target: { value, name, type } }) => {
        console.log('{ value, name, type } :', { value, name, type });
        const updatePath = name.split(".");

        // if the input is a checkbox then use callback function to update
        // the toggle state based on previous state
        if (type === 'checkbox') {
            updateState((prevState) => ({
                [name]: !prevState[name]
            }));

            return;
        }

        // if we have to update the root level nodes in the form
        if (updatePath.length === 1) {
            const [ key ] = updatePath;

            updateState({
                [key]: value
            });
        }

        // if we have to update nested nodes in the form object
        // use _path and _value to update them.
        if (updatePath.length === 2) {
            updateState({
                _path: updatePath,
                _value: value
            });
        }
    }, []);

    const _addShop = async (e) => {
        e.preventDefault();
        addShop(state);
    };

    return (
        <div className="createShopModal">
            <form onSubmit={_addShop}>
                <h2>Add a new store</h2>
                <div className="row">
                    <input
                        autoFocus
                        placeholder="add name..."
                        type="text"
                        onChange={updateForm}
                        name="businessName"
                        value={state.businessName}
                    />
                    <input
                        placeholder="add vertical..."
                        type="text"
                        onChange={updateForm}
                        name="vertical"
                        value={state.vertical}
                    />
                </div>
                <div className="row">
                    <input
                        placeholder="add domain..."
                        type="text"
                        onChange={updateForm}
                        name="domain"
                        value={state.domain}
                    />
                    <input
                        placeholder="add siteHost..."
                        type="text"
                        onChange={updateForm}
                        name="siteHost"
                        value={state.siteHost}
                    />
                </div>
                <div className="row form">
                    <input
                        placeholder="add city..."
                        type="text"
                        onChange={updateForm}
                        name="city"
                        value={state.city}
                    />
                    <input
                        placeholder="add province..."
                        type="text"
                        onChange={updateForm}
                        name="province"
                        value={state.province}
                    />
                    <input
                        placeholder="add postal code..."
                        type="text"
                        onChange={updateForm}
                        name="postalCode"
                        value={state.postalCode}
                    />
                    <input
                        placeholder="add country..."
                        type="text"
                        onChange={updateForm}
                        name="country"
                        value={state.country}
                    />
                </div>
                <input className="button" disabled={!state.domain} type="submit" value="Add" />
                <a className="button back" href="#" onClick={close}>
                    Cancel
                </a>
            </form>
            <style jsx>{`
                .createShopModal {
                    background: rgb(255, 0, 0);
                    background: linear-gradient(
                        14deg,
                        rgba(252, 252, 252, 1) 0%,
                        rgba(252, 252, 252, 0.3211659663865546) 38%,
                        rgba(242, 239, 239, 0.6797093837535014) 100%
                    );
                    padding: 2rem;
                    display: flex;
                }
                .row {
                    display: flex;
                    flex-direction: row;
                }
                .form {
                    margin-bottom: 1rem;
                }
                input[type='text'] {
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border-radius: 0.25rem;
                    border: 0.125rem solid rgba(0, 0, 0, 0.2);
                }
                input[type='submit'] {
                    background: #ececec;
                    border: 0;
                    padding: 1rem 2rem;
                }
                .back {
                    margin-left: 1rem;
                }
            `}</style>
        </div>
    );
};

export default CreateShopModal;