import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment';
import Layout from '../../components/Layout';
import SmallCard from '../../components/blog/SmallCard';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import ContactForm from '../../components/form/ContactForm';

const userProfile = ({ user, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {user.username} | {APP_NAME}
      </title>
      <meta name='description' content={`Blogs by ${user.username}`} />
      <link rel='canonical' href={`${DOMAIN}/profile/${query.username}`} />
      <meta property='og:title' content={`${user.username} | ${APP_NAME}`} />
      <meta property='og:description' content={`Blogs by ${user.username}`} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}/profile/${query.username}`} />
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

  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className='mt-4 mb4' key={i}>
          <Link href={`/blogs/${blog.slug}`}>
            <a className='lead'>{blog.title}</a>
          </Link>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h5>{user.name}</h5>
                      <p className='text-muted'>
                        Joined {moment(user.createdAt).fromNow()}
                      </p>
                    </div>
                    <div className='col-md-4'>
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        alt='user profile'
                        className='img img-fluid img-thumbnail mb-3'
                        style={{ maxHeight: '100px', maxWidth: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='container pb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white'>
                    Recent blogs by {user.name}
                  </h5>
                  {showUserBlogs()}
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white'>
                    Message {user.name}
                  </h5>
                  <br />
                  <ContactForm authorEmail={user.email} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

userProfile.getInitialProps = ({ query }) => {
  return userPublicProfile(query.username).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default userProfile;
