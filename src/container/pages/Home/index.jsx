// Home Component
// --------------------------------------------------------

import MobileMenu from '@/components/molecules/MobileMenu';
import WhyChoose from '@/components/molecules/WhyChoose';
import Category from '@/components/organisms/Category';
import FeatureListing from '@/components/organisms/FeatureListing';
import Header from '@/components/organisms/Header';
import HeaderSidebar from '@/components/organisms/HeaderSidebar';
import Hero from '@/components/organisms/Hero';

import ImgService1 from '@/assets/images/service/1.jpg';

import Footer from '@/components/common/footer';
import SaleBanner from '@/components/molecules/SaleBanner';
import CarType from '@/components/organisms/CarType';
import Counter from '@/components/organisms/Counter';
import LoginSignupModal from '@/components/organisms/LoginSignupModal';
import Testimonial from '@/components/organisms/Testimonial';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Home = () => {
  return (
    <div className="wrapper ovh">
      {/* Sidebar Panel Start */}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Hero */}
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
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={ImgService1}
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
      <section className="divider-home6-style pb90 bg-img2">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section>
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
                <Link to="/listing-v1" className="more_listing">
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
      {/* <!-- End Divider --> */}

      <Footer />

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
  );
};
export default Home;
