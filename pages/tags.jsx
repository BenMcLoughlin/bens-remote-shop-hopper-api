/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import Autocomplete from "../components/Autocomplete";
import fetchTags from "../requests/fetchTags";
import incrementItem from "../requests/incrementItem";
import searchTags from "../requests/searchTags";


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

    const _incrementItem = async (tag) => {
        setLoading(tag);
        const result = await incrementItem(tag);
        if (result) {
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
        <Layout>
            <div className="page">
                {
                    raw_Tags.length ?
                        <div className="notice">
                            <div>
                                <p>See we can search by existing tags</p>
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
                <main className="main">
                    <div className="notice hov" onClick={() => set_search_products([])}>
                        <p>When clicking on a Tag, it is added to a list in the DB of &quot;Hot Items&quot;. If you click it again it gets a better score</p>
                    </div>
                    {
                        raw_Tags.length === 0 ?
                            <div className="notice hov" >
                                <button onClick={() => _getAllTags()}>
                                    {loading === 'getAllTags' ? "Loading..." : <a className="red">Get Tags</a>}
                                </button>
                            </div>
                            :
                            raw_Tags.map((tag) => <button className="blue" key={tag} onClick={() => _incrementItem(tag)}>
                                {loading === tag ? "Loading..." : <a>{tag}</a>}
                            </button>)
                    }
                </main>
            </div>
            <style jsx>{`
        .main {
            display: block;
            position: relative;
            margin: 2rem;
            width: 100%;
        }

        .send {
            background: lightGrey;
            border-radius: 50px;
            border: none;
            padding: 10px;
            transition: box-shadow 0.1s ease-in;
            margin: 1rem;
        }

        .cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }

        .card {
            margin: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background: white;
            transition: box-shadow 0.1s ease-in;
            width: 275px;
            height: 300px;
            padding: 1rem;
        }

        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .notice {
          background: white;
          transition: box-shadow 0.1s ease-in;
          padding: 20px;
            margin: 1rem;
        }

        .notice + .notice {
          margin-top: 1rem;
        }

        .image {
            width: 200px;
            height: auto;
            object-fit: contain;
        }

        .blue {
            color: blue;
            margin: 2px;
            width: 200px;
        }

        .red {
          color: red;
        }

        .hov:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .star {
            position: absolute;
            transform: scale(3,3) translate(-5px, -10px);
        }

        .star:hover {
            transform: scale(5, 5);
            transition: all 1s;
        }
      `}</style>
        </Layout>
    );
};

export default Tags;