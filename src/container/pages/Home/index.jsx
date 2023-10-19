// Home Component
// --------------------------------------------------------

import MobileMenu from "@/components/molecules/MobileMenu";
import Header from "@/components/organisms/Header";
import HeaderSidebar from "@/components/organisms/HeaderSidebar";
import Hero from "@/components/organisms/Hero";

const Home = () => {
  return (
    <div className="wrapper ovh bg-home6">
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
    </div>
  );
};
export default Home;
