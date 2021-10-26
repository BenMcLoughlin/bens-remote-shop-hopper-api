import React, { useState } from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap as _GoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import * as mockLocations from '../../mock/locations.json';
import mapStyles from './mapStyles';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import useGlobal from '../../globalState/store';
import styled from 'styled-components';

export function GoogleMap() {
    const [ globalState, globalActions ] = useGlobal();

    const { address } = globalState.user.location;

    const { setGlobalState } = globalActions;

    const [ error, setError ] = useState(false);
    console.log('error: ', error);
    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const { location } = results[0].geometry;
        const lat = location.lat();
        const lng = location.lng();
        const tooFar = (min, max, distance) => Math.abs(max - min) >= distance;
        const kelownaLat = 49.8879519;
        const kelownaLng = -119.4960106;
        if (tooFar(kelownaLat, lat, 0.6) || tooFar(kelownaLng, lng, 0.3)) { 
            setError(true);
        }

        setGlobalState({ user: { location: { lat, lng, address: value } } });
    };

    return (
        <Wrapper>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDq4w8FiLqX7vHjEfD23z94GZe7SH25Lik&libraries=places"></script>
            <PlacesAutocomplete
                value={address}
                onChange={(value) => setGlobalState({ user: { location: { address: value } } })}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <TextWrapper>
                        <Label>What is your location?</Label>
                        <Input
                            onFocus={() => setError(false)}
                            {...getInputProps({
                                placeholder: 'Search Places ...'
                            })}
                        />
                        <Error error={error}>
                            Unfortunatly our beta version only supports the Okanagan, stay tuned!
                        </Error>
                        <Options>
                            {loading && <div>Loading...</div>}
                            {suggestions.slice(0, 3).map((suggestion) => (
                                <Option
                                    key={suggestion}
                                    active={suggestion.active}
                                    {...getSuggestionItemProps(suggestion, {})}
                                >
                                    <span>{suggestion.description}</span>
                                </Option>
                            ))}
                        </Options>
                    </TextWrapper>
                )}
            </PlacesAutocomplete>
            <MapWrapper>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDq4w8FiLqX7vHjEfD23z94GZe7SH25Lik`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </MapWrapper>
        </Wrapper>
    );
}

function UnwrappedMap() {
    const [ globalState, globalActions ] = useGlobal();

    const { lat, lng } = globalState.user.location;

    return (
        <_GoogleMap
            defaultZoom={10}
            center={{ lat, lng }}
            defaultOptions={{ styles: mapStyles }}
        ></_GoogleMap>
    );
}

let Map = withScriptjs(withGoogleMap(UnwrappedMap));

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const TextWrapper = styled.div`
    position: relative;
    height: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    border: none;
    width: 36rem;
    height: 4.3rem;
    padding: 0.5rem 0 0.5rem 2rem;
    font-size: ${ (props) => props.theme.font.small };
    position: relative;
    background: white;
    border: none;
    color: ${ (props) => props.theme.color.darkGrey };
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid ${ (props) => props.theme.color.contrast };
    z-index: 2;
    &:focus {
        outline: none;
        border: 1px solid ${ (props) => props.theme.color.green };
        color: ${ (props) => props.theme.color.darkGrey };
    }
`;

const Label = styled.label`
    height: 4rem;
    width: 20rem;
    width: auto;
    font-size: ${ (p) => p.theme.font.mediumLarge };
    font-family: 'Poppins', sans-serif;
    color: #12142d;
    height: 8rem;
    align-items: center;
    ${ Input }:focus ~ & {
    } ;
`;

const MapWrapper = styled.div`
    position: relative;
    flex: 1;
    border: 1px solid grey;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`;
const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 36rem;
    cursor: pointer;
    z-index: 1;
    background: white;
`;

const Option = styled.div`
    border: 1px solid #354e57;
    height: 3rem;
    width: 100%;
    padding: 0.5rem;
    padding-left: 0.9rem;
    font-size: ${ (p) => p.theme.font.smallest };
    &:hover {
        background: #354e57;
        color: white;
    }
    transition: all 0.2s ease;
    text-align: center;
    cursor: pointer;
    background: ${ (p) => p.active && '#354e57' };
    color: ${ (p) => p.selected && 'white' };
`;
const Error = styled.div`
    height: 3rem;
    width: 30rem;
    border-radius: 0.7rem;
    margin: 0 auto;
    top: 14rem;
    padding: 1rem;
    text-align: center;
    color: ${ (p) => (p.error ? '#F73D28' : 'transparent') };
    font-weight: bold;
    position: absolute;
    font-size: ${ (p) => p.theme.font.smallest };
    transition: all 0.4s ease;
`;