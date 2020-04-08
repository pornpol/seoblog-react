import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import { UncontrolledCarousel } from 'reactstrap';

const Index = () => {
  const items = [
    {
      src: `${DOMAIN}/static/images/header1.jpg`,
      altText: 'Slide 1',
      caption: 'Full-Stack IoT Developer',
      header: 'PORNPOL WASUWAT',
      key: '1',
    },
    {
      src: `${DOMAIN}/static/images/header2.jpg`,
      altText: 'Slide 2',
      caption: 'Runner',
      header: 'PORNPOL WASUWAT',
      key: '2',
    },
    {
      src: `${DOMAIN}/static/images/header3.jpg`,
      altText: 'Slide 3',
      caption: 'Explorer',
      header: 'PORNPOL WASUWAT',
      key: '3',
    },
  ];
  const items2 = [
    {
      src: `${DOMAIN}/static/images/portfolios/project1.jpg`,
      altText: 'IoT Environment Monitor',
      caption: 'Remote enviroment real-time monitor',
      header: 'IoT Environment Monitor',
      key: '1',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project2.jpg`,
      altText: 'Production Monitoring System',
      caption: 'Real-time production monitor',
      header: 'Production Monitoring System',
      key: '2',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project3.jpg`,
      altText: 'IoT Power Monitoring System',
      caption: 'Remote power real-time monitor',
      header: 'IoT Power Monitoring System',
      key: '3',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project4.jpg`,
      altText: 'QRCode Generator',
      caption: 'Batch Generate QR-Code pdf',
      header: 'QRCode Generator',
      key: '4',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project5.jpg`,
      altText: 'DevCamper API',
      caption: 'Backend API for the DevCamper application',
      header: 'DevCamper API',
      key: '5',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project6.jpg`,
      altText: 'Ecommerce Website',
      caption: 'React Firebase ecommerce website',
      header: 'Ecommerce Website',
      key: '6',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project7.jpg`,
      altText: 'Production Monitoring System',
      caption: 'Real-time production monitor',
      header: 'Production Monitoring System',
      key: '7',
    },
    {
      src: `${DOMAIN}/static/images/portfolios/project8.jpg`,
      altText: 'Physical therapy machine',
      caption: 'Automatic physical therapy machine',
      header: 'Physical therapy machine',
      key: '8',
    },
  ];

  const head = () => (
    <Head>
      <title>Pornpol Wasuwat's Blog | {APP_NAME}</title>
      <meta
        name='description'
        content='Personal blogs and tutorials on react node next vue php laravel ans web development'
      />
      <link rel='canonical' href={`${DOMAIN}`} />
      <meta
        property='og:title'
        content={`Pornpol Wasuwat's Blog | ${APP_NAME}`}
      />
      <meta
        property='og:description'
        content='Personal blogs and tutorials on react node next vue php laravel ans web development'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}`} />
      <meta property='og:site_name' content={`${APP_NAME}`} />

      <meta
        property='og:image'
        content={`${DOMAIN}/static/images/header3.jpg`}
      />
      <meta
        property='og:image:secure_url'
        content={`${DOMAIN}/static/images/header3.jpg`}
      />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}

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
                  am Embedded IoT Engineer, Fullstack Developer and Technology
                  Lover. I always try and learn new skills in order to enhance
                  my abilities. I am a fast learner, highly motivated and able
                  to work under pressure.
                </p>
                <p className='text-justify'>
                  I am willing to help people solve their problems with strong
                  analytical and problem-solving skills using cutting edge
                  technologies. I have 10+ years experience in industrial &
                  agriculture sectors and participate in 50+ awesome projects.
                </p>
                <p className='text-center'>
                  Line ID: 9pol | Mobile: (+66) 089-677-8789 | Email:
                  9pol@9pol.dev
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
                Embedded Hardware Team Lead
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

          <div className='container'>
            <p className='lead font-weight-bold'>SKILLS</p>
            <p>
              <span className='font-weight-bold font-italic'>Electronics</span>{' '}
              - Circuit & PCB Design, MCU (Arduino, ESP32, STM32), IoT (NB-IoT,
              LoRa, MQTT), Embedded Linux (Raspberry Pi)
              <br />
              <span className='font-weight-bold font-italic'>
                Programming Languages
              </span>{' '}
              - C, C++, Python, HTML, CSS, JavaScript, TypeScript, PHP
              <br />
              <span className='font-weight-bold font-italic'>
                Programming Frameworks
              </span>{' '}
              - ReactJs, NodeJs, NestJs, Node-RED
              <br />
              <span className='font-weight-bold font-italic'>Databases</span> -
              MySQL, MongoDB, PostgreSQL, TimeScaleDB, SQLite
              <br />
              <span className='font-weight-bold font-italic'>Platforms</span> -
              Digital Ocean, Firebase
              <br />
              <span className='font-weight-bold font-italic'>Tools</span> - git,
              VSCode, Docker, PostMan etc.
              <br />
            </p>
          </div>

          <div className='container pb-4'>
            <p className='lead font-weight-bold'>SHOWCASE</p>
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
                        ')',
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
                        ')',
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
                        ')',
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
    </React.Fragment>
  );
};

export default Index;
