import ShareMeta from '@/src/components/detail/ShareMeta';

export default function CarBrand() {
  return (
    <div className="row mb30">
      <div className="col-lg-7 col-xl-8">
        <div className="single_page_heading_content">
          <div className="car_single_content_wrapper">
            <ul className="car_info mb20-md">
              <li className="list-inline-item">
                <a href="#">BRAND NEW - IN STOCK</a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-clock-1 vam" />1 years ago
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-eye vam" />
                  13102
                </a>
              </li>
            </ul>
            <h2 className="title">Volvo XC 90</h2>
            <p className="para">
              2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg-7 */}

      <div className="col-lg-5 col-xl-4">
        <div className="single_page_heading_content text-start text-lg-end">
          <div className="share_content">
            <ShareMeta />
          </div>
          <div className="price_content">
            <div className="price mt60 mb10 mt10-md">
              <h3>
                <small className="mr15">
                  <del>$92,480</del>
                </small>
                $89,480
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* End col-lg-5 */}
    </div>
  );
}
