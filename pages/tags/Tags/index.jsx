import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Autocomplete from "components/Autocomplete";
import fetchTags from "requests/fetchTags";
import searchTags from "requests/searchTags";

const Tags = () => {
    const [ raw_Tags, set_Raw_Tags ] = useState([]);
    const [ search_products, set_search_products ] = useState([]);
    const [ query, setQuery ] = useState('');
    const [ loading, setLoading ] = useState(false || "");

    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const _getAllTags = async () => {
        setLoading('getAllTags');
        const tags = await fetchTags();
        if (tags) {
            console.log('tags:', tags);
            set_Raw_Tags(tags.uniqueTags);
            setLoading(false);
        }
    };

    const _search = async (value) => {
        setQuery(value);
        setLoading('search');
        const result = await searchTags(query);
        if (result) {
            console.log('result:', result);
            set_search_products(result);
            refreshData();
            setLoading(false);
        }
    };

    return (
        <div>
            <Main className="main">
                {
                    raw_Tags.length ?
                        <div className="notice">
                            <div>
                                <p>Search by existing tags</p>
                            </div>

                            <Autocomplete
                                onClickIcon={_search}
                                options={raw_Tags}
                            />

                            <div className="cards">
                                {
                                    search_products.map((product) => <div className="card hov" key={product.id}>
                                        <img className="image" src={product.images[0]?.src} />
                                        <p>{product.title}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                        :
                        null
                }
                {
                    raw_Tags.length === 0 ?
                        <button onClick={() => _getAllTags()}>
                            {loading === 'getAllTags' ? "Loading..." : <a className="red">Get Tags</a>}
                        </button>
                        :
                        raw_Tags.map((tag) => <button className="blue" key={tag}>
                            <a>{tag}</a>
                        </button>)
                }
            </Main>
        </div>
    );
};

export const Main = styled.div`
    display: block;
    height: 100vh;
    overflow-y: auto;
`;

export default Tags;