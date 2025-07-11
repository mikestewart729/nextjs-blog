import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Why hello there, if you're reading this, you've found my blog! I'm Mike, a PhD physicist and now tech guy, and I'm hoping to improve my writing skills and also share the things that interest me with all of you on this blog. My hobbies include learning languages (spoken and coding), video games, fantasy novels, baking, swimming, and more!</p>
        <p>僕のブログにようこそ！</p>
        <p>
          For more of me, check out my <Link href="https://github.com/mikestewart729">GitHub</Link> and my <Link href="https://www.linkedin.com/in/michael-stewart-973786189/">LinkedIn</Link>.
        </p>
        <p>
          My résumé can be found <Link href="/posts/resume">here</Link>.
        </p>
        <p>
          My PhD thesis can be found <Link href="/posts/thesis">here</Link>.
        </p>
        <p>
          (I learned to build this website by following the {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
