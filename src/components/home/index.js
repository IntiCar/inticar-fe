import Image from 'next/image';
import Link from 'next/link';
import CarType from './CarType';
import Category from './Category';
import Counter from './Counter';
import FeatureListing from './FeatureListing';
import Hero from './Hero';
import SaleBanner from './SaleBanner';
import Testimonial from './Testimonial';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <div className="wrapper ovh">
      <Hero />
      {/* End Hero */}

      {/* Car Category */}
      <section className="car-category mobile_space pt90 pb15 mt0-520">
        <div className="container">
          <div className="row">
            <Category />
          </div>
        </div>
      </section>
      {/* End Car Category */}

      {/* Our Featured Listings */}
      <section className="popular-listing pb80 bgc-f9 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Featured Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade" data-aos-delay="100">
              <div className="home1_popular_listing home2_style">
                <div className="listing_item_4grid_slider dots_none">
                  <FeatureListing />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Featured Listings */}

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

      {/* Our Testimonials */}
      <section className="our-testimonial bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Testimonials</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Testimonials */}

      {/* CarType  */}
      <section className="popular-listing ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Browse By Type</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <CarType />
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <Link href="/explore" className="more_listing">
                  Show All Cars{' '}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End CarType */}

      {/* <!-- Divider --> */}
      <section className="pt0 bb1">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
