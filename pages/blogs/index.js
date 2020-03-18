import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategorisAndTags } from '../../actions/blog';
import { API } from '../../config';

const Blogs = () => {
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
            <div className='col-md-12'>show all blogs</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blogs;
