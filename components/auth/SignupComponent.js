import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { signup, isAuth, preSignup } from '../../actions/auth';

const SignupComponent = () => {
  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const [values, setValues] = useState({
    name: '',
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
    const user = { name, email, password };

    preSignup(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false,
          message: data.message,
          showForm: false
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

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            value={name}
            onChange={handleChange('name')}
            className='form-control'
            placeholder='Type your name'
          />
        </div>
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
          <button className='btn btn-primary'>Signup</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
      <br />
      <Link href='/auth/password/forgot'>
        <a className='btn btn-outline-danger mb-3'>Forgot password</a>
      </Link>
    </React.Fragment>
  );
};

export default SignupComponent;
