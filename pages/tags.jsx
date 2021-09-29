/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { useSession } from "next-auth/client";
import fetchTags from "../lib/requests/fetchTags";
import incrementItem from "../lib/requests/incrementItem";

const Tags = () => {
    const session = useSession();
    const [ raw_Tags, set_Raw_Tags ] = useState([]);
    const [ loading, setLoading ] = useState(false || "");
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;

    const _getAllTags = async () => {
        setLoading('getAllTags');
        const tags = await fetchTags();
        if (tags) {
            set_Raw_Tags(tags.uniqueTags);
            setLoading(false);
        }
    };

    const _incrementItem = async (tag) => {
        setLoading('incrementItem');
        const result = await incrementItem(tag);
        if (result) {
            setLoading(false);
        }
    };

    const isLoggedIn = session[0]?.user;

    return (
        <Layout>
            <div className="page">
                {
                    isLoggedIn ?
                        <React.Fragment>
                            <main className="main">
                                <div className="notice hov" onClick={() => set_search_products([])}>
                                    <p>When clicking on a Tag, it is added to a list in the DB of &quot;Hot Items&quot;. If you click it again it gets a better score</p>
                                </div>
                                <button className="hov" onClick={() => _getAllTags()}>
                                    {loading === 'getAllTags' ? "Loading..." : <a className="red">Get Tags</a>}
                                </button>
                                {raw_Tags.map((tag) => <button key={tag} onClick={() => _incrementItem(tag)}>
                                    {loading === 'incrementItem' ? "Loading..." : <a className="blue">{tag}</a>}
                                </button>)}
                            </main>
                        </React.Fragment>
                        :
                        <Link href="/api/auth/signin">
                            <div className="notice hov">
                                <a data-active={isActive('/signup')}>Might as well Log in</a>
                            </div>
                        </Link>
                }
            </div>
            <style jsx>{`
        .main {
            display: block;
            position: relative;
            margin-bottom: 20px;
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
            margin: 1rem;
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