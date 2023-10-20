// Home Component
// --------------------------------------------------------

import MobileMenu from "@/components/molecules/MobileMenu";
import Category from "@/components/organisms/Category";
import FeatureListing from "@/components/organisms/FeatureListing";
import Header from "@/components/organisms/Header";
import HeaderSidebar from "@/components/organisms/HeaderSidebar";
import Hero from "@/components/organisms/Hero";

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

    </div>
  );
};
export default Home;
