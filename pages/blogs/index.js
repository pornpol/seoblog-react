import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategorisAndTags } from '../../actions/blog';

import Card from '../../components/blog/Card';

const Blogs = ({ blogs, categories, tags, size }) => {
  const showAllBlogs = () => {
    return blogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
        <hr />
      </article>
    ));
  };

  return (
    <Layout>
      <main>
        <div className='container-fluid'>
          <header>
            <div className='col-md-12 pt-3'>
              <h1 className='display-4 font-weight-bold text-center'>
                Programing blogs and tutorial
              </h1>
            </div>
            <section>
              <p>show categories and tag</p>
            </section>
          </header>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>{showAllBlogs()}</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

Blogs.getInitialProps = () => {
  return listBlogsWithCategorisAndTags().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size
      };
    }
  });
};

export default Blogs;
