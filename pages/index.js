import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { fetchEntries } from '@contentfulPosts'
import Post from '@components/Post'

// inside your component markup, pull `posts` from props

<div className="posts">
  {posts.map((p) => {
    return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
  })}
</div>

// at the bottom of your component file

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <h1>Mijn Titel</h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
