import Image from 'next/image';

import Address from './Adress';
import Counter from './Counter';
import Hero from './Hero';
import SaleBanner from './SaleBanner';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <div className="wrapper ovh">
      <Hero />
      {/* End Hero */}

      {/* How It Works */}
      <section className="whychose_us">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row">
                <WhyChoose />
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-lg-6">
              <div className="service_thumb">
                <Image
                  width={636}
                  height={677}
                  style={{ objectFit: 'cover', width: '100%' }}
                  src="/images/service/1.jpg"
                  alt="1.jpg"
                />
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End How It Works */}

      {/* <!-- image with coutner --> */}
      <div className="container">
        <div className="row">
          <Counter />
        </div>
      </div>
      {/* <!-- End image with coutner --> */}

      {/* <!-- Divider --> */}
      <section className="pt0 bb1">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section>

      <section className="popular-listing pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2>How To Find Us</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Address />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
