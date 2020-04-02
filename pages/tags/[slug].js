import Head from 'next/head';
import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Layout from '../../components/Layout';
import Card from '../../components/blog/Card';

import { getTag } from '../../actions/tag';

import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Tag = ({ tag, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta
        name='description'
        content={`Best programming tutorials on ${tag.name}`}
      />
      <link rel='canonical' href={`${DOMAIN}/tags/${query.slug}`} />
      <meta property='og:title' content={`${tag.name} | ${APP_NAME}`} />
      <meta
        property='og:description'
        content={`Best programming tutorials on ${tag.name}`}
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}/tags/${query.slug}`} />
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
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className='container'>
            <header>
              <div className='col-md-12'>
                <h1 className='display-5 font-weight-bold text-center'>
                  {tag.name}
                </h1>
                {blogs.map((t, i) => (
                  <div key={i}>
                    <Card key={i} blog={t} />
                    <hr />
                  </div>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Tag.getInitialProps = ({ query }) => {
  return getTag(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, blogs: data.blogs, query };
    }
  });
};

export default Tag;
