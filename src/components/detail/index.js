import ConsumerReviews from '@/src/components/detail/ConsumerReviews';
import Descriptions from '@/src/components/detail/Descriptions';
import Overview from '@/src/components/detail/Overview';
import ProductGallery from '@/src/components/detail/ProductGallery';
import ReviewBox from '@/src/components/detail/ReviewBox';
import SellerDetail2 from '@/src/components/detail/sidebar/SellerDetail2';

import BreadCrumb from '@/src/components/user-profile/BreadCrumb';

import CarBrand from './CarBrand';
import CarLocation from './CarLocation';
import CarOffering from './CarOffering';
import Features from './Features';
import RelatedBestCar from './RelatedBestCar';

const DetailPage = () => {
  return (
    <div className='wrapper'>
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}

          <CarBrand />
          {/* End .row */}

          <div className="row">
            <div className="col-xl-6 mb30">
              <ProductGallery />
              {/* End Car Gallery */}
            </div>
            {/* End .col-xl-6 */}

            <div className="col-md-6 col-xl-3">
              <div className="opening_hour_widgets p30 mb30">
                <div className="wrapper">
                  <Overview />
                </div>
              </div>
              {/* End opening_hour_widgets */}
            </div>
            {/* End col-xl-3 */}

            <div className="col-md-6 col-xl-3">
              <CarOffering />
              {/* End offer_btn
               */}
              <div className="sidebar_seller_contact mb30">
                <SellerDetail2 />
              </div>
            </div>
            {/* End col-xl-3 */}
          </div>
          {/* End .row top portion*/}

          <div className="row">
            {/* End .col-xl-6 */}
            <div className="col-lg-6 col-xl-6">
              {/* End user profile service */}

              <div className="user_profile_service">
                <Features />
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <a className="fz12 tdu color-blue" href="#">
                      View all features
                    </a>
                  </div>
                </div>
              </div>

              <ConsumerReviews />
              {/* End ConsumerReviews */}
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="listing_single_description mt30">
                <h4 className="mb30">
                  Description{' '}
                  <span className="float-end body-color fz13">ID #9535</span>
                </h4>
                <Descriptions />
              </div>
              {/* End car descriptions */}

              <CarLocation />
              {/* End Location */}

              <ReviewBox />
              {/* End ReviewBox */}
            </div>
            {/* End col-xl-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* Car For Rent */}
      <RelatedBestCar />
      {/* End Car For Rent */}
    </div>
    // End wrapper
  );
};

export default DetailPage;
