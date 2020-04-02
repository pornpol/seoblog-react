import Layout from '../components/Layout';
import Link from 'next/link';
import {
  UncontrolledCarousel,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';
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
  const items2 = [
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 4',
      caption: 'Slide 4',
      header: 'Slide 4 Header',
      key: '4'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 5',
      caption: 'Slide 5',
      header: 'Slide 5 Header',
      key: '5'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 6',
      caption: 'Slide 6',
      header: 'Slide 6 Header',
      key: '6'
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
            <div className='col-md-12 pt-3'>
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
          <p className='lead font-weight-bold'>WORK EXPERIENCE</p>
          <p>
            <span className='font-weight-bold font-italic'>
              Fullstack IoT Developer
            </span>{' '}
            - Freelance (Sep 19 - Present)
            <br />
            <span className='font-weight-bold font-italic'>
              VP Hardware Engineering
            </span>{' '}
            - Energy Response Co., Ltd. (Aug 17 - Aug 19)
            <br />
            <span className='font-weight-bold font-italic'>
              Product Manager
            </span>{' '}
            - MixEn Corporation Co., Ltd. (jul 12 - Jul 17)
            <br />
            <span className='font-weight-bold font-italic'>
              Production Superviser
            </span>{' '}
            - Halcyon Technology Public Co., Ltd. (Mar 11 - Jun 12)
            <br />
            <span className='font-weight-bold font-italic'>
              Embedded Engineer
            </span>{' '}
            - MixEn Corporation Co., Ltd. (Feb 07 - Jan 11)
            <br />
            <span className='font-weight-bold font-italic'>Programmer</span> -
            Toyota Tsusho Electronics (Thailand) Co., Ltd. (Apr 06 - Jan 07)
          </p>
        </div>

        <div className='container pb-4'>
          <p className='lead font-weight-bold'>PORTFOLIOS</p>
          <UncontrolledCarousel items={items2} />
        </div>

        <div className='container'>
          <p className='lead font-weight-bold'>RECENT BLOGS</p>
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
