import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategorisAndTags } from '../../actions/blog';

import Card from '../../components/blog/Card';

import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogsSkip,
  router
}) => {
  const head = () => (
    <Head>
      <title>Programming blogs | {APP_NAME}</title>
      <meta
        name='description'
        content='Programming blogs and tutorials on react node next vue php laravel ans web development'
      />
      <link rel='canonical' href={`${DOMAIN}${router.pathname}`} />
      <meta
        property='og:title'
        content={`Latest web development tutorials | ${APP_NAME}`}
      />
      <meta
        property='og:description'
        content='Programming blogs and tutorials on react node next vue php laravel ans web development'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}${router.pathname}`} />
      <meta property='og:site_name' content={`${APP_NAME}`} />

      <meta
        property='og:image'
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property='og:image:secure_url'
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );

  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategorisAndTags(toSkip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className='btn btn-outline-primary btn-lg'>
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
        <hr />
      </article>
    ));
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className='btn btn-primary mr-1 ml-1 mt-3'>{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className='btn btn-outline-primary mr-1 ml-1 mt-3'>{t.name}</a>
      </Link>
    ));
  };

  const showLoadedblog = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className='container'>
            <header>
              <div className='col-md-12'>
                <h1 className='display-5 font-weight-bold text-center'>
                  BLOGS AND TUTORIALS
                </h1>
              </div>
              <section>
                <div className='pb-5 text-center'>
                  {showAllCategories()}
                  <br />
                  {showAllTags()}
                </div>
              </section>
            </header>
          </div>
          <div className='container'>{showAllBlogs()}</div>
          <div className='container'>{showLoadedblog()}</div>
          <div className='text-center pt-3 pb-3'>{loadMoreButton()}</div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;
  return listBlogsWithCategorisAndTags(skip, limit).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogsSkip: skip
      };
    }
  });
};

export default withRouter(Blogs);
