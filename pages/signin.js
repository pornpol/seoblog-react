import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className='alert alert-danger'>{router.query.message}</div>;
    } else {
      return;
    }
  };
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>{showRedirectMessage()}</div>
        </div>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <h2 className='text-center pb-4'>Sign In</h2>
            <SigninComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Signin);
