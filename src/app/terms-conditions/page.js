import Terms from '@/src/components/pages/tersm-conditions/Terms';

export const metadata = {
  title:
    'Terms & Conditions || Voiture - Automotive & Car Dealer NextJS Template',
};

const TermsConditions = () => {
  return (
    <div className="wrapper">
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">Terms and Condition</h2>
                <ol className="breadcrumb fn-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Terms and Condition</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Breadcrumb */}

      {/* Our Terms & Conditions */}
      <section className="our-terms pb90">
        <div className="container">
          <div className="row">
            <Terms />
          </div>
        </div>
      </section>
      {/* Our Terms & Conditions */}
    </div>
  );
};

export default TermsConditions;
