import Map from '@/src/components/common/Map';
import Address from '@/src/components/pages/contact/Address';
import Form from '@/src/components/pages/contact/Form';

export const metadata = {
  title: 'Contact || Voiture - Automotive & Car Dealer NextJS Template',
};

const Contact = () => {
  return (
    <div className="wrapper">
      {/* <!-- Our Contact --> */}
      <section className="our-contact p0 mt0 mt70-992">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600 map_in">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Our Contact --> */}

      {/* Our Contact */}
      <section className="our-contact  bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Address />
            </div>
            {/* End .col-md-4 */}

            <div className="col-md-8">
              <div className="form_grid">
                <div className="wrapper">
                  <h3 className="title mb20">Contact Form</h3>
                  <Form />
                </div>
              </div>
            </div>
            {/* End .col-md-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Contact */}
    </div>
    // End wrapper
  );
};

export default Contact;
