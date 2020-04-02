import Layout from '../components/Layout';
import Link from 'next/link';
import { UncontrolledCarousel } from 'reactstrap';
import { DOMAIN } from '../config';

const Index = () => {
  const items = [
    {
      src: `${DOMAIN}/static/images/seoblog.jpg`,
      altText: 'Slide 1',
      caption: 'Full-Stack IoT Developer',
      header: 'PORNPOL WASUWAT',
      key: '1'
    },
    {
      src: `${DOMAIN}/static/images/seoblog.jpg`,
      altText: 'Slide 2',
      caption: 'Runner',
      header: 'PORNPOL WASUWAT',
      key: '2'
    },
    {
      src: `${DOMAIN}/static/images/seoblog.jpg`,
      altText: 'Slide 3',
      caption: 'Traveller',
      header: 'PORNPOL WASUWAT',
      key: '3'
    }
  ];
  return (
    <Layout>
      <article className='overflow-hidden'>
        <div className='container'>
          <UncontrolledCarousel items={items} />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 pt-4 pb-4'>
              <p className='lead font-weight-bold'>ABOUT ME</p>
              <p className='text-justify'>
                Hi, My name is{' '}
                <span className='font-weight-bold font-italic'>
                  "Pornpol Wasuwat"
                </span>
                . You can call me{' '}
                <span className='font-weight-bold font-italic'>"Pol"</span>. I
                am Embedded IoT Engineer, Fullstack Developer, Runner and so on.
                I fall in love with technology. I always try and learn new
                things to make sure that the latest technologies are in my hand.
              </p>
              <p className='text-justify'>
                I'm right here to support people to solve their problems with
                cutting edge technologies. I have 10+ years experience in
                industrial & agriculture sector. I participate in 50+ awesome
                projects. If you have any problems. Let me take care.
              </p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')'
                  }}
                >
                  <h2 className='text-shadow text-center h1'>React</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/react'>
                    <a>
                      <h3 className='h1'>React Js</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    The world's most popular frontend web development library
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')'
                  }}
                >
                  <h2 className='text-shadow text-center h1'>Node</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/node'>
                    <a>
                      <h3 className='h1'>Node Js</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    The worlds most popular backend development tool for
                    JavaScript Ninjas
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')'
                  }}
                >
                  <h2 className='text-shadow text-center h1'>Next</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/nextjs'>
                    <a>
                      <h3 className='h1'>Next Js</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    A Production ready web framework for building SEO React apps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
