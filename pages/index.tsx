import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })

  const users = dateStripped(allUsers);
  // console.dir(users, { depth: null })

  return { props: { feed, users } };
};

const dateStripped = obj => {
  let newObj = {}
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    if (value !== null) {
      // If array, loop...
      if (Array.isArray(value)) {
        value = value.map(item => dateStripped(item))
      }
      // ...if property is date/time, stringify/parse...
      else if (typeof value === 'object' && typeof value.getMonth === 'function') {
        value = JSON.parse(JSON.stringify(value))
      }
      // ...and if a deep object, loop.
      else if (typeof value === 'object') {
        value = dateStripped(value)
      }
    }
    newObj[key] = value
  })
  return newObj
}

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  console.log('props:', props)
  return (
    <Layout>
      <div className="page">
        <h1>Welcome to ShopHopper</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
