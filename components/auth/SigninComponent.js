import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { signin, authenticate, isAuth } from '../../actions/auth';

const SigninComponent = () => {
  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = e => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie
        // save user info to locastorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const handleChange = name => e => {
    e.preventDefault();
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className='alert alert-info'>Loading...</div> : '';
  const showError = () =>
    error ? <div className='alert alert-danger'>{error}</div> : '';
  const showMessage = () =>
    message ? <div className='alert alert-info'>{message}</div> : '';

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='email'
            value={email}
            onChange={handleChange('email')}
            className='form-control'
            placeholder='Type your email'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            value={password}
            onChange={handleChange('password')}
            className='form-control'
            placeholder='Type your password'
          />
        </div>
        <div>
          <button className='btn btn-primary'>Signin</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
      <br />
      <Link href='/auth/password/forgot'>
        <a className='btn btn-outline-danger mb-3'>Forgot password</a>
      </Link>
    </React.Fragment>
  );
};

export default SigninComponent;
