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
      src: `${DOMAIN}/static/images/header1.jpg`,
      altText: 'Slide 1',
      caption: 'Full-Stack IoT Developer',
      header: 'PORNPOL WASUWAT',
      key: '1'
    },
    {
      src: `${DOMAIN}/static/images/header2.jpg`,
      altText: 'Slide 2',
      caption: 'Runner',
      header: 'PORNPOL WASUWAT',
      key: '2'
    },
    {
      src: `${DOMAIN}/static/images/header3.jpg`,
      altText: 'Slide 3',
      caption: 'Traveller',
      header: 'PORNPOL WASUWAT',
      key: '3'
    }
  ];
  const items2 = [
    {
      src: `${DOMAIN}/static/images/portfolios/project1.jpg`,
      altText: 'IoT Environment Monitor',
      caption: 'Remote enviroment real-time monitor',
      header: 'IoT Environment Monitor',
      key: '1'
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project2.jpg`,
      altText: 'Production Monitoring System',
      caption: 'Real-time production monitor',
      header: 'Production Monitoring System',
      key: '2'
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project3.jpg`,
      altText: 'IoT Power Monitoring System',
      caption: 'Remote power real-time monitor',
      header: 'IoT Power Monitoring System',
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
          <p className='lead font-weight-bold'>BLOGS</p>
          <div className='row'>
            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/34140/pexels-photo.jpg' +
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
                      'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg' +
                      ')'
                  }}
                >
                  <h2 className='text-shadow text-center h1'>NodeJs</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/nodejs'>
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
                      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg' +
                      ')'
                  }}
                >
                  <h2 className='text-shadow text-center h1'>IoT</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/iot'>
                    <a>
                      <h3 className='h1'>IoT</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    The internet of things is the game-changer for an overall
                    business ecosystem transformation.
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
