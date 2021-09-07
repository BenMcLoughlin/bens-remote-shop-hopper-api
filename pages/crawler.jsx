import React, { useState } from "react"
import Layout from "../components/Layout"
import Crawler from "../prisma/crawler"

const Draft = () => {
  const crawler = new Crawler()

  return (
    <Layout>
      <div>
        <h1>Fetch Shopify Data</h1>
        <button
          onClick={async () => {
            const { productList } = await crawler.get.shopify.products()
            console.log("productList: ", productList)
          }}
        >
          Fetch Products
        </button>
        <button onClick={() => crawler.get.shopify.shopInfo()}>Fetch Shop Details</button>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          border-radius: 10px;
          height: 2rem;
          width: 10rem;
        }
        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Draft
