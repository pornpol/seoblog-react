import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';

const Signup = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <h2 className='text-center pb-4'>Sign Up</h2>
            <SignupComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
