import BannerWidget from '@/src/components/common/BannerWidget';
import FaqQuestion from '@/src/components/pages/faq/FaqQuestion';

export const metadata = {
  title: 'Faq Question || Voiture - Automotive & Car Dealer NextJS Template',
};

const Faq = () => {
  return (
    <div className="wrapper">

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Faq</h2>
                <p className="subtitle">Faq</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Faq
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Our FAQ */}
      <section className="our-faq bgc-f9 pt0 pb80">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <div className="faq_content mb40">
                <div className="faq_according">
                  <FaqQuestion />
                </div>
              </div>
            </div>
            {/* End .col-md-7 */}

            <div className="col-xs-8 col-sm-8 col-md-5 col-xl-3 offset-xl-1">
              <BannerWidget />
            </div>
            {/* End .col-xs-8 */}
          </div>
        </div>
      </section>
      {/* End Our FAQ */}
    </div>
    // End wrapper
  );
};

export default Faq;
