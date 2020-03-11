import { useState } from 'react';
import { signup } from '../../actions/auth';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '9pol',
    email: '9pol@9pol.com',
    password: '123456',
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

    signup(user).then(data => {
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
    </React.Fragment>
  );
};

export default SignupComponent;
