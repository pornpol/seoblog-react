import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: ''
  });

  const { search, results, searched, message } = values;

  const searchSubmit = e => {
    e.preventDefault();
    listSearch({ search }).then(data => {
      console.log(data);
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blog(s) found`
      });
    });
  };

  const handleChange = e => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: []
    });
  };

  const searchBlogs = (result = []) => {
    return (
      <div className='jumbotron bg-white'>
        {message && <p className='pt-4 text-muted font-italic'>{message}</p>}

        {result.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blogs/${blog.slug}`}>
                <a className='text-primary'>{blog.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className='row'>
        <div className='col-md-8'>
          <input
            type='search'
            className='form-control'
            placeholder='Search blogs'
            onChange={handleChange}
          />
        </div>
        <div className='col-md-4'>
          <button className='btn btn-block btn-outline-primary' type='submit'>
            Search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className='container-fluid'>
      <div className='pt-3 pb-5'>{searchForm()}</div>
      {searchBlogs && (
        <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>
          {searchBlogs(results)}
        </div>
      )}
    </div>
  );
};

export default Search;
